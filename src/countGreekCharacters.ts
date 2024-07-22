export function countGreekCharacters(text: string): number {
    const greekChars = text.match(/[\u0370-\u03FF\u1F00-\u1FFF]/g);
    return greekChars ? greekChars.length : 0;
}