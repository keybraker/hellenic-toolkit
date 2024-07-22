export function isGreek(text: string): boolean {
    return /^[\u0370-\u03FF\u1F00-\u1FFF\s]+$/.test(text.trim());
}
