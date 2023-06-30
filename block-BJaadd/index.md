external.html:39 Live reload enabled.
numbers
(14) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
colors
(5) ['red', 'brown', 'yellow', 'green', 'gray']0: "gray"1: "green"2: "yellow"3: "brown"4: "red"length: 5[[Prototype]]: Array(0)
let number = [1,2[3,4[5,6[7,8]]]];
undefined
number.flat(4);
(2) [1, undefined]0: 11: undefinedlength: 2[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
let flatarray = number.flat(infinity);
VM1783:1 Uncaught ReferenceError: infinity is not defined
    at <anonymous>:1:29
(anonymous) @ VM1783:1
let flatarray = number.flat(Infinity);
undefined
flatarray
(2) [1, undefined]0: 11: undefinedlength: 2[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
number.length
2
let numberA = [1,2,[3,4,[5,6,[7,8]]]];
undefined
numberA.flat(Infinity)
(8) [1, 2, 3, 4, 5, 6, 7, 8]0: 11: 22: 33: 44: 55: 66: 77: 8length: 8[[Prototype]]: Array(0)
let stringflat = ["red",["brown",["white",["brown"]]]];
undefined
string.flat(Infinity);
VM2176:1 Uncaught ReferenceError: string is not defined
    at <anonymous>:1:1
(anonymous) @ VM2176:1
stringflat.flat(Infinity);
(4) ['red', 'brown', 'white', 'brown']0: "red"1: "brown"2: "white"3: "brown"length: 4[[Prototype]]: Array(0)
numbers.push(1000)
15
numbers
(15) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20, 1000]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.push("hello");
16
numbers
(16) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20, 1000, 'hello']0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.pop();
'hello'
numbers
(15) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20, 1000]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.pop();
1000
numbers
(14) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.pop(6);
20
numbers
(13) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.shift();
1
numbers
(12) [4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.unshift(1);
13
numbers
(13) [1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.unshift(90);
14
numbers
(14) [90, 1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
numbers.indexOf(9);
7
numbers.indexof(13);
VM2932:1 Uncaught TypeError: numbers.indexof is not a function
    at <anonymous>:1:9
(anonymous) @ VM2932:1
numbers.lastIndexOf(13);
10
numbers.lastIndexOf(19);
13
numbers.includes(12);
false
numbers.includes(15);
true
numbers.reverse();
(14) [19, 16, 15, 13, 11, 10, 9, 8, 7, 6, 5, 4, 1, 90]0: 191: 162: 153: 134: 115: 106: 97: 88: 79: 610: 511: 412: 113: 90length: 14[[Prototype]]: Array(0)
colors.reverse();
(5) ['gray', 'green', 'yellow', 'brown', 'red']0: "gray"1: "green"2: "yellow"3: "brown"4: "red"length: 5[[Prototype]]: Array(0)
stringflat.reverse()
(2) [Array(2), 'red']0: (2) ['brown', Array(2)]0: "brown"1: (2) ['white', Array(1)]length: 2[[Prototype]]: Array(0)1: "red"length: 2[[Prototype]]: Array(0)
colors.splice("red");
(5) ['gray', 'green', 'yellow', 'brown', 'red']
colors
[]length: 0[[Prototype]]: Array(0)
colors = ["gray","violet","green","yellow","purple"];
(5) ['gray', 'violet', 'green', 'yellow', 'purple']
colors.splice("yellow", "green");
[]length: 0[[Prototype]]: Array(0)
colors
(5) ['gray', 'violet', 'green', 'yellow', 'purple']
colors
(5) ['gray', 'violet', 'green', 'yellow', 'purple']
colors.splice("violet);
VM3881:1 Uncaught SyntaxError: Invalid or unexpected token
colors.splice("violet");
(5) ['gray', 'violet', 'green', 'yellow', 'purple']
colors
[]
colors
[]length: 0[[Prototype]]: Array(0)
colors.splice(1);
[]
colors
[]
let colors = ["pink","brown","red","purple","gray"];
VM4134:1 Uncaught SyntaxError: Identifier 'colors' has already been declared
colors
[]
numbers
(14) [19, 16, 15, 13, 11, 10, 9, 8, 7, 6, 5, 4, 1, 90]
numbers.splice(1);
(13) [16, 15, 13, 11, 10, 9, 8, 7, 6, 5, 4, 1, 90]
numbers
[19]0: 19length: 1[[Prototype]]: Array(0)
numbers

[19]
let numberB = [2,4,6,8,10,12,14,16,18];
undefined
let isEven = (num) => num %2 === 0;
undefined
let allEven = numberB.every(isEven);
undefined
allEven
true
let numberB = [2,4,6,8,10,12,14,16,18,19,21,23];
undefined
let even = (num) => num %2 === 0;
undefined
checkeven = numberB.every(even);
false
checkeven
false
let odd = (num) => num %2 !== 0;
undefined
letOdd = numberB.some(odd);
true
numberB
(12) [2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 21, 23]
numberB.find(10);
VM6074:1 Uncaught TypeError: 10 is not a function
    at Array.find (<anonymous>)
    at <anonymous>:1:9
(anonymous) @ VM6074:1
 let divisiblebyfive = (num) => num %5===0;
undefined
letdivfive = divisiblebyfive.find(numberB);
VM6434:1 Uncaught TypeError: divisiblebyfive.find is not a function
    at <anonymous>:1:30
(anonymous) @ VM6434:1
letdivfive = divisiblebyfive.find(numberB);
VM6633:1 Uncaught TypeError: divisiblebyfive.find is not a function
    at <anonymous>:1:30
(anonymous) @ VM6633:1
letdivfive = numberB.find(divisiblebyfive);
10
letevenf = (num) => num %2 === 0; 
(num) => num %2 === 0
letevenf
(num) => num %2 === 0
letfilterarray = numberB.filter(letevenf);
(9) [2, 4, 6, 8, 10, 12, 14, 16, 18]0: 21: 42: 63: 84: 105: 126: 147: 168: 18length: 9[[Prototype]]: Array(0)
numberB
(12) [2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 21, 23]
letfilterarray
(9) [2, 4, 6, 8, 10, 12, 14, 16, 18]
numberB
(12) [2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 21, 23]
let mapX = (num) => num **2;
undefined
let maparray = numberB.map(mapX);
undefined
maparray
(12) [4, 16, 36, 64, 100, 144, 196, 256, 324, 361, 441, 529]
let sum = numberB.reduce((acc,num) => {
    return acc+num;},0);
undefined
sum
153
colors
[]
let colors = ["pink","brown","red","purple","gray"];
VM7562:1 Uncaught SyntaxError: Identifier 'colors' has already been declared
let colorsA = ["pink","brown","red","purple","gray"];
undefined
let  add = colorsA.reduce((acc,color) => {
    return acc+color;},0);
undefined
add
'0pinkbrownredpurplegray'
