'user strick';

//producer
const promise = new Promise((resolve, reject) => {
  console.log('doing somthing...')
  setTimeout(() => {
    //resolve('yupgy');
    reject(new Error('no network'));
  }, 2000)
});

//consumers

promise.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
  console.log('finally');
});

//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
});

fetchNumber
.then(num => num * 2)
.then(num => num *3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num -1), 1000);
  })
})
.then(num => console.log(num));

// 오류 처리

const getHen = () => 
new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'),1000);
});
const getEgg = hen => 
new Promise((resolve, reejct) => {
  setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook = egg => 
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);

getHen() 
.then(getEgg)
.then(getEgg)
.then(console.log)
.catch(console.log);


