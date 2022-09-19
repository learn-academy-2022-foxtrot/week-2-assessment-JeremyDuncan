// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought
// process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// =============================================================================
// INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and
// returns an array with all the numbers multiplied by 3.
// =============================================================================

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10];
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36];
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// =============================================================================
// --------------------1) Create a function that takes a object as an argument
// and decides if the number inside it is evenly divisible by three or not.
// =============================================================================
// a) Create a test with expect statements for each of the variables provided.
// =============================================================================

//-------------------------== Test Explanation ==-------------------------------
// I decided to be more descriptive with this test by using multiple
// it-statments to show different edge case tests in the terminal when Jest
// performs tests.
//
// ------ Initial Test: ReferenceError: divByThree is not defined --------------
//------------------------------------------------------------------------------

describe("divByThree", () => {
  it("returns positive object number is divisable by three..", () => {
    expect(divByThree(object1)).toEqual("15 is divisible by three");
  });
  it("returns that the object number 0 is divisable by three..", () => {
    expect(divByThree(object2)).toEqual("0 is divisible by three");
  });
  it("returns the negative object number is not divisable by three..", () => {
    expect(divByThree(object3)).toEqual("-7 is not divisible by three");
  });
  it("returns the negative object number is divisable by three..", () => {
    expect(divByThree(object4)).toEqual("-9 is divisible by three");
  });
  it("returns positive object number is not divisable by three..", () => {
    expect(divByThree(object5)).toEqual("10 is not divisible by three");
  });
});

// -----------------=== Provided Test Cases ===---------------------------------
const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 = { number: 0 };
// Expected output: "0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"

// -----------------== Additional Edge Cases ==---------------------------------
const object4 = { number: -9 };
// Expected output: "-9 is divisible by three"
const object5 = { number: 10 };
// Expected output: "10 is not divisible by three"

// =============================================================================
// b) Create the function that makes the test pass.
// =============================================================================

//---------------------== Function Explanation ==-------------------------------
// -----Inputs: Object
// -----Output: String
//
// I decided to be more concise and use a ternary operator for this problem
// {Condition? return true: else return false}
// if the number in the object is divisable by three..
// then return the first statement
// else..
// return the other statement
//------------------------------------------------------------------------------

const divByThree = (obj) => {
  return obj.number % 3 === 0
    ? `${obj.number} is divisible by three`
    : `${obj.number} is not divisible by three`;
};

// =============================================================================
// --------------------2) Create a function that takes in an array of words and
// returns an array with all the words capitalized.
// =============================================================================
// a) Create a test with expect statements for each of the variables provided.
// =============================================================================

//---------------------== Function Explanation ==-------------------------------
// I decided to stick with one it-statement on this test since both test cases
// would encompase the same description of the test. I decided to create some
// variables to hold the values of my expected test results so I could plug them
// into my tests for readability.
//
// ------ Initial Test: ReferenceError: capitalize is not defined --------------
//------------------------------------------------------------------------------

describe("capitalize", () => {
  it("returns an array with all the words capitalized", () => {
    expect(capitalize(randomNouns1)).toEqual(expected1);
    expect(capitalize(randomNouns2)).toEqual(expected2);
  });
});

// ----------------=== Expected Test Results ===--------------------------------
const expected1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"];
const expected2 = ["Temperature", "Database", "Chopsticks", "Mango"];

// -----------------=== Provided Test Cases ===---------------------------------
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];

// =============================================================================
// b) Create the function that makes the test pass.
// =============================================================================

//---------------------== Function Explanation ==-------------------------------
// Input: Array of Strings
// Output: Array of Strings
//
// I decided to use the higher order function Map() to accomplish this task
// since it will allow me to apply the necessary changes to all values in the
// array and return a new array with my results.
//
// I used map() => to go through each word in words array and..
// ensure each word is lowercase then stored to be used later..
// then we want to apply the toUpperCase() to just the first letter in each word
// I use the charAt() method to return the char at index 0 to accomplish this
// then return the combined capital letter and lowercase letters using
// slice(1) and concatenation
//
// **Note** since using map() this will not mutate the original array.
//------------------------------------------------------------------------------
const capitalize = (words) => {
  return words.map((word) => {
    const lowercase = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lowercase.slice(1);
  });
};

// =============================================================================
// --------------------3) Create a function that takes in a string and logs the
// index of the first vowel.
// =============================================================================
// a) Create a test with expect statements for each of the variables provided.
// =============================================================================

//---------------------== Function Explanation ==-------------------------------
// I decided to use two it-statements to be more descriptive on this test since
// I wanted to test for an edge case for when a word may not have a vowel.
//
// ---- Initial Test: ReferenceError: getFirstVowel is not defined -------------
//------------------------------------------------------------------------------

describe("getFirstVowel", () => {
  it("returns the index of the first vowel", () => {
    expect(getFirstVowel(vowelTester1)).toEqual(1);
    expect(getFirstVowel(vowelTester2)).toEqual(0);
    expect(getFirstVowel(vowelTester3)).toEqual(2);
  });
  it("returns null if the word does not contain a vowel", () => {
    expect(getFirstVowel(vowelTester4)).toEqual(null);
  });
  it("returns the index of the first vowel if it is capital", () => {
    expect(getFirstVowel(vowelTester5)).toEqual(1);
  });
});

// -----------------=== Provided Test Cases ===---------------------------------
const vowelTester1 = "learn";
// Expected output: 1
const vowelTester2 = "academy";
// Expected output: 0
const vowelTester3 = "challenges";
// Expected output: 2

// -----------------== Additional Edge Cases ==---------------------------------
const vowelTester4 = "myth";
// Expected output: null
const vowelTester5 = "LEARN";

// Expected output: null
// =============================================================================
// b) Create the function that makes the test pass.
// =============================================================================

//---------------------== Function Explanation ==-------------------------------
// Input: String
// Output: Integer or Null
//
// I decided to use a for-loop and a conditional if-statement to accomplish
// this task. I then decided to go a little further and have the function work
// with capital vowels as well as return null if it finishes iterating through
// a word that doesn't have a vowel.
//
// iterate over each string character
// if a character is a vowel then..
// return the index
// if for-loop completes iterations..
// return null
//------------------------------------------------------------------------------
const getFirstVowel = (string) => {
  let str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      return i;
    }
  }
  return null;
};

// =============================================================================
