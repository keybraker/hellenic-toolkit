const diacriticsMap: { [key: string]: string } = {
    'ά': 'α', 'έ': 'ε', 'ή': 'η', 'ί': 'ι', 'ό': 'ο', 'ύ': 'υ', 'ώ': 'ω',
    'Ά': 'Α', 'Έ': 'Ε', 'Ή': 'Η', 'Ί': 'Ι', 'Ό': 'Ο', 'Ύ': 'Υ', 'Ώ': 'Ω',
    'ϊ': 'ι', 'ϋ': 'υ', 'ΐ': 'ι', 'ΰ': 'υ'
};

export function removeDiacritics(text: string): string {
    return text.replace(/[άέήίόύώΆΈΉΊΌΎΏϊϋΐΰ]/g, (char) => diacriticsMap[char] || char);
}
