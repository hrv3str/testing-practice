const reverseString = (string) => {
    // Check if string is empty and returns it if does
    if (string.length === 0) return string;

    // If string is not empty - splits it into array of characters
    const charArray = string.split('');
    let outputArray = [];

    // Iterates through character array from the end and every character to output array
    for(let i = string.length - 1; i >= 0; i--) {
        outputArray.push(charArray[i]);
    }

    // Returns string made from output array
    return outputArray.join('');
}

export default reverseString