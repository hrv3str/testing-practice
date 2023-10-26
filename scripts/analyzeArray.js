const analyzeArray = (array) => {
    const calculateAverage = () => {
        // Returns NaN if array is empty
        if (array.length <= 0) return NaN;
        else {
            // Initializes variable to store sum of items
            let sum = 0;
            // Iterates through array and sum item values
            for (let i = 0; i < array.length; i++) sum += array[i];
            // Returns sum divided by array length to get average
            return sum / array.length
        }
    }

    const calculateMax = () => {
        // Returns 'undefined' if array is empty
        if (array.length <= 0) return undefined;
        else {
            // Initializes variable to store max
            let max = 0;
            // Iterates through array
            for (let i = 0; i < array.length; i++) {
                // Compares array item to 'max', if item is greater then stores it to 'max'
                if (array[i] > max) max = array[i];
            }
            return max;
        }
    }

    const calculateMin = () => {
        // Returns 'undefined' if array is empty
        if (array.length <= 0) return undefined;
        else {
            // Initializes variable to store min
            let min = array[0];
            // Iterates through array
            for (let i = 0; i < array.length; i++) {
                // Compares array item to 'min', if item is less then stores it to 'min'
                if (array[i] < min) min = array[i];
            }
            return min
        }
    }

    // Initializes template object
    const output = {
        average: undefined,
        min: undefined,
        max: undefined,
        length: undefined
    };

    //  Calculates object keys
    output.average = calculateAverage();
    output.min = calculateMin();
    output.max = calculateMax();
    output.length = array.length;

    return output;
}

export default analyzeArray;