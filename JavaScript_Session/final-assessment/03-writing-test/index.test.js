import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('sum function', async (t) => {
  await t.test('should return correct sum of two negative numbers', () => {
    assert.strictEqual(sum(-5, -3), -8);
  });
});