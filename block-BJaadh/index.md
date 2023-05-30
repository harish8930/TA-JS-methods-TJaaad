var numbersQ = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

undefined
numbersQ.indexOf(101);
8
numbersQ.lastIndexOf(9)l;
VM15654:1 Uncaught SyntaxError: Unexpected identifier 'l'
numbersQ.indexOf(9);
4
strings.flat(Infinity);
(6) ['This', 'is', 'a', 'collection', 'of', 'words']0: "This"1: "is"2: "a"3: "collection"4: "of"5: "words"length: 6[[Prototype]]: Array(0)
strings.join(" ");
'This is a collection of words'
string.push("called","sentence");
VM15966:1 Uncaught ReferenceError: string is not defined
    at <anonymous>:1:1
(anonymous) @ VM15966:1
strings.push("called","sentence");
8
strings
(8) ['This', 'is', 'a', 'collection', 'of', 'words', 'called', 'sentence']
strings.join(" ");
'This is a collection of words called sentence'
strings.shift();
'This'
strings
(7) ['is', 'a', 'collection', 'of', 'words', 'called', 'sentence']
strings.includes("is");
true
let wordwithis = strings.filter(word => word.includes("is"));
undefined
wordwithis
['is']0: "is"length: 1[[Prototype]]: Array(0)
let wordwithisI = strings.filter(word => word.IndexOf("is"));
VM17053:1 Uncaught TypeError: word.IndexOf is not a function
    at <anonymous>:1:47
    at Array.filter (<anonymous>)
    at <anonymous>:1:27
(anonymous) @ VM17053:1
(anonymous) @ VM17053:1
let wordwithisI = strings.filter(word => word.IndexOf("is"));
VM17064:1 Uncaught TypeError: word.IndexOf is not a function
    at <anonymous>:1:47
    at Array.filter (<anonymous>)
    at <anonymous>:1:27
(anonymous) @ VM17064:1
(anonymous) @ VM17064:1
let divisiblebythree = (num) => num %3 ===0;
undefined
numbersQ.every(divisiblebythree);
false
function comparefunction(a,b){ 
return a-b; }
undefined
numbersQ.sort(comparefunction);
(12) [1, 3, 4, 5, 6, 7, 9, 9, 11, 12, 18, 101]
function comparestring(a,b){
    return a-b;}
undefined
strings.sort(comparestring);
(7) ['is', 'a', 'collection', 'of', 'words', 'called', 'sentence']0: "is"1: "a"2: "collection"3: "of"4: "words"5: "called"6: "sentence"length: 7[[Prototype]]: Array(0)
strings.pop();
'sentence'
strings
(6) ['is', 'a', 'collection', 'of', 'words', 'called']
function largest{
VM18153:1 Uncaught SyntaxError: Unexpected token '{'
function largest(a,b){
    return b-a;}
    
undefined
largest.push(largestnum);
VM18509:1 Uncaught ReferenceError: largestnum is not defined
    at <anonymous>:1:14
(anonymous) @ VM18509:1
let largestnum = [];
undefined
largest.push(largestnum);
VM18579:1 Uncaught TypeError: largest.push is not a function
    at <anonymous>:1:9
(anonymous) @ VM18579:1
let numbersQ = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];

numbers.sort((a, b) => b - a);

let largestNumber = numbers[0];

console.log(largestNumber);

VM18643:1 Uncaught SyntaxError: Identifier 'numbersQ' has already been declared


numbers.sort((a, b) => b - a);

let largestNumber = numbersQ[0];

console.log(largestNumber);

VM18688:7 1
undefined
let larrgestnum = function(a,b){
    return b-a; }
undefined
numbersQ.sort(larrgestnum);
(12) [101, 18, 12, 11, 9, 9, 7, 6, 5, 4, 3, 1]
findeven = function(num){
    if(num %2 === 0;)}
    
VM19205:2 Uncaught SyntaxError: Unexpected token ';'
findeven = function(num){
    if(num %2 === 0)}
VM19213:2 Uncaught SyntaxError: Unexpected token '}'
findeven = (num) => num %2=== 0;
(num) => num %2=== 0
numbersQ.filter(findeven);
(4) [18, 12, 6, 4]
findodd = (num) => num %2 !== 0;
(num) => num %2 !== 0
numbersQ.filter(findodd);
(8) [101, 11, 9, 9, 7, 5, 3, 1]
strings.unshift("yo");
7
strings
(7) ['yo', 'is', 'a', 'collection', 'of', 'words', 'called']
numbersQ.replace(12,18,1221,1288)
VM19788:1 Uncaught TypeError: numbersQ.replace is not a function
    at <anonymous>:1:10
(anonymous) @ VM19788:1
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
undefined
