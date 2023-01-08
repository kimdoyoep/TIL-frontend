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

const visitor = ["bedi", "bedi", "donut", "bedi", "shakevan"];

addFriendAndScore = (user, friends) => {
  for (let i = 0; i < friends.length; i++) {
    const x = friends[i];
    const y = user;
    chooseFriend(x, y);
  }
};

chooseFriend = (x, y) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      friendsArr.push(`${x[i - 1]}`);
    }
  }
};

addFriendAndScore(userArr[0], friends);
console.log(friendsArr);

chooseVisitor = (visitor) => {
  for (let i = 0; i < visitor.length; i++) {
    visitorArr.push(visitor[i]);
  }
};

chooseVisitor(visitor);
console.log(visitorArr);

AddFriendScore = (friendsArr, visitorArr) => {
  for (let i = 0; i < friendsArr.length; i++) {
    const x = friendsArr[i];
    friendsObj(x);
  }

  for (let i = 0; i < visitorArr.length; i++) {
    const x = visitorArr[i];
    visitorsObj(x);
  }
};

friendsObj = (x) => {
  const y = `10/${x}`;
  friendsObjArr.push(y);
};

visitorsObj = (x) => {
  const y = `${x}`;
  visitorObjArr.push(y);
};

AddFriendScore(friendsArr, visitorArr);
console.log(visitorObjArr);
console.log(friendsObjArr);

const DuplicateCount = (arr) => {
  let result = [];
  for (const el of arr) {
    result[el] = (result[el] || 0) + 1;
  }
  return result;
};

const test = DuplicateCount(visitorObjArr);
console.log(test);
