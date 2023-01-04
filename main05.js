// const money = Math.floor(Math.random()*1000000);

// CalcMoney = money => {
//   const moneyToStirng = money.toString();
//   const sum = 0;
//   const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
//   for(i = 0; i < moneyToStirng.length; i++){
//     sum = money%10;
//     arr.splice(moneyToStirng.lenth - i, 1, sum);
//     money = Math.florr(money/10);
//   }
//   return arr.reverse();
// }


// console.log(`money : ${money}`);
// console.log(`result : ${CalcMoney(money)}`);

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
arr.splice(1,0,1,1)
console.log(arr);
