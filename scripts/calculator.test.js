import calculator from './calculator.js';

// Addition tests
describe('Addition', () => {
    it('Check if arguments are numbers', () => {
        expect(calculator.add(5, '3')).toBeNaN();
    })
    
    it('Adding two positive numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });
    
    it('Adding positive and negative numbers', () => {
        expect(calculator.add(5, -3)).toBe(2);
    });
    
    it('Adding two negative numbers', () => {
        expect(calculator.add(-5, -3)).toBe(-8);
    });
    
    it('Adding zero to positive number', () => {
        expect(calculator.add(0, 7)).toBe(7);
    });
    
    it('Adding zero to negative number', () => {
        expect(calculator.add(0, -7)).toBe(-7);
    });
    
    it('Adding zero to zero', () => {
        expect(calculator.add(0, 0)).toBe(0);
    });
});

//Subtraction tests
describe('Subtraction', () => {
    it('Check if arguments are numbers', () => {
        expect(calculator.subtract(5, '3')).toBeNaN();
    });
    
    it('Subtract a smaller positive from larger positive', () => {
        expect(calculator.subtract(8, 3)).toBe(5);
    });
    
    it('Subtract positive number from negative', () => {
        expect(calculator.subtract(-5, 3)).toBe(-8);
    });
    
    it('Subtract negative number from positive', () => {
        expect(calculator.subtract(5, -3)).toBe(8);
    })
    
    it('Subtract smaller negative from larger negative', () => {
        expect(calculator.subtract(-3, -5)).toBe(2);
    });
    
    it('Subtract zero from positive number', () => {
        expect(calculator.subtract(7, 0)).toBe(7);
    })
})

// Multiplication tests
describe('Multiplication', () => {
    it('Check if arguments are numbers', () => {
        expect(calculator.multiply(5, '3')).toBeNaN();
    });
    
    it('Multiply two positives', () => {
        expect(calculator.multiply(6, 4)).toBe(24);
    });
    
    it('Multiply negative and positive', () => {
        expect(calculator.multiply(6, -4)).toBe(-24);
    });
    
    
    it('Multiply two negatives', () => {
        expect(calculator.multiply(-6, -4)).toBe(24);
    });
    
    it('Multiply zero by number', () => {
        expect(calculator.multiply(0, 6)).toBe(0);
    });
})

// Division tests
describe('Division', () => {
    it('Check if arguments are numbers', () => {
        expect(calculator.divide(5, '3')).toBeNaN();
    });
    
    it('Divide larger by smaller positives', () => {
        expect(calculator.divide(12, 3)).toBe(4);
    });
    
    it('Divide positive by negative', () =>{
        expect(calculator.divide(12, -3)).toBe(-4);
    });
    
    it('Divide negative by positive', () => {
        expect(calculator.divide(-12, w3)).toBe(-4);
    });
    
    it('Divide smaller negative by larger negative', () => {
        expect(calculator.divide(-3, -12)).toBe(0.25);
    });
    
    it('Divide zero by number', () => {
        expect(calculator.divide(0, 3)).toBe(0);
    });
    
    it('Divide number by zero', () => {
        expect(calculator.divide(3, 0)).toBe(undefined);
    });
})


