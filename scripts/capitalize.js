const capitalize = (string) => {
    // Return string if it is empty
    if (string.length === 0) return string;

    // Find index of the first alphabetical character
    let index = 0;
    while (index < string.length && !(/[A-Za-z]/.test(string[index]))) index++;

    // Capitalize first alphabetical character if found
    if (index < string.length) {
        const char = string[index].toUpperCase();
        const stringBegining = string.slice(0, index);
        const stringEnding = string.slice(index + 1);

        return stringBegining + char + stringEnding;
    } else {
        // If alphabetical character not found, return string
        return string
    };
};

export default capitalize