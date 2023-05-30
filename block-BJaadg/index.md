let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

undefined
let indexOfIs = quote.indexOf("is");
undefined
indexOfIs
6
quote.charAt(6);
'i'


console.log(`The index of the first 'is' in quote is ${indexOfIs}`);

VM13265:3 The index of the first 'is' in quote is 6
undefined
for( let i= 0; i< 6; i++){ let character = quote[i]; console.log( `The character at ${i} is `${character}``)}

VM13616:1 Uncaught SyntaxError: missing ) after argument list


for (let i = 0; i < 6; i++) {
  let character = quote[i];
  console.log(`The character at index ${i} is '${character}'`);
}

VM13634:5 The character at index 0 is 'T'
VM13634:5 The character at index 1 is 'h'
VM13634:5 The character at index 2 is 'e'
VM13634:5 The character at index 3 is 'r'
VM13634:5 The character at index 4 is 'e'
VM13634:5 The character at index 5 is ' '
undefined
from.concat(quote);
'Syrio ForelThere is only one thing we say to death: Not today'
from,quote,to.includes("rk");
true
quote.include("only");
VM13847:1 Uncaught TypeError: quote.include is not a function
    at <anonymous>:1:7
(anonymous) @ VM13847:1
quote.includes("only")
true
quote.Includes("we");
VM13993:1 Uncaught TypeError: quote.Includes is not a function
    at <anonymous>:1:7
(anonymous) @ VM13993:1
quote.includes("we");
true
quote.indexOf("we")
24
let quoteSplitted = quote.slice("");
undefined
quoteSplitted
'There is only one thing we say to death: Not today'
let quoteSplitted = quote.slice(" ");
undefined
quoteSplitted
'There is only one thing we say to death: Not today'
quoteSplitted.split();
['There is only one thing we say to death: Not today']0: "There is only one thing we say to death: Not today"length: 1[[Prototype]]: Array(0)
quoteSplitted.split(" ");
(11) ['There', 'is', 'only', 'one', 'thing', 'we', 'say', 'to', 'death:', 'Not', 'today']
quoteSplitted.replace("today","tommorow");
'There is only one thing we say to death: Not tommorow'
quote.lastIndexOf("o");
46
quote.indexOf("o");
9
quote.lastIndexOf("a");
48
quote.charAt("y");
'T'
quote.length
50
quote.padend("20",".");
VM14996:1 Uncaught TypeError: quote.padend is not a function
    at <anonymous>:1:7
(anonymous) @ VM14996:1
quote.padEnd("20",".");
'There is only one thing we say to death: Not today'
quote.padEnd('20','.');
'There is only one thing we say to death: Not today'
let dots = quote.padEnd('20','.');
undefined
dots
'There is only one thing we say to death: Not today'
console.log("Hello world".repeat(10))
VM15283:1 Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world
undefined
quote.slice(0,30).padEnd("10",".");
'There is only one thing we say'
quote.charAt(0);
'T'
to.charAt(0)
'A'
