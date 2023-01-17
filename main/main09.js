const randomArr = [];

pushZeroToNine = () => {
  for (let i = 0; i < 10; i++) {
    randomArr.push(i);
  }
  shuffle(randomArr);
};
pushZeroToNine();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//--

const computerArr = [];

pushArr = () => {
  for (let i = 0; i < 3; i++) {
    computerArr.push(randomArr[i]);
    if (computerArr[0] === 0) {
      computerArr[0] = randomArr[i + 1];
      randomArr.splice(i + 1, 1);
    }
  }
};
pushArr();

//--

alert(
  "Game role : 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다."
);

//--

gameStart = () => {
  const input = prompt(
    "게임을 시작합니다. (서로 다른 3자리 자연수를 입력하세요)"
  );
  const inputArr = [...input];

  textCondition = () => {
    if (input.length !== 3 || input !== /[^0-9]/) {
      throw new Error("error : 서로 다른 3자리 자연수로 입력하세요.");
    }
  };
  textCondition();

    const strikePoint = [];
  strike = () => {
    for (let i = 0; i < input.length; i++) {
      if (inputArr[i] == computerArr[i]) {
        strikePoint += 1;
      }
    }
  };
  strike();

  const ballPoint = [];
  ball = () => {
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){

      }
      
    }
  }
  ball();

  ball02 = (i, j) => {
    if(computerArr[i] == inputArr[j]){
      if(i == j){
        ballPoint[0] += 0;
      }else{
        ballPoint[0] += 1;
      }
    }
  }
  ball02();

}
gameStart();
