import analyzeArray from './analyzeArray.js'

it('Empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0
    });
});

it('Array with a single element', () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
});

it('Array with the multiple elements', () => {
    expect(analyzeArray([3, 1, 7, 2, 5])).toEqual({
        average: 3.6,
        min: 1,
        max: 7,
        length: 5
    });
});

it('Array with negative numbers', () => {
    expect(analyzeArray([-2, -6, -1, -8, -3])).toEqual({
        average: -4,
        min: -8,
        max: -1,
        length: 5
    });
});

it('Array with decimal numbers', () => {
    expect(analyzeArray([2.5, 1.3, 4.7, 3.2, 5.1])).toEqual({
        average: 3.16,
        min: 1.3,
        max: 5.1,
        length: 5
    });
});

it('Array with duplicates', () => {
    expect(analyzeArray([1, 2, 2, 3, 3, 3])).toEqual({
        average: 2.33,
        min: 1,
        max: 3,
        length: 6
    });
});