import { removeDiacritics } from './removeDiacritics';

const greekLowerToUpperMap: { [key: string]: string } = {
    'α': 'Α', 'β': 'Β', 'γ': 'Γ', 'δ': 'Δ', 'ε': 'Ε', 'ζ': 'Ζ', 'η': 'Η', 'θ': 'Θ',
    'ι': 'Ι', 'κ': 'Κ', 'λ': 'Λ', 'μ': 'Μ', 'ν': 'Ν', 'ξ': 'Ξ', 'ο': 'Ο', 'π': 'Π',
    'ρ': 'Ρ', 'σ': 'Σ', 'ς': 'Σ', 'τ': 'Τ', 'υ': 'Υ', 'φ': 'Φ', 'χ': 'Χ', 'ψ': 'Ψ',
    'ω': 'Ω', 'ά': 'Ά', 'έ': 'Έ', 'ή': 'Ή', 'ί': 'Ί', 'ό': 'Ό', 'ύ': 'Ύ', 'ώ': 'Ώ',
    'ϊ': 'Ϊ', 'ϋ': 'Ϋ', 'ΐ': 'Ϊ', 'ΰ': 'Ϋ'
};

export function toUpperCase(text: string): string {
    const withoutDiacritics = removeDiacritics(text);
    return withoutDiacritics.replace(/[α-ωάέήίόύώϊϋΐΰ]/g, (char) => greekLowerToUpperMap[char] || char);
}
