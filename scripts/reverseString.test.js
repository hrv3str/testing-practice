import reverseString from './reverseString';

it('Empty string input', () => {
    expect(reverseString('')).toBe('');
});

it('Single character input', () => {
    expect(reverseString('h')).toBe('h');
});

it('String with multiple characters',() => {
    expect(reverseString('hello')).toBe('olleh');
});

it('String with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

it('String with punctuation', () => {
    expect(reverseString('hello world!!!')).toBe('!!!dlrow olleh');
});

it('String with uppercase and lovercase characters', () => {
    expect(reverseString('hElLo WoRlD')).toBe('DlRoW oLlEh');
});

it('String with special characters', () => {
    expect(reverseString('123@#abc')).toBe('cba#@321')
});