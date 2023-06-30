let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("papaya");
// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length)
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);
// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("guvava");
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("dragon fruit");
fruits.shift();
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
fruits.indexOf("dragon fruit");
fruits.indexOf("guvava");
// Update the value of index 1 to `Pears`
fruits[1] = "pears";
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,2,"kiwi","lemon");
// Remove (slice) all the element from index 5
fruits.slice(0,5);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["berries", "melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
let concat = fruits.concat(morefruits);
// Log the name of all fruit in console
console.log(concat);
// Convert each fruit name to lowercase and log it
concat.toLowerCase();
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
lowercasefruits = concat.toLowerCase();
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
upperscaseFruits = lowercasefruits.toUpperCase();
let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers.flat();
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo.flat(2);
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
flatarray = numberThree.flat();
// Use forEach to log all the elements of numberThree array
function foreach(num){
  console.log(num)
}
flatarray.forEach(foreach);
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
function mapcheck(num){
  return num*2;
}
let doubleNumbers = flatarray.map(mapcheck);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
function mapcheck(num){
  return num*3;
}
let tripleNumbers = flatarray.map(mapcheck);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
function mapcheck(num){
  return num/2;
}
let halfNumbers = flatarray.map(mapcheck);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
function filtercheck(){
  return num%2!==0;
}
let oddNumbers = flatarray.filter(filtercheck);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
function filtercheck(){
  return num%2 ===0;
}
let evenNumbers = flatarray.filter(filtercheck);
// Find the index of 10 in numbersThree array
flatarray.index0f(10);
// Reverse the values of numbersThree array
flatarray.reverse()
// Reverse the values of numbersTwo array
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.concat("-"));
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.concat("&");
