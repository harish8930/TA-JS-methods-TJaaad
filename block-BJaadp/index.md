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

let average = persons.map(people => people.grade);
let averagegrade = average.reduce((acc,num) => {
return acc+num;

},0)

let averageperson = averagegrade/persons.length
console.log(averageperson);


let malefilter = persons.map(people => people.sex === ("M") && people.grade)


let grademale = malefilter.reduce((acc,num)=>{
return acc+num;
},0)

let averagegrademale = grademale/malefilter.length
console.log(averagegrademale)


let femalefilter = persons.map(people => people.sex === ("F") && people.grade)


let gradefemale = femalefilter.reduce((acc,num)=>{
return acc+num;
},0)

let averagegradefemale = gradefemale/femalefilter.length
console.log(averagegradefemale)

let highestgrade = average.sort((a,b)=>{

  return b-a;

})

let highestnum = highestgrade[0];
console.log(highestnum)


let highestgrademale = malefilter.sort((a,b)=>{

  return b-a;
})

let highestnumM = highestgrademale[0];
console.log(highestnumM)

let highestgradefemale = femalefilter.sort((a,b)=>{

  return b-a;
})

let highestnumF = highestgradefemale[0];
console.log(highestnumF)



let highestjp = persons.map(people => people.name.startsWith("J") || people.name.startsWith("P")&& people.grade)

let highestnumjp = highestjp.sort((a,b)=>{
return b-a ; 
});

let highestvar = highestnumjp[0]
console.log(highestvar);
