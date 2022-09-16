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
// Output: ["Foxtrot", "2021"]
//------------------------------------------------------------------------------

//==============================================================================
// --------------------2) What will this log?
//==============================================================================

const greeter = (name) => {
  `Hello, ${name}!`;
};
// console.log(greeter("LEARN Student"))

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

//==============================================================================
// --------------------3) What will this log?
//==============================================================================

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2);
// console.log(multipliedByTwo)

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

//==============================================================================
// --------------------4) What will this log?
//==============================================================================

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
// console.log(onlyOdds)

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
// Expected Output:
// Explanation:

// b) Verify and explain:
// according to:

//------------------------------------------------------------------------------
// example:
//
//
//------------------------------------------------------------------------------

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
