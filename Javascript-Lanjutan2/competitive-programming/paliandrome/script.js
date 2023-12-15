// QUESTION
// Example: Print all positive integer solutions to the equation a
// 3 + b3 =c3 + d3 where a, b, c, and d are integers between 1 and 1000.
// function findSolutions() {
//   const n = 1000;
//   const resultMap = {};

//   for (let c = 1; c <= n; c++) {
//     for (let d = 1; d <= n; d++) {
//       const result = Math.pow(c, 3) + Math.pow(d, 3);

//       if (!resultMap[result]) {
//         resultMap[result] = [];
//       }

//       resultMap[result].push([c, d]);
//     }
//   }

//   for (const result in resultMap) {
//     const pairs = resultMap[result];

//     for (let i = 0; i < pairs.length; i++) {
//       for (let j = i + 1; j < pairs.length; j++) {
//         const pair1 = pairs[i];
//         const pair2 = pairs[j];

//         console.log(
//           `Pair 1: ${pair1[0]}, ${pair1[1]}, Pair 2: ${pair2[0]}, ${pair2[1]}`
//         );
//       }
//     }
//   }
// }

// findSolutions();

//QUESTION
// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function isPermutationOfPaliandrome(phrase) {
  let countOdd = 0;
  const table = new Array("z".charCodeAt(0) - "a".charCodeAt(0) + 1).fill(0);

  function getCharNumber(char) {
    const aCharCode = "a".charCodeAt(0);
    const zCharCode = "z".charCodeAt(0);
    const charCode = char.charCodeAt(0);

    if (aCharCode <= charCode && charCode <= zCharCode) {
      return charCode - aCharCode;
    }

    return -1;
  }
  for (const char of phrase) {
    const x = getCharNumber(char);
    if (x !== -1) {
      table[x]++;
      if (table[x] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }
  console.log(table);
  return countOdd <= 1;
}

const result1 = isPermutationOfPaliandrome("hahadi");
console.log(result1);
