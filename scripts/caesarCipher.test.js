import caesarCipher from './caesarCipher.js';

it('Shift by positive number', () => {
    expect(caesarCipher('abc xyz', 3)).toBe('def abc');
});

it('Shift by negative number', () => {
    expect(caesarCipher('abc xyz', -2)).toBe('yza vwx');
});

it('Wrap from "z" to "a"', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('Maintain uppercase and lowercase', () => {
    expect(caesarCipher('AbC XyZ', 1)).toBe('BcD YzA');
});

it('Maintain punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 2)).toBe('Jgnnq, Yqtnf!');
});

it('Maintain large shift factor', () => {
    expect(caesarCipher('abc xyz', 26)).toBe('abc xyz');
});

it('Maintain shift factor greater than 26', () => {
    expect(caesarCipher('abc', 30)).toBe('efg');
});