const zeroToNine = [];

makeArrZeroToNine = (arr) => {
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
};

makeArrZeroToNine(zeroToNine);

shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

shuffle(zeroToNine);

const computerArr = []; //컴퓨터(상대방) 숫자 정렬.

makeArrComputer = (arr) => {
  for (let i = 0; i < 3; i++) {
    arr.push(zeroToNine[i]);
    if (arr[0] === 0) {
      arr[0] = zeroToNine[i + 1];
      zeroToNine.splice(i + 1, 1);
    }
  }
};

makeArrComputer(computerArr);
console.log(computerArr);

const input = prompt(
  "게임을 시작합니다. (서로 다른 수로 이루어진 3자리 수를 입력하세요.)"
);
const inputArr = [...input];

textCondition = () => {
  const text = "서로 다른 3자리 자연수로 입력합니다.";
  if (input === /[^가-힣]/ || input === /[^a-zA-Z]/ || inputArr.length > 3) {
    alert(text);
  }
};

textCondition();

// strike = input => {
//   for(i = 0; i < computerArr.length;)
// }
