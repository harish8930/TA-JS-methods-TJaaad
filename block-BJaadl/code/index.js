let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function largestelm(a,b){
return b.length - a.length
}
let largest = words.sort(largestelm)
console.log(largest[0]);

// - Convert the above array "words" into an array of length of word instead of word.

// - Create a new array that only contains word with atleast one vowel.
function onevowel(word){
  return word.includes("a")|| word.includes("e") || word.includes("i") || word.includes("i") || word.includes("o") || word.includes("u")
}

let filtered = words.filter(onevowel)
console.log(filtered)

// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.

function novowel(word){
  return !word.startsWith("a")&& !word.startsWith("e")&& !word.startsWith("i") && !word.startsWith("o")&& !word.startsWith("u")
}

let filtered = words.filter(novowel)
console.log(filtered)

// - Create a new array that contianse words not ending with vowel
function novowel(word){
  return !word.endsWith("a")&& !word.endsWith("e")&& !word.endsWith("i") && !word.endsWith("o")&& !word.endsWith("u")
}

let filtered = words.filter(novowel)
console.log(filtered)
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let reduced = numbers.reduce((acc,num) => {
return acc+num
},0)

console.log(reduced);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function filtered(num){
  return num%3=== 0;
}

numbers.filter(filtered);
console.log(numbers.filter(filtered))

// - Create a new array that contains only even numbers
function filtereven(num){
  return num%2=== 0;
}

numbers.filter(filtereven);
console.log(numbers.filter(filtereven))
// - Create  a new array that contains only odd numbers.
function filteredodd(num){
  return num%2!== 0;
}

numbers.filter(filteredodd);
console.log(numbers.filter(filteredodd))
// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.
function sortarray(a,b){
  return a-b
}

console.log(numbers.sort(sortarray));

// - Does sort mutate the original array?
yes it mutate the original array.
// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
 let reduced = numbers.reduce((acc,num) =>{
return acc+num/10
},0)

console.log(reduced);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
