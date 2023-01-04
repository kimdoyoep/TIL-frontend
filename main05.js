const money = Math.floor(Math.random()*1000001);

CalcMoney = money => {
  
  
    for(i = 0; i < money; i++){
      if(money - 50000 > 0){
        money = money - 50000;
      }else{
        break;
      }
    }

    for(k = 0; k < money; k++){
      if(money - 10000 > 0){
        money = money - 10000;
      }else{
        break;
      }
    }

    return k;
}

console.log(CalcMoney(money))
console.log(money);
