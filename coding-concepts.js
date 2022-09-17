// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain
// why your initial answer was correct or incorrect.

//==============================================================================
// --------------------1) What will this log?
//==============================================================================

const cohort = "Foxtrot 2022";
// console.log(cohort.split(""))

// a) Your answer:
// Expected Output:
// ["F", "o", "x", "t", "r", "o", "t", " ", "2", "0", "2", "2"];

// Explanation:
// This should show an array of strings.
// Since "" is being used as the argument for the split() method, this should
// split all the characters in the string apart and place each individual
// string character in an array with it's own index.

// b) Verify and explain:
// explanation === true
//
// according to: MDN Webdocs, the split() method searches for a pattern that is
// provided as an argument and returns substrings based on those patterns in
// ordered list inside an array.

//------------------------------------------------------------------------------
// examples:
//
// const cohort2 = "Foxtrot 2022";
// console.log(cohort2.split(" "))
// Output: ["Foxtrot", "2021"]
//
// const cohort3 = "Foxtrot 2022";
// console.log(cohort3.split())
// Output: ["Foxtrot 2021"]
//
// const cohort4 = "F*o*x*t*r*o*t*2*0*2*2";
// console.log(cohort4.split("*"))
// Output: ["F", "o", "x", "t", "r", "o", "t","2", "0", "2", "2"]

// const cohort5 = "Foxtrot--BLAHBLAHBLAHBLAH--2022";
// console.log(cohort5.split("--BLAHBLAHBLAHBLAH--"));
// Output: ["Foxtrot", "2022"]
//------------------------------------------------------------------------------

//==============================================================================
// --------------------2) What will this log?
//==============================================================================

const greeter = (name) => {
  `Hello, ${name}!`;
};
// console.log(greeter("LEARN Student"))

// a) Your answer:
// Expected Output: undefined

// Explanation:
// This whould log as undefined since the function greeter() does not contain
// a return statement. When the console.log method invokes the greeter function,
// the function executes, but does not have an output. This is generally not an
// issue with other languages such as Ruby or Python which will return a value
// based on the last line of code executed in a function / method.

// b) Verify and explain:
// according to: MDN Webdocs, the return is required to end the execution of a
// function and return a value.
// according to: https://eloquentjavascript.net/03_functions.html, the function
// ends as soon as it reaches a return.

//==============================================================================
// --------------------3) What will this log?
//==============================================================================

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2);
// console.log(multipliedByTwo)

// a) Your answer:
// Expected Output: [8, 10, 12, 14, 16]
//
// Explanation:
// Since the higher order function map() is being used on this array it
// will affect all elements in the array and multiple each individual element
// by 2. it then should assign the value of the new array to the variable
// multipliedByTwo.

// b) Verify and explain:
// according to: MDN Webdocs, map() returns a new array based on the results of
// provided function being applied to every element of the array.

//------------------------------------------------------------------------------
// examples:
//
// const multipliedBy5 = [4, 5, 6, 7, 8].map((number) => number * 5);
// console.log(multipliedBy5)
// Expected Output: [20, 25, 35, 40, 45]
//
// const zeroOut = [4, 5, 6, 7, 8].map((number) => number * 0);
// console.log(zeroOut)
// Expected Output: [0, 0, 0, 0, 0]
//
//------------------------------------------------------------------------------

//==============================================================================
// --------------------4) What will this log?
//==============================================================================

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
// console.log(onlyOdds)

// a) Your answer:
// Expected Output: [11, 13, 15]

// Explanation:
// The higher order function filter() should return a new array containing the
// elements of the array that are not even since it is returning only numbers in
// the original array that equal true based on the conditional statement passed
// inside the filter() method.
//
// ** in this case:
// 11 % 2 is not equal to 0, which would return true, so it is passed through to
// onlyOdds, and so forth with 13, and 15 inside a new array.
//
// b) Verify and explain:
// according to: MDN Webdocs, filter() creates a shallow copy af an array based
// elements that pass whatever test may be implemenmted by a function inside the
// filter() method.
//
// *** Rabbit Hole ***
// This research led me down a rabbit hole as I was curious about what a
// shallow copy meant. According to MDN Webdocs, a shallow copy is a copy whose
// properties share the same references (which sound like the same location in
// memory). it goes on to state if you change the challow copy, then it will
// also affect the original.
// Reference: https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

//==============================================================================
// --------------------5) What will this log?
//==============================================================================

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// Expected Output: "JavaScript"
//
// Explanation:
// This should display "JavaScript" on the console since console.log is invoking
// the object: myCodingSkills with a combination of Dot Notation and Bracket
// Notaton to access the string element.
//
// 1. Object myCodingSkills is called
// 2. "languages" key is selected using Dot Notation which accesses the Value
//     that is paired with it.
// 3. Value to the languages key is an Array of strings
// 4. The strings inside the array are accessed with Bracket Notation.
//
// Breakdown of myCodingSkills:
//  OBJECT(myCodingSkills)
// => KEY(languages)==> VALUE(["JavaScript", "Ruby"])=====> [0]("JavaScript")
// => KEY(languages)==> VALUE(["JavaScript", "Ruby"])=====> [1]("Ruby")
// => KEY(frameworks)=> VALUE(["React", "Ruby on Rails"])=> [0]("React")
// => KEY(frameworks)=> VALUE(["React", "Ruby on Rails"])=> [1]("Ruby on Rails")
// => KEY(databases)==> VALUE("PostgreSQL")
// => KEY(databases)==> VALUE("GitHub")
//
// b) Verify and explain:
// according to: https://dmitripavlutin.com/access-object-properties-javascript/
// there are three ways access data in an object. Thats through:
// Dot Notation, Bracket Notation, and Desctructuring.

//==============================================================================
// --------------------STRETCH: What will this log?
//==============================================================================

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Foxtrot"), (this.year = 2022);
  }
}
const learnStudent = new Learn("George");
// console.log(learnStudent)

// a) Your answer:
// Expected Output:
// Explanation:

// b) Verify and explain:
// according to:

//------------------------------------------------------------------------------
// example:
//
//
//------------------------------------------------------------------------------
