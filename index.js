// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (input) => {
    return [...input].reduce((reversed, char) => char + reversed, '');
};

// Test the function
const inputString = "hello world";
const outputString = reverseString(inputString);
console.log(outputString);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositiveNumbers = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0);
};

// Test the function
const array = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumbers(array);
console.log(outputSum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findMostFrequentElement = (arr) => {
    const frequencyMap = new Map();

    arr.forEach((element) => {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });

    let mostFrequentElement;
    let maxFrequency = 0;

    // Find the most frequent element using reduce
    frequencyMap.forEach((frequency, element) => {
        if (frequency > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequency;
        }
    });

    return mostFrequentElement;
};

// Test the function
const a = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputElement = findMostFrequentElement(a);
console.log(outputElement); // Output: 3

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
};

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
};

// Test the function
const num1 = 5;
const num2 = 3;
const operator = '+';
console.log(calculate(num1, num2, operator)); // Output: 8


// Task 6:  Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters

const generateRandomPassword = (length) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_+=<>?/[]{}";

    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
};

// Test the function
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.  

const romanToInteger = (romanNumeral) => {
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentSymbol = romanNumeral[i];
        const currentValue = romanSymbols[currentSymbol];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
};

// Test the function
const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";
console.log(romanToInteger(romanNumeral1));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (numbers) => {
    if (numbers.length < 2) {
        throw new Error("The array must contain at least two numbers.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
            secondSmallest = numbers[i];
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("There is no second smallest element in the array.");
    }

    return secondSmallest;
};

// Test the function
const inputArray = [5, 1, 8, 2, 4];
console.log(findSecondSmallest(inputArray));

