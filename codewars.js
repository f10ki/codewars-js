"use strict";

function createPhoneNumber(numbers) {
  let formatString = "(***) ***-****";
  for (let i = 0; i < numbers.length; i += 1) {
    formatString = formatString.replace("*", numbers[i]);
  }
  return formatString;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

function solution(number) {
  if (!number) return;
  if (number < 0) return 0;

  let counter = 0;

  for (let i = 0; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
      console.log(i, counter);
    }
  }
  return counter;
}

console.log(solution(10));

// #3

function spinWords(string) {
  //TODO Have fun :)

  let outputString = "";

  // Convert to array of words and start looping through
  string.split(" ").forEach((element) => {
    if (element.length >= 5) {
      // split word to array of characters, then reverse array, then convert array back to string
      outputString += element.split("").reverse().join("") + " ";
    } else {
      outputString += element + " ";
    }
  });

  //   cut last " " (space) symbol and return result
  return outputString.slice(0, -1);
}

console.log(spinWords("Hey fellow warriors"));

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWordsMySecondVersion(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(
  "spinWordsMySecondVersion():",
  spinWordsMySecondVersion("Hey fellow warriors")
);

// # 4
function arrayDiff(a, b) {
  let aSet = new Set(a);
  console.log(aSet);
  let bSet = new Set(b);
  console.log(bSet);
  aSet.forEach((element) => {
    bSet.has(element) ? aSet.delete(element) : "";
  });
  return Array.from(aSet);
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

function arrayDiff2(a, b) {
  // Convert array to set for duplicate removal
  let bSet = new Set(b);

  // Remove elements from the array A that are in the set B and return result
  return a.filter((element) => !bSet.has(element));
}

console.log(arrayDiff2([1, 1, 2, 2, 2, 3], [2]));

// # 5, Vowel Count, 7 kyu

function getCount(str) {
  const vowelsList = "aeiou";
  let counter = 0;

  // Convert string of vowels to array.
  // Loop through array of vowels.
  // At each step, loop through array of initial string and count number of vowels (intersections).

  vowelsList.split("").forEach((vowelsListChar) => {
    str.split("").forEach((strChar) => {
      vowelsListChar === strChar ? (counter += 1) : "";
    });
  });

  return counter;
}

console.log(
  "# 5, Vowel Count, 7 kyu",
  getCount("I'm newcoming coder, mu-ha-ha")
);

// This is shortest solution
function getCount2(str) {
  const vowelsList = "aeiaou";
  return str.split("").filter((c) => vowelsList.includes(c)).length;
}

console.log(
  "# 5, Vowel Count, 7 kyu, ver2",
  getCount2("I'm newcoming coder, mu-ha-ha")
);

// # 6, Check the exam,  7 kyu
function checkExam(array1, array2) {
  let counter = 0;

  for (let i = 0; i <= array1.length - 1; i += 1) {
    if (array1[i] === array2[i]) {
      counter += 4;
    }
    if (array1[i] != array2[i] && array2[i]) {
      counter -= 1;
    }
  }

  return Math.max(counter, 0);
}

console.log("#7, checkExam", checkExam([1, 2, 3], [1, , 1]));

// This is shortest solution

// checkExam2 = (x, y) =>
//   (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === "" ? 0 : -1), 0)) > 0
//     ? x
//     : 0;

// console.log(
//   "#7, checkExam2, shortest version",
//   checkExam2([1, 2, 3], [1, , 1])
// );

// # 8, Counting Duplicates, 6 kyu
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  // Make all letters lowercase, convert text to array, and sort array to prepare for tricky algorithm.
  const tArray = text.toLowerCase().split("").sort();

  let arrayOfDuplicates = [];

  for (let i = 1; i <= tArray.length - 1; i += 1) {
    // If tArray doesn't exist or is empty then exit
    if (!tArray || tArray.length === 0) {
      return;
    }

    // If the current element is the same as the previous element, then this is a duplicate, and if this is not a known duplicate, then add it to a array of unique duplicates.
    if (
      tArray[i] === tArray[i - 1] &&
      tArray[i] != arrayOfDuplicates[arrayOfDuplicates.length - 1]
    ) {
      // Add unique duplicates to array
      arrayOfDuplicates.push(tArray[i]);
    }
  }

  // Get the length of the array of unique duplicates to know the number of duplicated characters in the original text.
  return arrayOfDuplicates.length;
}

console.log(
  "# 8, Counting Duplicates, duplicateCount:",
  duplicateCount("dcaba2a12")
);
