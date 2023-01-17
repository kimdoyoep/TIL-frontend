'use strick'

//Function
function printHello(){

  console.log(`Hello`);

}

printHello();

function log(message){
  console.log(message);
}

log(`Hello`);

//Parameters

function changeName(obj){
  obj.name = 'coder'; // 러퍼런스 안의 name을 coder로 바꿔라

}

const yupgy = {name:'yupgy'};
changeName(yupgy);
console.log(yupgy);

//Defalt Parameters

function showMessage(message, from = 'unkown'){ // from에 디폴트 파라미터 값을 정의해줘서 from에 아무것도 지정되지 않으면 unkown을 출력함
  console.log(`${message} by ${from}`);

}

showMessage('Hi!');

//Rest Parameters

function printAll(...args){
  for(i = 0; i < args.length; i++){
    console.log(args[i]);
  }

  for(const arg of args){
    console.log(arg)
  }
}

printAll('hello', 'mr', 'my yesterday');

//Local scope
//밖에선 안을 볼 수 없고 안에선 밖을 볼 수 있다.

let globalMessage = 'global';
function printMessage(){
  let message = 'hello';
  console.log(globalMessage);
  console.log(message); // 지역변수
}

printMessage(); 

//Return a value

function sum(a, b){
  return a+b;
}

const result = sum(1,2);
console.log(result);

//Callback

function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  }
  else{
    printNo();
  }
}

const printYes = function(){
  console.log('yes');
}

const printNo = function(){
  console.log('no');
}

const printN0 = () => console.log('no'); // Arrow function



