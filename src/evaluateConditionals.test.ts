import { evaluateConditionals } from './evaluateConditionals';
import assert from 'node:assert';

describe('boring object', () => {
  it('does nothing', () => {
    const result = evaluateConditionals({ hello: 'there' });
    assert.deepEqual(result, { hello: 'there' });
  });
});
