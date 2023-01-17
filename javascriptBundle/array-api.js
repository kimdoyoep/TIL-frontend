'use strick';

const fruits = ['apple', 'banana', 'orange'];

//fruits.toString();
const result = fruits.join(); // 요소들을 한번에 문자열로 나타냄
console.log(result);

const fruits2 = '🍐,🫐,🍎,🍋'
const result2 = fruits2.split(','); //기호를 사용하여 문자열을 배열로 
const result3 = fruits2.reverse(); // 말 그대로 거꾸로
const result4 = fruits2.slice(2, 5) // splice는 원래 배열도 바꾸지만 slice는 새로운 배열을 만들어냄


// -------------------

class Student{
  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 10, true, 45),
  new Student('B', 20, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 60),
  new Student('E', 50, true, 88)
];

const result5 = students.find(function(student, index){
  console.log(student,index);
  return student.score === 90;
}); //특정 조건에 맞느 요소를 가지고 있는 놈들만 골라줌

const result6 = students.find((student) => student.score === 80 );
console.log(result6);

const result7 = students.filter((student) => student.enrolled);
console.log(result7); // find랑 비슷

const result8 = students.map((student) => student.score);
// 여러 요소들을 가지고 있는 배열을 필요한 요소만 가지고 다시 배열을 만듬 추가로 요소에 다양한 것들을 추가할 수 있음
const result9 = students.some((student) => student.score < 50);// 한 사람이라도 점수가 50보다 낮은 사람이 있으면 true

const result10 = students.every((student) => student.score < 50); // 모든 사람이 점수가 50보다 낮으면 true

const result11 = students.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  return curr;
}); // prev와 curr을 반복하고 curr은 return curr에 의해서 (prev, curr)의 prev 의 자리로 오게 됩니다.

const result12 = students.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  return prev + curr.score;
},0);


const result13 = students.map((student) => student.score).join(); console.log(result13);

const result14 = students.map((student) => student.score).sort((a, b) => a-b).join();
//map a-b 결과가 음수가 나오면 a를 앞쪽에 배치한다.



