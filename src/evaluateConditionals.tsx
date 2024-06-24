/**
 * This function evaulates the expression using the Function constructor. This is effectively an eval statement.
 * Don't use this in production with untrusted user data!
 */
function evaluate(when: string): boolean {
  return !!new Function('env', `return (${when});`)(process.env);
}

/**
 * Finds objects with a `$when` property and evaluates them. If true, returns the object excluding the `$when` property,
 * otherwise the object is removed from the tree. If there is a `$value` property it is returned instead of the
 * current object.
 *
 * This descends recursively through the entire object tree, including arrays. If there are cycles it will stack
 * overflow.
 */
export function evaluateConditionals<T>(o: T): T | undefined {
  if (typeof o !== 'object' || o == null) {
    return o;
  }
  if (o instanceof Array) {
    const cleaned = o.map(evaluateConditionals).filter((i) => i !== undefined);
    return cleaned.length ? (cleaned as T) : undefined;
  }

  if ('$when' in o) {
    if (typeof o.$when === 'string') {
      const when = evaluate(o.$when);
      if (!when) return undefined;
    } else if (!o.$when) return undefined;
  }

  if ('$value' in o) {
    return evaluateConditionals(o.$value) as T;
  }

  return Object.fromEntries(
    Object.entries(o)
      .filter(([k]) => k !== 'when')
      .map(([k, v]) => [k, evaluateConditionals(v)])
      .filter(([, v]) => v !== undefined)
  ) as T;
}
