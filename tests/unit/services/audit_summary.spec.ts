import { describe, expect, it } from 'vitest';
import { applyDiscount } from '../src/audit_summary';

describe('applyDiscount', () => {
  it('applies the standard discount', () => {
    expect(applyDiscount(100)).toBe(90);
  });
});
