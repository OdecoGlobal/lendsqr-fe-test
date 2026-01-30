/* eslint-disable @typescript-eslint/ban-ts-comment */
import { formatDateTime } from './formatDate';
import { expect, describe, it } from 'vitest';

describe('formatDateTime', () => {
  it('formats a valid Date correctly', () => {
    const testDate = new Date('2023-01-25T08:30:00');
    const result = formatDateTime(testDate);

    expect(result).toHaveProperty('dateTime');
    expect(result).toHaveProperty('dateOnly');
    expect(result).toHaveProperty('timeOnly');

    expect(result.dateTime).toMatch(/Jan 25, 2023/);
    expect(result.dateTime).toMatch(/8:30/);
    expect(result.dateTime).toMatch(/AM|PM/);

    expect(result.dateOnly).toMatch(/Wed, Jan 25, 2023/);

    expect(result.timeOnly).toMatch(/8:30/);
    expect(result.timeOnly).toMatch(/AM|PM/);
  });

  it("accepts a Date object created with 'new Date()'", () => {
    const now = new Date();
    const result = formatDateTime(now);
    expect(result.dateTime).toContain(String(now.getFullYear()));
  });

  it("returns 'Invalid Date' for an invalid Date object", () => {
    const invalidDate = new Date('invalid-date-string');
    const result = formatDateTime(invalidDate);

    expect(result.dateTime).toBe('Invalid Date');
    expect(result.dateOnly).toBe('Invalid Date');
    expect(result.timeOnly).toBe('Invalid Date');
  });

  it('handles null input gracefully', () => {
    // @ts-ignore testing runtime invalid input
    const result = formatDateTime(null);

    expect(result.dateTime).toBe('Invalid Date');
    expect(result.dateOnly).toBe('Invalid Date');
    expect(result.timeOnly).toBe('Invalid Date');
  });

  it('handles undefined input gracefully', () => {
    // @ts-ignore testing runtime invalid input
    const result = formatDateTime(undefined);

    expect(result.dateTime).toBe('Invalid Date');
    expect(result.dateOnly).toBe('Invalid Date');
    expect(result.timeOnly).toBe('Invalid Date');
  });
});
