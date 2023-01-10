const userArr = [];
const friendsArr = [];
const visitorArr = [];
const friendsObjArr = [];
const visitorObjArr = [];
const resultArr = [];

class User {
  constructor(user) {
    this.user = user;
  }

  userLength = () => {
    const user = this.user;
    if (user.length < 0 || user.length > 30) {
      return console.log("user의 길이는 1이상 30이하로 지정합니다.");
    }
    this.userName();
  };

  userName = () => {
    const user = this.user;
    userArr.push(user);
  };
}

const user1 = new User("mrko");
user1.userLength();

const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];

const friends02 = `  ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]`;

const visitor = [
  "bedi",
  "bedi",
  "donut",
  "bedi",
  "shakevan",
  "yupgy",
  "shakevan",
  "donut",
  "coldplay",
  "kity",
];

addFriendAndScore = (user, friends) => {
  for (let i = 0; i < friends.length; i++) {
    const x = friends[i];
    const y = user;
    chooseFriend(x, y);
  }
};

const aa = [];

chooseFriend = (x, y) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      friendsArr.push([`${x[i - 1]}`, 0]);
    }
  }
};

addFriendAndScore(userArr[0], friends);
console.log(friendsArr.toString());

chooseVisitor = (visitor) => {
  for (let i = 0; i < visitor.length; i++) {
    visitorArr.push([`${visitor[i]}`, 0]);
  }
};

chooseVisitor(visitor);
console.log(visitorArr.toString());

pushResultArr = (friendsArr, visitorArr) => {
  for (let i = 0; i < friendsArr.length; i++) {
    resultArr.push(friendsArr[i]);
  }

  for (let i = 0; i < visitorArr.length; i++) {
    resultArr.push(visitorArr[i]);
  }
};

pushResultArr(friendsArr, visitorArr);

const newResultArr = resultArr.filter((element, index) => {
  return (
    resultArr.findIndex(
      (item) => item[0] === element[0] && item[1] === element[1]
    ) === index
  );
});

console.log(newResultArr.toString());
console.log(resultArr.toString());

const newVisitorArr = visitorArr.filter((element, index) => {
  return (
    visitorArr.findIndex(
      (item) => item[0] === element[0] && item[1] === element[1]
    ) === index
  );
});

console.log(newVisitorArr);

addScore = () => {
  for (let i = 0; i < friendsArr.length; i++) {
    for (let t = 0; t < newResultArr.length; t++) {
      if (friendsArr[i] === newResultArr[t]) {
        newResultArr[t][1] = newResultArr[t][1] + 10;
      } else {
        newResultArr[t][1] = newResultArr[t][1];
      }
    }
  }

  for (let i = 0; i < newVisitorArr.length; i++) {
    for (
      let t = friendsArr.length;
      t < visitorArr.length + friendsArr.length;
      t++
    ) {
      if (newVisitorArr[i][0] === resultArr[t][0]) {
        const x = newVisitorArr[i];
        addScoreOne(x);
      } else {
        continue;
      }
    }
  }
};

addScoreOne = (x) => {
  for (let i = 0; i < newResultArr.length; i++) {
    if (x[0] === newResultArr[i][0]) {
      newResultArr[i][1] = newResultArr[i][1] + 1;
    } else {
      newResultArr[i][1] = newResultArr[i][1];
    }
  }
};

addScore();

console.log(newResultArr.toString());

finish = (newResultArr) => {
  newResultArr.sort((a, b) => b[1] - a[1]);
  if (newResultArr.length >= 5) {
    newResultArr.length = 5;
  }
};

finish(newResultArr);

console.log(newResultArr.toString());

console.log(`friends: ${friends02}
visitor: [${visitor}] 
result: [${newResultArr}]`);
