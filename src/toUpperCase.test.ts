import { toUpperCase } from './toUpperCase';

describe('toUpperCase', () => {
  it('should convert Greek text to uppercase', () => {
    expect(toUpperCase('καλημέρα')).toBe('ΚΑΛΗΜΕΡΑ');
    expect(toUpperCase('κόσμε')).toBe('ΚΟΣΜΕ');
    expect(toUpperCase('άέήίόύώ')).toBe('ΑΕΗΙΟΥΩ');
  });

  it('should handle mixed Greek and non-Greek text', () => {
    expect(toUpperCase('Καλημέρα, κόσμε!')).toBe('ΚΑΛΗΜΕΡΑ, ΚΟΣΜΕ!');
  });

  it('should handle empty strings', () => {
    expect(toUpperCase('')).toBe('');
  });
});
