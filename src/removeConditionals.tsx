export function removeConditionals<T>(o: T): T | undefined {
  if (typeof o !== 'object' || o == null) {
    return o;
  }
  if (o instanceof Array) {
    const cleaned = o.map(removeConditionals).filter((i) => i !== undefined);
    return cleaned.length ? (cleaned as T) : undefined;
  }

  if ('$when' in o) {
    if (typeof o.$when === 'string') {
      const when = new Function('env', `return (${o.$when})`)(process.env);
      if (!when) return undefined;
    } else if (!o.$when) return undefined;
  }

  if ('$value' in o) {
    return removeConditionals(o.$value) as T;
  }

  return Object.fromEntries(
    Object.entries(o)
      .filter(([k]) => k !== 'when')
      .map(([k, v]) => [k, removeConditionals(v)])
      .filter(([, v]) => v !== undefined)
  ) as T;
}
