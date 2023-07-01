let persons = [
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

// Create an array peopleName and store value of sex key from persons array
function peopleName(person){
  return person.sex;
}
let mapcheck = persons.map(peopleName)

console.log(mapcheck);
// Create an array peopleGrade and store the value of grade key from persons array
function peopleGrade(person){
  return person.grade;
}
let mapcheck = persons.map(peopleGrade)

console.log(mapcheck);
// Create an array peopleSex and store the value of sex key from persons array
function peopleName(person){
  return person.sex;
}
let mapcheck = persons.map(peopleName)

console.log(mapcheck);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
function startJP(people){
  return people.name.startsWith("J") || people.name.startsWith("P")
}

let filtered = persons.filter(startJP)
console.log(filtered);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
function startAC(people){
  return people.name.startsWith("A") || people.name.startsWith("C")
}
let filtered = persons.filter(startAC)
console.log(filtered.length);

// Log all the filtered male ('M') in persons array
function filterMale(people){
  return people.sex.includes("M")
}
let male = persons.filter(filterMale);
console.log(male);

// Log all the filtered female ('F') in persons array
function filterFemale(people){
  return people.sex.includes("F")
}
let female = persons.filter(filterFemale);
console.log(female);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array
function peopleGrade(person){
  return person.grade%2 ===0;
}
let filtercheck = persons.filter(peopleGrade);
 console.log(filtercheck)
// Find the first name that starts with 'J' in persons array and log the object
function startwithJ(person){
  return person.name.startsWith("J")
}

let nameJ = persons.find(startwithJ);

console.log(nameJ)

// Find the first name that starts with 'P' in persons array and log the object
function startwithP(person){
  return person.name.startsWith("P")
}

let nameP = persons.find(startwithP);

console.log(nameP)

// Find the first name that starts with 'J', grade is greater than 10 and is a female
function findJ(person){
  return person.name.startsWith("J") && person.sex.includes("F") && person.grade>10;
}
console.log(persons.find(findJ));
// Filter all the female from persons array and store in femalePersons array
function filterf(person){
  return person.sex.includes("F")
}
console.log(persons.filter(filterf));

// Filter all the male from persons array and store in malePersons array
function filterM(person){
  return person.sex.includes("M")
}
console.log(persons.filter(filterM));

// Find the sum of all grades and store in gradeTotal
let sum = persons.reduce((acc,person)=>{

return acc+person.grade

},0);
console.log(sum);
// Find the average grade
let sum = persons.reduce((acc,person)=>{

return acc+person.grade/12

},0);
console.log(sum);
// Find the average grade of male
let reduced = persons.reduce((acc,person)=>{
if(person.sex === "M"){
  return acc+person.grade/6
}else{
  return acc;
}
},0)


console.log(reduced);
// Find the average grade of female
let reduced = persons.reduce((acc,person)=>{
if(person.sex === "F"){
  return acc+person.grade/6
}else{
  return acc;
}
},0)


console.log(reduced);
// Find the highest grade
function highestgrade(a,b){
  return b.grade - a.grade
}

let sort = persons.sort(highestgrade)

console.log(sort[0])
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
