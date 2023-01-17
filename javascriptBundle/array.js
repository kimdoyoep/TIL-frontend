'use strick';

//Array

const arr1 = new Array();
const arr2 = [1, 2];


const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


for(let fruit of fruits ){
  console.log(fruit);
}

fruits.forEach(function(fruit, index, array){
  console.log(fruit, index, array);
})

fruits.forEach(function(fruit, index){
  console.log(fruit, index);
})

fruits.forEach((fruit, index) => console.log(fruit, index));



const arr3 = [1, 2, 3, 4];

arr3.forEach(function(arr3, index, array){
  console.log(arr3, index, array);
})

//Addtion, deletion, copy

//push
fruits.push('🍒', '🥑');
console.log(fruits);

//pop

fruits.pop();

//unshift 앞에서 부터 넣기
fruits.unshift('🍑');

//shift 앞에서 부터 빼기
fruits.shift();

//splice 원하는 위치를 빼기

console.clear();
const arr4 = [1, 2, 3, 4, 5];

arr4.splice(1, 1);
arr4.splice(1, 1, 5, 6);

console.log(arr4);


//combine to array
const newArr = arr4.concat(arr3);

// ----------

console.clear();
console.log(arr4.indexOf('1'));  // 어디에 위치했는지
console.log(arr4.includes('1')); // 포함여부
console.log(arr4.lastIndexOf('1')); // index는 상대적으로 앞에있는 요소를 찾아주고, lastIndexOf는 상대적으로 뒤에 있는 요소를 찾아준다네요.








