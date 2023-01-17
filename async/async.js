'use strick';

//aysnc
function fetchUser(){
  return Promise((resolve, reject) => {
    resolve('ellie');
  });
}

async function fetchUser(){
  return 'ellie';
}

//await

function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000);
  return 'banana';
}

//

function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana()
    .then(banana => `${apple} + ${banana}`);
  });
}

async function pickFruits(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

//

function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);



