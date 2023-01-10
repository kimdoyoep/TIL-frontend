const computerNum = Math.floor(Math.random() * 10);
const computerNumArr = [1, 0, 0];

computerNumCondition = (computerNum) => {
  for (i = 0; i < computerNumArr.length; i++) {
    computerNumArr[i] = computerNumArr[i] + computerNum;
    if (computerNumArr[i] === 10) {
      computerNumArr[i] = computerNumArr[i] - 1;
    }
  }
};

computerNumCondition(computerNum); // 컴퓨터(상대방) 숫자 결정.
console.log(computerNumArr);
