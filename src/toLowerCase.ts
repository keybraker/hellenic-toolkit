const greekUpperToLowerMap: { [key: string]: string } = {
    'Α': 'α', 'Β': 'β', 'Γ': 'γ', 'Δ': 'δ', 'Ε': 'ε', 'Ζ': 'ζ', 'Η': 'η', 'Θ': 'θ',
    'Ι': 'ι', 'Κ': 'κ', 'Λ': 'λ', 'Μ': 'μ', 'Ν': 'ν', 'Ξ': 'ξ', 'Ο': 'ο', 'Π': 'π',
    'Ρ': 'ρ', 'Σ': 'σ', 'Τ': 'τ', 'Υ': 'υ', 'Φ': 'φ', 'Χ': 'χ', 'Ψ': 'ψ', 'Ω': 'ω',
    'Ά': 'ά', 'Έ': 'έ', 'Ή': 'ή', 'Ί': 'ί', 'Ό': 'ό', 'Ύ': 'ύ', 'Ώ': 'ώ', 'Ϊ': 'ϊ',
    'Ϋ': 'ϋ'
};

export function toLowerCase(text: string): string {
    return text.replace(/[Α-ΩΆΈΉΊΌΎΏΪΫ]/g, (char) => greekUpperToLowerMap[char] || char).toLowerCase();
}
