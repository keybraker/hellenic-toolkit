import { toEnglishCharacters } from './toEnglishCharacters';

describe('toEnglishCharacters', () => {
  it('should convert Greek characters to English equivalents', () => {
    expect(toEnglishCharacters('Καλημέρα, κόσμε!')).toBe('Kalimera, kosme!');
    expect(toEnglishCharacters('ΆΈΉΊΌΎΏ')).toBe('AEIIOYO');
    expect(toEnglishCharacters('ΑΒΓΔ')).toBe('ABGD');
  });

  it('should handle text without Greek characters', () => {
    expect(toEnglishCharacters('Hello, world!')).toBe('Hello, world!');
  });

  it('should handle empty strings', () => {
    expect(toEnglishCharacters('')).toBe('');
  });
});
