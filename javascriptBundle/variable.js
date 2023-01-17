// 1. use strick
//added ES
'use strick';

// 2. variable

let globalName = 'suu'; // global을 앞에 붙이면 박스 상관 x 
{
  let name = 'yupgy';
  console.log(name);
  name = 'ellie';
  console.log(name);
  console.log(globalName);
}
console.log(name); // 박스 안의 내용은 박스 밖이랑 상관 없음
console.log(globalName);

console.log(`value: ${globalName} type: ${typeof globalName}`);

// 3.constants
// Immutable data type 변경이 불가능한 변수

const daysInWeek = 7;
const maxNumber = 5;

const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 숫자가 아닌 것들
const infinity = 1 / 0 ; // 무한대
const negativeInfinity = -1 / 0 ; // -무한대
const nan = 'Not a Number' / 2 ; // 숫자가 아님

console.log(`value: ${infinity}, type: ${typeof infinity}`);
console.log(`value: ${negativeInfinity}, type: ${typeof negativeInfinity}`);
console.log(`value: ${nan}, type: ${typeof nan}`);

// String

const char = 'C';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean

const canRead = true;
console.log(`value: ${canRead}, type: ${typeof canRead}`);

//null
let nothing = null; // 아무것도 아닌 상태

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // 아무것도 없는지 아닌지 모르는 상태

//symbol
const symbol1 = Symbol('id'); // 서로 논리적으론 같지만    
const symbol2 = symbol('id');  // 물리적으로 다름.
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = symbol.for('id');
console.log(gsymbol1 === gsymbol2);




