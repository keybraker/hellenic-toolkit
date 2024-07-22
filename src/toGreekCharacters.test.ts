import { toGreekCharacters } from '../src/toGreekCharacters';

describe('toGreekCharacters', () => {
  it('should convert lowercase English characters to Greek equivalents', () => {
    expect(toGreekCharacters('hello')).toBe('ηεllο');
    expect(toGreekCharacters('kite')).toBe('κιτε');
  });

  it('should convert uppercase English characters to Greek equivalents', () => {
    expect(toGreekCharacters('HELLO')).toBe('ΗΕLLΟ');
    expect(toGreekCharacters('KITE')).toBe('ΚΙΤΕ');
  });

  it('should handle mixed case English characters', () => {
    expect(toGreekCharacters('HeLLo')).toBe('ΗεLLο');
    expect(toGreekCharacters('KitE')).toBe('ΚιτΕ');
  });

  it('should handle mixed Greek and English text', () => {
    expect(toGreekCharacters('Hello κόσμε!')).toBe('Ηεllο κόσμε!');
    expect(toGreekCharacters('HELLO κόσμε!')).toBe('ΗΕLLΟ κόσμε!');
  });

  it('should handle all letters in the provided map', () => {
    expect(toGreekCharacters('abcdefghiklmnorstxyz')).toBe('αβcdεfgηικlμνορsτχυζ');
    expect(toGreekCharacters('ABCDEFGHIJKLMNORSTXYZ')).toBe('ΑΒCDΕFGΗΙJΚLΜΝΟRSΤΧΥΖ');
  });

  it('should handle empty strings', () => {
    expect(toGreekCharacters('')).toBe('');
  });

  it('should not convert characters not in the map', () => {
    expect(toGreekCharacters('psg')).toBe('psg');
    expect(toGreekCharacters('PSG')).toBe('ΡSG');
  });

  it('should handle punctuation and spaces correctly', () => {
    expect(toGreekCharacters('Hello, world!')).toBe('Ηεllο, wορld!');
    expect(toGreekCharacters('HELLO, WORLD!')).toBe('ΗΕLLΟ, WΟRLD!');
  });
});
