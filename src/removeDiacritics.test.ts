import { removeDiacritics } from '../src/removeDiacritics';

describe('removeDiacritics', () => {
  it('should remove diacritics from Greek characters', () => {
    expect(removeDiacritics('Καλημέρα, κόσμε!')).toBe('Καλημερα, κοσμε!');
    expect(removeDiacritics('ΆΈΉΊΌΎΏ')).toBe('ΑΕΗΙΟΥΩ');
  });

  it('should handle text without diacritics', () => {
    expect(removeDiacritics('Καλημερα, κοσμε!')).toBe('Καλημερα, κοσμε!');
  });

  it('should handle empty strings', () => {
    expect(removeDiacritics('')).toBe('');
  });
});
