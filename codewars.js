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

// #2

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

// # 3
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
