'use strick';

console.log('1');
setTimeout(function() {
  console.log('2');
},1000); // 1초 뒤에 이 함수를 수행하시오!
console.log('3');

//synchronous callback

function printImmediately(print){
  print();
}

printImmediately(() => console.log(`hello`));


//asynckhronous callback

function pirntWithDelay(print, timeout){
  setTimeout(print, timeout);
}

pirntWithDelay(() => console.log('async hello'), 2000);
