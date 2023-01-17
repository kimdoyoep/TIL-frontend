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

//--

alert(
  "경기 규칙 : 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다."
);

const result = [];
baseBallGame = () => {
  const input = prompt(
    "게임을 시작합니다. (서로 다른 수로 이루어진 3자리 수를 입력하세요.)"
  );

  //--

  const inputArr = [...input];
  textCondition = () => {
    if (input.length !== 3) {
      alert("error : 서로 다른 수로 이루어진 3자리 수를 입력하세요!");
      baseBallGame();
      throw new Error("error : 서로 다른 수로 이루어진 3자리 수를 입력하세요!");
    }
  };

  textCondition();

  //--

  const strikeArr = [[0, "스트라이크"]];
  const ballArr = [0];

  bundle = () => {
    strike = () => {
      for (let i = 0; i < 3; i++) {
        if (inputArr[i] == computerArr[i]) {
          strikeArr[0][0] += 1;
        }
      }
    };
    strike();

    //--

    ball = () => {
      if (computerArr[0] == inputArr[1] || computerArr[0] == inputArr[2]) {
        ballArr[0] += 1;
      }

      if (computerArr[1] == inputArr[2] || computerArr[1] == inputArr[0]) {
        ballArr[0] += 1;
      }

      if (computerArr[2] == inputArr[0] || computerArr[2] == inputArr[1]) {
        ballArr[0] += 1;
      }
    };
    ball();

    finish = () => {
      if (ballArr[0] == 0 && strikeArr[0][0] == 0) {
        alert(`낫싱`);
        baseBallGame();
      }
      if (ballArr[0] != 0 && strikeArr[0][0] == 0) {
        alert(`${ballArr[0]}볼`);
        baseBallGame();
      }
      if (ballArr[0] == 0 && strikeArr[0][0] != 0 && strikeArr[0][0] < 3) {
        alert(`${strikeArr[0][0]}${strikeArr[0][1]}`);
        baseBallGame();
      }
      if (ballArr[0] != 0 && 0 < strikeArr[0][0] < 3) {
        alert(`${ballArr[0]}볼 ${strikeArr[0][0]}${strikeArr[0][1]}`);
        baseBallGame();
      }

      if (strikeArr[0][0] == 3) {
        if (!confirm("Victory! Do you want to restart?")) {
          alert(`The End`);
        } else {
          location.reload();
          location.replace(location.href);
          location.href = location.href;
        }
      }
    };
    finish();
  };
  bundle();
};
baseBallGame();
