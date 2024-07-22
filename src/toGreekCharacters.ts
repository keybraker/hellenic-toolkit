const englishToGreekMap: { [key: string]: string } = {
    'a': 'α', 'b': 'β', 'e': 'ε', 'h': 'η', 'i': 'ι', 'k': 'κ', 'm': 'μ', 'n': 'ν',
    'o': 'ο', 'r': 'ρ', 't': 'τ', 'x': 'χ', 'y': 'υ', 'z': 'ζ',
    'A': 'Α', 'B': 'Β', 'E': 'Ε', 'H': 'Η', 'I': 'Ι', 'K': 'Κ', 'M': 'Μ', 'N': 'Ν',
    'O': 'Ο', 'P': 'Ρ', 'T': 'Τ', 'X': 'Χ', 'Y': 'Υ', 'Z': 'Ζ'
};

export function toGreekCharacters(text: string): string {
    const regex = new RegExp(Object.keys(englishToGreekMap).join('|'), 'g');
    return text.replace(regex, (matched) => englishToGreekMap[matched] || matched);
}
