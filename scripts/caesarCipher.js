const caesarCipher = (string, shift) => {
    // Initializes alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Initializes empty string for output
    let cryptoString = '';

    // Iterates through input string
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        // Checks if char is uppercase and stores result
        let isUpperCase = char === char.toUpperCase();
        // Converts char to lower case to check if is in alphabet
        char = char.toLowerCase();

        if (alphabet.includes(char)) {
            // If char is found in alphabet then searches for its index
            const index = alphabet.indexOf(char);
            // Adds shift to get encrypted char index, modulo 26 to handle wrapping
            let newIndex = (index + shift) % 26;
            if (newIndex < 0) newIndex += 26;

            //  Initializes encrypted char according to new index
            let newChar = alphabet[newIndex];
            //  If source char was uppercase it makes new one uppercase
            if (isUpperCase) newChar = newChar.toUpperCase();

            //  Adds the encrypted char to the output string
            cryptoString += newChar;
        } else {
            // If source char is not found in alphabet, it is addedgit  to output without encryption
            cryptoString += string[i];
        }
    }

    // Returns encrypted string
    return cryptoString;
}

export default caesarCipher