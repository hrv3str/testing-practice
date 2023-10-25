import capitalize from './capitalize';

it('"lorem ipsum" ==> "Lorem ipsum"', () => {
    expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
});

it('"lorem" ==> "Lorem"', () => {
    expect(capitalize('lorem')).toBe('Lorem');
});

it('"Lorem" ==> "Lorem"', () => {
    expect(capitalize('Lorem')).toBe('Lorem');
});

it('"l" ==> "L"', () => {
    expect(capitalize('l')).toBe('L');
});

it('Empty string', () => {
    expect(capitalize('')).toBe('');
});

it('String with leading spaces', () => {
    expect(capitalize('  lorem ipsum')).toBe('  Lorem ipsum');
});

it('String with trailing spaces', () => {
    expect(capitalize('lorem ipsum  ')).toBe('Lorem ipsum  ');
});

it('String with non-alphabetical characters', () => {
    expect(capitalize('1234##%test!!')).toBe('1234##%Test!!');
});