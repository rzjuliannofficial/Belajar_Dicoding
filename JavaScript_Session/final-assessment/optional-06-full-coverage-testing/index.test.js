import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import sum from './index.js';

test('sum function', async (t) => {
  await t.test('should return correct sum of two positive numbers', () => {
    assert.strictEqual(sum(5, 3), 8);
  });

  await t.test('should return 0 when one number is negative', () => {
    assert.strictEqual(sum(5, -3), 0);
  });

  await t.test('should return 0 when both numbers are negative', () => {
    assert.strictEqual(sum(-5, -3), 0);
  });

  await t.test('should return 0 when a is not a number', () => {
    assert.strictEqual(sum('5', 3), 0);
  });

  await t.test('should return 0 when b is not a number', () => {
    assert.strictEqual(sum(5, '3'), 0);
  });

  await t.test('should return sum with zero', () => {
    assert.strictEqual(sum(0, 5), 5);
  });

  await t.test('should return zero when both are zero', () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  await t.test('should return correct sum with decimal numbers', () => {
    assert.strictEqual(sum(1.5, 2.5), 4);
  });
});