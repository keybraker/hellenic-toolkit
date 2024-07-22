import { countGreekCharacters } from '../src/countGreekCharacters';

describe('countGreekCharacters', () => {
  it('should count Greek characters in a text', () => {
    expect(countGreekCharacters('καλημέρα')).toBe(8);
    expect(countGreekCharacters('καλημέρα κόσμε')).toBe(13);
  });

  it('should handle empty strings', () => {
    expect(countGreekCharacters('')).toBe(0);
  });

  it('should return 0 for non-Greek text', () => {
    expect(countGreekCharacters('hello')).toBe(0);
  });
});
