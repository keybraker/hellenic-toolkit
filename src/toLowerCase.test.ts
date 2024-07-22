import { toLowerCase } from '../src/toLowerCase';

describe('toLowerCase', () => {
  it('should convert Greek text to lowercase', () => {
    expect(toLowerCase('ΚΑΛΗΜΕΡΑ')).toBe('καλημερα');
    expect(toLowerCase('ΚΟΣΜΕ')).toBe('κοσμε');
    expect(toLowerCase('ΆΈΉΊΌΎΏ')).toBe('άέήίόύώ');
  });

  it('should handle mixed Greek and non-Greek text', () => {
    expect(toLowerCase('Καλημέρα, Κόσμε!')).toBe('καλημέρα, κόσμε!');
  });

  it('should handle empty strings', () => {
    expect(toLowerCase('')).toBe('');
  });
});
