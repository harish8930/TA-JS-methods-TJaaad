let message = 'If you are still thinking the answer is no!'
undefined
console.log(`The lengtth of the meassage is ${message.length}`);
VM3186:1 The lengtth of the meassage is 43
undefined
console.log(`The first character of message is ${message.indexOf(0)}`);
VM3374:1 The first character of message is -1
undefined
console.log(`the first character of message is ${message.charAt(0)}`);
VM3543:1 the first character of message is I
undefined
console.log(`the last character 0f message is ${message.length-1}`);
VM3773:1 the last character 0f message is 42
undefined
console.log(`the last character of message is ${message.charAt(43)}`);
VM3973:1 the last character of message is 
undefined
console.log(charAt("you");
VM4148:1 Uncaught SyntaxError: missing ) after argument list
console.log(message.charAt("you"));
VM4303:1 I
undefined
console.log(message.charAt("3"));
VM4620:1 y
undefined
console.log(indexof("you"));
VM4845:1 Uncaught ReferenceError: indexof is not defined
    at <anonymous>:1:9
(anonymous) @ VM4845:1
console.log(indexOf("you"));
VM4979:1 Uncaught ReferenceError: indexOf is not defined
    at <anonymous>:1:9
(anonymous) @ VM4979:1
console.log(indexOF("you"));
VM4990:1 Uncaught ReferenceError: indexOF is not defined
    at <anonymous>:1:9
(anonymous) @ VM4990:1
console.log(message.indexof("you"));
VM5147:1 Uncaught TypeError: message.indexof is not a function
    at <anonymous>:1:21
(anonymous) @ VM5147:1
console.log(message.indexOf("you"));
VM5162:1 3
undefined
console.log(message.indexOf("still"))
VM5311:1 11
undefined
console.log(message.indexOf("answers"));
VM5511:1 -1
undefined
console.log(message.indexOf("answer"));
VM5518:1 30
undefined
console.log(message.includes("answers"));
VM5672:1 false
undefined
console.log(message.includes("they"));
VM5698:1 false
undefined
console.log(message.includes("is"));
VM5722:1 true
undefined
console.log(message.includes("Is"));
VM5745:1 false
undefined
console.log(message.slice("3","6"));
VM5954:1 you
undefined
console.log(message.slice("7","8"));
VM5976:1 a
undefined
console.log(message.slice("-3"));
VM6154:1 no!
undefined
console.log(message.slice("-5"));

VM6164:1 s no!
undefined
console.log(message.toLowerCase);
VM6390:1 ƒ toLowerCase() { [native code] }
undefined
console.log(message.toLowerCase);
VM6415:1 ƒ toLowerCase() { [native code] }
undefined
console.log(message.toUpperCase);
VM6544:1 ƒ toUpperCase() { [native code] }
undefined
console.log(message.toLowerCase());
VM6563:1 if you are still thinking the answer is no!
undefined
console.log(message.toUpperCaserCase());
VM6604:1 Uncaught TypeError: message.toUpperCaserCase is not a function
    at <anonymous>:1:21
(anonymous) @ VM6604:1
console.log(message.toUpperCase());
VM6659:1 IF YOU ARE STILL THINKING THE ANSWER IS NO!
undefined
message.replace("are","can't") = newmessage
VM6900:1 Uncaught ReferenceError: Invalid left-hand side in assignment
    at <anonymous>:1:9
(anonymous) @ VM6900:1
newMessage = message.replace("are","can't");
"If you can't still thinking the answer is no!"
console.log(newMessage);
VM7097:1 If you can't still thinking the answer is no!
undefined
newMessage.replace("still","");
"If you can't  thinking the answer is no!"
newMessage
"If you can't still thinking the answer is no!"
newMessage = newMessage.replace("still","");
"If you can't  thinking the answer is no!"
newMessage
"If you can't  thinking the answer is no!"
newmessage = newMessage.replace("thinking", "decide");
"If you can't  decide the answer is no!"
for(messages of message);






undefined
messages
'!'
for(messages of message){return messages};
VM7683:1 Uncaught SyntaxError: Illegal return statement
for(messages of message){ let result = messages {
VM7825:1 Uncaught SyntaxError: Unexpected token '{'
for (let character of message) {
  console.log(character);
}





VM7917:2 I
VM7917:2 f
VM7917:2  
VM7917:2 y
VM7917:2 o
VM7917:2 u
VM7917:2  
VM7917:2 a
VM7917:2 r
VM7917:2 e
VM7917:2  
VM7917:2 s
VM7917:2 t
VM7917:2 i
2VM7917:2 l
VM7917:2  
VM7917:2 t
VM7917:2 h
VM7917:2 i
VM7917:2 n
VM7917:2 k
VM7917:2 i
VM7917:2 n
VM7917:2 g
VM7917:2  
VM7917:2 t
VM7917:2 h
VM7917:2 e
VM7917:2  
VM7917:2 a
VM7917:2 n
VM7917:2 s
VM7917:2 w
VM7917:2 e
VM7917:2 r
VM7917:2  
VM7917:2 i
VM7917:2 s
VM7917:2  
VM7917:2 n
VM7917:2 o
VM7917:2 !
undefined
let messageArray = message.split("");
undefined
messageArray
(43) ['I', 'f', ' ', 'y', 'o', 'u', ' ', 'a', 'r', 'e', ' ', 's', 't', 'i', 'l', 'l', ' ', 't', 'h', 'i', 'n', 'k', 'i', 'n', 'g', ' ', 't', 'h', 'e', ' ', 'a', 'n', 's', 'w', 'e', 'r', ' ', 'i', 's', ' ', 'n', 'o', '!']0: "I"1: "f"2: " "3: "y"4: "o"5: "u"6: " "7: "a"8: "r"9: "e"10: " "11: "s"12: "t"13: "i"14: "l"15: "l"16: " "17: "t"18: "h"19: "i"20: "n"21: "k"22: "i"23: "n"24: "g"25: " "26: "t"27: "h"28: "e"29: " "30: "a"31: "n"32: "s"33: "w"34: "e"35: "r"36: " "37: "i"38: "s"39: " "40: "n"41: "o"42: "!"length: 43[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
