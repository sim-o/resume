import { evaluateConditionals } from './evaluateConditionals';
import assert from 'node:assert';

describe('object with no conditionals', () => {
  it('does nothing', () => {
    const result = evaluateConditionals({ hello: 'there' });
    assert.deepEqual(result, { hello: 'there' });
  });
});

describe('a when clause that evaluates false', () => {
  it('removes an object', () => {
    global.myConditionalValue = 'not ok';
    const result = evaluateConditionals({
      abc: {
        $when: 'global.myConditionalValue === "ok"',
      },
    });
    assert.deepEqual(result, {});
  });

  it('deletes an empty array', () => {
    global.myConditionalValue = 'not ok';
    const result = evaluateConditionals({
      abc: [
        {
          $when: 'global.myConditionalValue === "ok"',
        },
        {
          $when: 'global.myConditionalValue === "ok"',
          delete: 'me',
        },
      ],
    });
    assert.deepEqual(result, {});
  });
});

describe('a when clause that evaluates true', () => {
  it('removes an object', () => {
    global.myConditionalValue = 'ok';
    const result = evaluateConditionals({
      abc: {
        $when: 'global.myConditionalValue === "ok"',
        something: true,
      },
    });
    assert.deepEqual(result, {
      abc: {
        something: true,
      },
    });
  });

  it('preserves an object in a value clause', () => {
    global.myConditionalValue = 'ok';
    const result = evaluateConditionals({
      abc: {
        $when: 'global.myConditionalValue === "ok"',
        $value: {
          something: true,
        },
      },
    });
    assert.deepEqual(result, {
      abc: {
        something: true,
      },
    });
  });

  it('preserves part of an array', () => {
    global.myConditionalValue = 'ok';
    const result = evaluateConditionals({
      abc: [
        {
          $when: 'global.myConditionalValue === "ok"',
          $value: {
            something: true,
          },
        },
        {
          $when: 'global.myConditionalValue === "ok"',
          something: true,
        },
        {
          $when: 'global.myConditionalValue === "not ok"',
          $value: {
            something: true,
          },
        },
      ],
    });
    assert.deepEqual(result, {
      abc: [
        {
          something: true,
        },
        {
          something: true,
        },
      ],
    });
  });
});
