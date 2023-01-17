'use strick';

const obj1 = {};
const obj2 = new Object();

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const yupgy = {name: 'yupgy', age: 18};
print(yupgy);

console.log(yupgy.name); // 키가 정해져 있을 때
console.log(yupgy['name']); //키가 정해져 있지 않을 때

//Property value shorthand


function makePerson(name, age){
  return{
    name,
    age,
  }
}

function Person(name, age){
  this.name = name;
  this.age = age;
}

const person3 = new Person('elliee', 5);

yupgy.hasJob = 'true';



const person4 = makePerson('ellie', 4);
console.log(person4);

//for ... in  vs  for ... of
console.clear(); // 위에 있는 모든 출력 결과를 지움.

for(key in yupgy){
  console.log(key);
} //yupgy에 있는 모든 키를 보여주세요.

//for(value of array)

const array = [1, 2, 3, 4, 5]; // 배열 쉽게 출력하기
for(value of array){
  console.log(value); 
}

const array2 = [1, 2, 3, 4, 5, 6]
for(i = 0; i < array.length; i++){
  console.log(array2 [i]);
}

//cloning

const user = {name: 'yupgy', age: '2'};
const user2 = user;
user2.name = 'coder';
console.log(user.naem);

const user3 = {};
Object.assign(user3, user); //복사

const user4 = Object.assign({}, user);
console.log(user4);

