et persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

undefined
let peoplename = persons.map(person => person.sex);
undefined
console.log(peoplename);
VM5748:1 (12) ['M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F']
undefined
let peoplegrade = persons.map(person => person.grade);
undefined
console.log(peoplegrade);
VM6039:1 (12) [8, 12, 16, 2, 4, 18, 5, 13, 15, 9, 17, 14]
undefined
let peoplesex = persons.map(people => people.sex);
undefined
console.log(peoplesex);
VM6476:1 (12) ['M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F']
undefined
let peoplename = persons.map(people => people.name);
undefined
let filteredname = peoplename.filter(name => name.startsWith("J")||name.startsWith("p"));
undefined
console.log(filteredname);
VM7619:1 (5) ['John', 'Johnny', 'Jennifer', 'Jane', 'John']0: "John"1: "Johnny"2: "Jennifer"3: "Jane"4: "John"length: 5[[Prototype]]: Array(0)
undefined
let filteredname = peoplename.filter(name => name.startsWith("J")||name.startsWith("P"));
undefined
undefined
console.log(filteredname);
VM7714:1 (6) ['John', 'Johnny', 'Paula', 'Jennifer', 'Jane', 'John']0: "John"1: "Johnny"2: "Paula"3: "Jennifer"4: "Jane"5: "John"length: 6[[Prototype]]: Array(0)
undefined
letfilteredlength  = persons.map(people => people.name);
(12) ['John', 'Sarah', 'Bob', 'Johnny', 'Ethan', 'Paula', 'Donald', 'Jennifer', 'Courtney', 'Jane', 'John', 'Arya']0: "John"1: "Sarah"2: "Bob"3: "Johnny"4: "Ethan"5: "Paula"6: "Donald"7: "Jennifer"8: "Courtney"9: "Jane"10: "John"11: "Arya"length: 12[[Prototype]]: Array(0)
let filteredA = letfilteredlength.filter(name.length => name.startsWith("A") || name.startsWith("C"));
VM8597:1 Uncaught SyntaxError: Malformed arrow function parameter list
 let filterM  = persons.map(name => people.name);
VM8793:1 Uncaught ReferenceError: people is not defined
    at <anonymous>:1:44
    at Array.map (<anonymous>)
    at <anonymous>:1:25
(anonymous) @ VM8793:1
(anonymous) @ VM8793:1
filtermale = persons.map(people => people.name);
(12) ['John', 'Sarah', 'Bob', 'Johnny', 'Ethan', 'Paula', 'Donald', 'Jennifer', 'Courtney', 'Jane', 'John', 'Arya']0: "John"1: "Sarah"2: "Bob"3: "Johnny"4: "Ethan"5: "Paula"6: "Donald"7: "Jennifer"8: "Courtney"9: "Jane"10: "John"11: "Arya"length: 12[[Prototype]]: Array(0)
let peoplemale = filtermale.filter(people = people.sex);
VM9029:1 Uncaught ReferenceError: people is not defined
    at <anonymous>:1:45
(anonymous) @ VM9029:1
let peoplemale = filtermale.filter(people => people.sex);
undefined
peoplemale
[]length: 0[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
let peoplesex = persons.map(sex => sex.male);
undefined
let filteredmale = persons.filter(person => person.sex === "M");
undefined
filteredmale.forEach(male => console.log(male));
VM10102:1 {name: 'John', grade: 8, sex: 'M'}grade: 8name: "John"sex: "M"[[Prototype]]: Object
VM10102:1 {name: 'Bob', grade: 16, sex: 'M'}grade: 16name: "Bob"sex: "M"[[Prototype]]: Object
VM10102:1 {name: 'Johnny', grade: 2, sex: 'M'}grade: 2name: "Johnny"sex: "M"[[Prototype]]: Object
VM10102:1 {name: 'Ethan', grade: 4, sex: 'M'}grade: 4name: "Ethan"sex: "M"[[Prototype]]: Object
VM10102:1 {name: 'Donald', grade: 5, sex: 'M'}grade: 5name: "Donald"sex: "M"[[Prototype]]: Object
VM10102:1 {name: 'John', grade: 17, sex: 'M'}grade: 17name: "John"sex: "M"[[Prototype]]: Object
undefined
let filteredfemale = persons.filter(person => person.sex === "F");
undefined
filteredfemalemale.forEach(female => console.log(female));
VM10163:1 Uncaught ReferenceError: filteredfemalemale is not defined
    at <anonymous>:1:1
(anonymous) @ VM10163:1
filteredfemale.forEach(female => console.log(female))
VM10193:1 {name: 'Sarah', grade: 12, sex: 'F'}grade: 12name: "Sarah"sex: "F"[[Prototype]]: Object
VM10193:1 {name: 'Paula', grade: 18, sex: 'F'}grade: 18name: "Paula"sex: "F"[[Prototype]]: Object
VM10193:1 {name: 'Jennifer', grade: 13, sex: 'F'}grade: 13name: "Jennifer"sex: "F"[[Prototype]]: Object
VM10193:1 {name: 'Courtney', grade: 15, sex: 'F'}grade: 15name: "Courtney"sex: "F"[[Prototype]]: Object
VM10193:1 {name: 'Jane', grade: 9, sex: 'F'}grade: 9name: "Jane"sex: "F"[[Prototype]]: Object
VM10193:1 {name: 'Arya', grade: 14, sex: 'F'}grade: 14name: "Arya"sex: "F"[[Prototype]]: Object
undefined
filteredfemale
(6) [{…}, {…}, {…}, {…}, {…}, {…}]0: {name: 'Sarah', grade: 12, sex: 'F'}1: {name: 'Paula', grade: 18, sex: 'F'}2: {name: 'Jennifer', grade: 13, sex: 'F'}3: {name: 'Courtney', grade: 15, sex: 'F'}4: {name: 'Jane', grade: 9, sex: 'F'}5: {name: 'Arya', grade: 14, sex: 'F'}length: 6[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
let filterCJ  = filteredfemale.filter(name => name.startsWith("C") || name.startsWith("J"));
VM10520:1 Uncaught TypeError: name.startsWith is not a function
    at <anonymous>:1:52
    at Array.filter (<anonymous>)
    at <anonymous>:1:32
(anonymous) @ VM10520:1
(anonymous) @ VM10520:1
 let filterCJ = filteredfemale.map(people => people.name);
undefined
let startwithcj = filterCJ.filter(name => name.startsWith("C"); || name.startsWith("J"));
VM10957:1 Uncaught SyntaxError: missing ) after argument list
let startwithcj = filterCJ.filter(name => name.startsWith("C") || name.startsWith("J"))
undefined
console.log(startwithcj);
VM11069:1 (3) ['Jennifer', 'Courtney', 'Jane']
undefined
let grade = persons.map(people => people.grade);
undefined
let evengrade = grade.filter( num => num%2 === 0);
undefined
console.log(evengrade);
VM11568:1 (7) [8, 12, 16, 2, 4, 18, 14]
undefined
let peoplename = persons.map(people => people.name);
undefined
let startwithJ = person.filter( name => name.startsWith("J");
VM11778:1 Uncaught SyntaxError: missing ) after argument list
let startwithJ = person.filter( name => name.startsWith("J"))
VM11787:1 Uncaught ReferenceError: person is not defined
    at <anonymous>:1:18
(anonymous) @ VM11787:1
let startwithJ = peoplename.filter( name => name.startsWith("J");
VM11829:1 Uncaught SyntaxError: missing ) after argument list
let startwithJ = peoplename.filter( name => name.startsWith("J"))
undefined
console.log(startwithJ);
VM11911:1 (5) ['John', 'Johnny', 'Jennifer', 'Jane', 'John']0: "John"1: "Johnny"2: "Jennifer"3: "Jane"4: "John"length: 5[[Prototype]]: Array(0)
undefined
console.log(startwithJ{});
VM11931:1 Uncaught SyntaxError: missing ) after argument list
 let nameobject = persons.find(person => person.name.startsWith("J"))
undefined
console.log(nameobject);
VM12472:1 {name: 'John', grade: 8, sex: 'M'}grade: 8name: "John"sex: "M"[[Prototype]]: Object
undefined
let nameobjectS = persons.find(people => people.name.startsWith("P"))
undefined
console.log(nameobjectS);
VM12927:1 {name: 'Paula', grade: 18, sex: 'F'}
undefined
let nameobject = persons.find(person => person.name.startsWith("J") || grade>10 || sex === ("F")); 
undefined
console.log(nameobject);
VM13123:1 {name: 'John', grade: 8, sex: 'M'}
undefined
let nameobjectX = persons.find(person => person.name.startsWith("J") || grade>10 || sex === ("F")); 
undefined
console.log(nameobjectX);
VM13219:1 {name: 'John', grade: 8, sex: 'M'}
undefined
let namestartwithJ = persons.find(person => person.name.startWith("J") && grade >10 && sex === ("F"));
VM13667:1 Uncaught TypeError: person.name.startWith is not a function
    at <anonymous>:1:57
    at Array.find (<anonymous>)
    at <anonymous>:1:30
(anonymous) @ VM13667:1
(anonymous) @ VM13667:1
let namestartwithJ = persons.find(person => person.name.startsWith("J") && grade >10 && sex === ("F"));
undefined
console.log(namestartwithJ);
VM13733:1 undefined
undefined
let namestartwithJ = persons.find(person => person.name.startsWith("J") && person.grade >10 &&  person.sex === ("F"));
undefined
console.log(namestartwithJ);
VM13889:1 {name: 'Jennifer', grade: 13, sex: 'F'}
undefined
let filtermale = persons.map(person => person.name)
undefined
let filterM = filtermale.filter(name = person.sex);
VM14411:1 Uncaught ReferenceError: person is not defined
    at <anonymous>:1:40
(anonymous) @ VM14411:1
let filterM = filtermale.filter(name => person.sex);
VM14419:1 Uncaught ReferenceError: person is not defined
    at <anonymous>:1:48
    at Array.filter (<anonymous>)
    at <anonymous>:1:26
(anonymous) @ VM14419:1
(anonymous) @ VM14419:1
let filterM = filtermale.filter(person => person.sex);
undefined
let filterF = persons.filter(person => person.sex === ("F"));
undefined
console.log(filterF);
VM14770:1 (6) [{…}, {…}, {…}, {…}, {…}, {…}]0: {name: 'Sarah', grade: 12, sex: 'F'}1: {name: 'Paula', grade: 18, sex: 'F'}2: {name: 'Jennifer', grade: 13, sex: 'F'}3: {name: 'Courtney', grade: 15, sex: 'F'}4: {name: 'Jane', grade: 9, sex: 'F'}5: {name: 'Arya', grade: 14, sex: 'F'}length: 6[[Prototype]]: Array(0)
undefined
let malepersonarray = persons.filter( person => person.sex ==== ("M"));
VM14974:1 Uncaught SyntaxError: Unexpected token '='
let malepersonarray = persons.filter( person => person.sex ==== ("M"))
VM15027:1 Uncaught SyntaxError: Unexpected token '='
let malepersonarray = persons.filter(person => person.sex === ("M"))
undefined
console.log(malepersonarray)
VM15314:1 (6) [{…}, {…}, {…}, {…}, {…}, {…}]0: {name: 'John', grade: 8, sex: 'M'}1: {name: 'Bob', grade: 16, sex: 'M'}2: {name: 'Johnny', grade: 2, sex: 'M'}3: {name: 'Ethan', grade: 4, sex: 'M'}4: {name: 'Donald', grade: 5, sex: 'M'}5: {name: 'John', grade: 17, sex: 'M'}length: 6[[Prototype]]: Array(0)
undefined
let gradeP = persons.map(person => person.grade);
undefined
let reducegrade = gradeP.reduce((acc,num) => { 
            return acc+num;
},0);
undefined
console.log(reducegrade);
VM15812:1 133
undefined
reducegrade
133
let average = reducegrade/persons.length
undefined
average
11.083333333333334
let averagemale = persons.map(person => person.sex);
undefined
letaverageofmale = averagemale.reduce((acc,num) => {
    return acc+num 
},0);
'0MFMMMFMFFFMF'
let averagemale = persons.map(person => person.grade);
undefined
letaverageofmale = averagemale.reduce((acc,num) => {
    return acc+num 
},0);
133
let averagemale = persons.map(person => person.sex.grade);
undefined
etaverageofmale = averagemale.reduce((acc,num) => {
    return acc+num 
},0);
NaN
let averagemale = persons.filter(person => person.sex === ("M"));
undefined
