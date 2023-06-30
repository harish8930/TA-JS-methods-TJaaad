let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
undefined
fruits.push("papaya");
5
fruits
(5) ['Banana', 'Orange', 'Apple', 'Mango', 'papaya']
fruits.pop();
'papaya'
fruits.delete[0];
VM9194:1 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:1:14
(anonymous) @ VM9194:1
delete.fruits[0];
VM9341:1 Uncaught SyntaxError: Unexpected token '.'
delete fruits[0]
true
fruits
(4) [empty, 'Orange', 'Apple', 'Mango']
console.log(fruits[0]);
VM9517:1 undefined
undefined
console.log(fruits[1]);
VM9615:1 Orange
undefined
fruits
(4) [empty, 'Orange', 'Apple', 'Mango']1: "Orange"2: "Apple"3: "Mango"length: 4[[Prototype]]: Array(0)
fruits.shift();
undefined
fruits
(3) ['Orange', 'Apple', 'Mango']
fruits.unshift("guvava");
4
fruits
(4) ['guvava', 'Orange', 'Apple', 'Mango']
fruits.unshift("dragon fruit");
5
fruits
(5) ['dragon fruit', 'guvava', 'Orange', 'Apple', 'Mango']
fruits[1] = "pears"
'pears'
fruits
(5) ['dragon fruit', 'pears', 'Orange', 'Apple', 'Mango']
fruits.splice(1,2, "kiwi", "lemon");
(2) ['pears', 'Orange']
fruits
(5) ['dragon fruit', 'kiwi', 'lemon', 'Apple', 'Mango']
fruits.slice(5);
[]
fruits
(5) ['dragon fruit', 'kiwi', 'lemon', 'Apple', 'Mango']
let moreFruits = ['Berries', 'Melons']
undefined
fruits.concat(morefruits);
VM10445:1 Uncaught ReferenceError: morefruits is not defined
    at <anonymous>:1:15
(anonymous) @ VM10445:1
fruits.concat(moreFruit);
VM10546:1 Uncaught ReferenceError: moreFruit is not defined
    at <anonymous>:1:15
(anonymous) @ VM10546:1
fruits.concat(moreFruits);
(7) ['dragon fruit', 'kiwi', 'lemon', 'Apple', 'Mango', 'Berries', 'Melons']
fruits.uppercase();
VM10616:1 Uncaught TypeError: fruits.uppercase is not a function
    at <anonymous>:1:8
(anonymous) @ VM10616:1
fruits.toUppercase
undefined
fruits
(5) ['dragon fruit', 'kiwi', 'lemon', 'Apple', 'Mango']
let fruitdata = fruits.concat(moreFruits);
undefined
fruitdata
(7) ['dragon fruit', 'kiwi', 'lemon', 'Apple', 'Mango', 'Berries', 'Melons']
fruitdata.toUpperCase
undefined
fruitdata.toUpperCase();
VM11012:1 Uncaught TypeError: fruitdata.toUpperCase is not a function
    at <anonymous>:1:11
(anonymous) @ VM11012:1
for(let i =0; i< fruitdata.length; i++){ fruitdata[i] = fruitdata[i].toUpperCase}
    
ƒ toUpperCase() { [native code] }
fruitdata
(7) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]0: ƒ toUpperCase()1: ƒ toUpperCase()2: ƒ toUpperCase()3: ƒ toUpperCase()4: ƒ toUpperCase()5: ƒ toUpperCase()length: 0name: "toUpperCase"arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]No properties6: ƒ toUpperCase()length: 0name: "toUpperCase"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]length: 7[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
or(let i =0; i< fruitdata.length; i++){ fruitdata[i] = fruitdata[i].toUpperCase();}
VM11267:1 Uncaught SyntaxError: missing ) after argument list
let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
VM11271:1 Uncaught SyntaxError: Identifier 'numbers' has already been declared
let numbersOne = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
undefined
numberOne.flat(Infinity);
VM11366:1 Uncaught ReferenceError: numberOne is not defined
    at <anonymous>:1:1
(anonymous) @ VM11366:1
numberOne.flat(Infinity);
VM11456:1 Uncaught ReferenceError: numberOne is not defined
    at <anonymous>:1:1
(anonymous) @ VM11456:1
numbersOne.flat(Infinity);
(4) [1, 2, 3, 4]
numbersOne
(3) [1, 2, Array(2)]
let flatone = numbersOne.flat(Infinity);

undefined
flatone
(4) [1, 2, 3, 4]
let flattwo = numbersTwo.flat(Infinity);
undefined
flattwo
(6) [1, 2, 3, 4, 5, 6]
let flatthree = numbersThree.flat(Infinity);
undefined
flatthree
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flatone);
VM11878:1 (4) [1, 2, 3, 4]
undefined
let doublenumber = (num) => num *2 ;
undefined
doublenumber.map(flatthree);
VM12053:1 Uncaught TypeError: doublenumber.map is not a function
    at <anonymous>:1:14
(anonymous) @ VM12053:1
flatthree.map(doublenumber);
(10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
doublenumber
(num) => num *2
let triplenumber = (num) => num *3 ;
undefined
flatthree.map(triplenumber);
(10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
let halfnumber = (num) => num / 2 ;
undefined
flatthree.map(halfnumber);
(10) [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
evennumber = (num) => num %2 === 0';
VM12619:1 Uncaught SyntaxError: Invalid or unexpected token
evennumber = (num) => num %2 === 0;
(num) => num %2 === 0
flatthree.filter(evennumber);
(5) [2, 4, 6, 8, 10]
flatthree.findindex(10);
VM12792:1 Uncaught TypeError: flatthree.findindex is not a function
    at <anonymous>:1:11
(anonymous) @ VM12792:1
flatthree.indexOf(10);
9
flatthree.reverse();
(10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
fruits.join(-);
VM12948:1 Uncaught SyntaxError: Unexpected token ')'
fruits.join("-");
'dragon fruit-kiwi-lemon-Apple-Mango'
fruits.join("&");
'dragon fruit&kiwi&lemon&Apple&Mango'
