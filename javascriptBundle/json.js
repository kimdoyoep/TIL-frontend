'use strick';

//Object 를 json으로 바꿈
// stringify

let json = JSON.stringify(true);

json = JSON.stringify(['apple', 'banana']);

const rabbit = {
  name : 'yupgy',
  color : 'white',
  size : null,
  birthDate : new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); 

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return value;
});

console.log(json);
  


// json 을 Object로 바꿈
//parse

const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === birthDate ? new Date(value) : value;
  
});
console.log(obj);



