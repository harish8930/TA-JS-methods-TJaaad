let addTwo  = (num) => num+2 ;
let result = addTwo 

console.log(result(900))

let addThree  = (num) => num+3 ;
let resultT = addThree 

console.log(resultT(103))

let addFive  = (num) => num+5 ;
let resultF = addFive 

console.log(resultF(103))




const numbers = [3,5,6,9,12,14,15,17,18,19];


function addtwoarray(numbers){

  function addTwoT(number){
return number+2

  }
return numbers.map(addTwoT);

}

const resultarr = addtwoarray(numbers);

console.log(resultarr)





function addthreearr(numbers){


function addThree(number){

  return number+3;
}
return numbers.map(addThree)

}

let addThreeT =  addthreearr(numbers)

console.log(addThreeT);





function addfive(numbers){

function addfiveN(number){

return number+5;
}

return numbers.map(addfiveN)

}

let fivearr = addfive(numbers);
console.log(fivearr);

function changearray(numbers,callback){

return numbers.map(callback)
}

let result1 = changearray(numbers,addtwoarray)
console.log(result1)
