# JavaScript Testing Practice

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description
This repository is a solution to The Odin Project's [assignment](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) on JavaScript testing. It includes various JavaScript functions and modules that have been tested using Jest. The assignment consists of the following tasks:
1. Create a `capitalize` function that capitalizes the first character of a string.
2. Implement a `reverseString` function that reverses a given string.
3. Develop a `calculator` object that contains functions for basic arithmetic operations like addition, subtraction, division, and multiplication.
4. Create a `caesarCipher` function that applies a Caesar cipher to a string based on a shift factor, while considering wrapping from 'z' to 'a', maintaining the same case, and handling punctuation.
5. Write an `analyzeArray` function that takes an array of numbers and returns an object with properties for average, min, max, and length.

## Installation
1. Install [Node.js](https://nodejs.org/) if you haven't already.
2. Clone the repository to your local machine using `git clone <repository-url>`.
3. Navigate to the project's root directory.
4. Install project dependencies using `npm install` or `yarn install`.

## Usage
The project is structured with modules located in the `./scripts` directory. You can use the following modules:

- `capitalize.js`: Contains the `capitalize` function.
- `reverseString.js`: Contains the `reverseString` function.
- `calculator.js`: Contains a calculator object with functions for basic arithmetic operations.
- `caesarCipher.js`: Contains the `caesarCipher` function.
- `analyzeArray.js`: Contains the `analyzeArray` function.

Feel free to use these functions in your own JavaScript projects.

## Testing
You can test the functions using Jest. To run the tests, follow these steps:

1. Ensure you have Node.js and npm installed on your system.
2. Navigate to the `./scripts` directory of the repository in your terminal.
3. Install Jest globally using `npm install -g jest` or follow the [official Jest setup guide](https://jestjs.io/docs/getting-started#using-babel).
4. Run the tests using the `jest` command in your terminal.

Alternatively, users can fork the repository, clone it to their local machine, and install Node dependencies from `package.json`. Then, they can navigate to the `./scripts` directory and run `jest` to see the test output. Make sure you have Jest and Babel installed for this method.

## Contributing
This repository is for personal practice and learning purposes. Contributions are not expected or required.

## License
This project is open source and available under the [MIT License](./LICENSE).

## Questions
If you have any questions or need further assistance, feel free to reach out.

---

Happy coding!
