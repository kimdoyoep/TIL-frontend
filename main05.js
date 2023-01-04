const money = Math.floor(Math.random()*1000001);

CalcMoney = money => {
  const moneyToStirng = money.toString();
  let sum = null;
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arr2 = [];

  for(i = 0; i < moneyToStirng.length; i++){
    sum = money%10;
    arr2.unshift(sum);
    money = Math.floor(money/10);
  }

  for(k = 0; k < arr2.length; k++){
    arr.splice(arr2.length-k, 1, arr2[k]);
  }
  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0)).reverse();
}


console.log(`money : ${money}`);
console.log(`result : ${CalcMoney(money)}`);

