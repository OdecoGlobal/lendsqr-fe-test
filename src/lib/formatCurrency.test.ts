import { describe, expect, it } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats a number correctly', () => {
    expect(formatCurrency(1000)).toBe('₦1,000.00');
  });

  it('formats a numeric string correctly', () => {
    expect(formatCurrency('2500.5')).toBe('₦2,500.50');
  });

  it('formats zero correctly', () => {
    expect(formatCurrency(0)).toBe('₦0.00');
  });

  it("returns 'NaN' when amount is null", () => {
    expect(formatCurrency(null)).toBe('NaN');
  });

  it("returns 'NaN' when amount is undefined", () => {
    expect(formatCurrency(undefined)).toBe('NaN');
  });

  it("returns 'NaN' when amount is a non-numeric string", () => {
    expect(formatCurrency('hello')).toBe('NaN');
  });
});
