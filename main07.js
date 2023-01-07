class User {
  constructor(user) {
    this.user = user;
  }

  userLength = () => {
    const user = this.user;
    if (user.length < 0 || user.length > 30) {
      console.log("user의 길이는 1이상 30이하로 지정합니다.");
      break;
    }
    return (console.log(`${user}`))
  };
}

const user = new User(
  "mrko"
);
user.userLength();

const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
