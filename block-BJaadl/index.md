words
(8) ['crocodile', 'crackpot', 'mystery', 'brother', 'aviator', 'orchard', 'rhythm', 'pearl']
function findLongestWord(words) {
  const sortedWords = words.sort((a, b) => b.length - a.length);
  return sortedWords[0];
}

const longestWordA = findLongestWord(words);

undefined
console.log(longestWordA);
VM2134:1 crocodile
undefined
words.indexOf("rhythm");
6
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
VM2911:1 Uncaught SyntaxError: Identifier 'numbers' has already been declared
let numbersz = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
undefined
let sumarray = numbersz.reduce(acc,num => {
    return acc+num },0);
    
VM3362:1 Uncaught ReferenceError: acc is not defined
    at <anonymous>:1:32
(anonymous) @ VM3362:1
let sumarray = numbersz.reduce((acc,num) => {
    return acc+num },0);
    
undefined
sumarray
87
let multibythree = (num) => num/3 ;
undefined
let multibythree = (num) => {
   return num/3 === 0; }
undefined
numbersz.filter(multibythree);
[]length: 0[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
let multibythree = function(num){
    let result = if(num %3 === 0;)
VM4144:2 Uncaught SyntaxError: Unexpected token 'if'
let multibythree = function(num){
    let result = if(num %3 === 0;) return result; }
VM4193:2 Uncaught SyntaxError: Unexpected token 'if'
let multibythree = (num) => num %3 === 0; 
undefined
numbersz.filter(multibythree);
(3) [6, 12, 18]0: 61: 122: 18length: 3[[Prototype]]: Array(0)
let EvenN = (num) => num %2 === 0;
undefined
let evenarray = numbersz.filter(EvenN);
undefined
evenarray
(7) [6, 12, 18, 16, 2, 8, 10]
let ascending = function(a.b){
VM4763:1 Uncaught SyntaxError: Unexpected token '.'
let ascending = function(a.b){ 
VM4769:1 Uncaught SyntaxError: Unexpected token '.'
let ascending = function(a.b){ 
VM4777:1 Uncaught SyntaxError: Unexpected token '.'
let ascending = function(a,b){
    return a-b;}
undefined
numbersz.sort(ascending)
(10) [1, 1, 2, 6, 8, 10, 12, 13, 16, 18]
let addsum =  function((acc,num){
    return acc+ num
    
VM5185:1 Uncaught SyntaxError: Unexpected token '('
let addsum =  function((acc,num){
    return acc+ num },0);
    
VM5207:1 Uncaught SyntaxError: Unexpected token '('
let addsum = numberz.reduce((acc,num) => {
    return acc+num;
},0);
VM5386:1 Uncaught ReferenceError: numberz is not defined
    at <anonymous>:1:14
(anonymous) @ VM5386:1
let addsum = numbersz.reduce((acc,num) => {
    return acc+num;
},0);
undefined
addsum
87
