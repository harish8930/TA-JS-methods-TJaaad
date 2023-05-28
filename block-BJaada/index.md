username
'Harishkumar'
tagline
'india is my country'
username.charAt(2)
'r'
username.charAt(8)
'm'
username.CharAt(12)
VM194:1 Uncaught TypeError: username.CharAt is not a function
    at <anonymous>:1:10
(anonymous) @ VM194:1
username.toUpperCase
ƒ toUpperCase() { [native code] }
username.toUpperCase();
'HARISHKUMAR'
tagline.toUpperCase();
'INDIA IS MY COUNTRY'
let user = "      Harish    "
undefined
user
'      Harish    '
user.trim();
'Harish'
user.trimStart();
'Harish    '
user.trimEnd()
'      Harish'
username.concatstart("Mr");
VM801:1 Uncaught TypeError: username.concatstart is not a function
    at <anonymous>:1:10
(anonymous) @ VM801:1
username.concat("thakur")
'Harishkumarthakur'
tagline.concat("The best in the world")
'india is my countryThe best in the world'
username.endsWith(r);
VM1047:1 Uncaught ReferenceError: r is not defined
    at <anonymous>:1:19
(anonymous) @ VM1047:1
username.endsWith("r")
true
username.endsWith("R")
false
tagline.endsWith("y");
true
tagline.includes("n");
true
tagline.includes("y");
true
username.includes("r")
true
username.includes("b");
false
username.indexOf("r");
2
username.lastIndexOf("r");
10
tagline.indexof("m");
VM1683:1 Uncaught TypeError: tagline.indexof is not a function
    at <anonymous>:1:9
(anonymous) @ VM1683:1
tagline.indexOf("m");
9
tagline.indexof("y");
VM1824:1 Uncaught TypeError: tagline.indexof is not a function
    at <anonymous>:1:9
(anonymous) @ VM1824:1
tagline.indexOf("y");
10
username.padStart("40",".");
'.............................Harishkumar'
username.padStart("10","1");
'Harishkumar'
username.padEnd("10",".");
'Harishkumar'
tagline.padStart("5",".");
'india is my country'
tagline.repeat(4);
'india is my countryindia is my countryindia is my countryindia is my country'
username.repeat(2);
'HarishkumarHarishkumar'
username.replace("a","A");
'HArishkumar'
tagline.replace("india","INDIA");
'INDIA is my country'
username.slice(3);
'ishkumar'
tagline.slice(10);
'y country'
username.split(4);
['Harishkumar']0: "Harishkumar"length: 1[[Prototype]]: Array(0)
tagline.split();
['india is my country']0: "india is my country"length: 1[[Prototype]]: Array(0)
tagline.split("")
(19) ['i', 'n', 'd', 'i', 'a', ' ', 'i', 's', ' ', 'm', 'y', ' ', 'c', 'o', 'u', 'n', 't', 'r', 'y']
username.split("");
(11) ['H', 'a', 'r', 'i', 's', 'h', 'k', 'u', 'm', 'a', 'r']
