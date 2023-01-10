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

console.log(zeroToNine);

const computerArr = [];

makeArrComputer = (arr) => {
  for (let i = 0; i < 3; i++) {
    arr.push(zeroToNine[i]);
    if (arr[0] === 0) {
      console.log(`ss`);
      arr[0] = zeroToNine[i + 1];
      zeroToNine.splice(i + 1, 1);
      console.log(zeroToNine);
    }
  }
};

makeArrComputer(computerArr);
console.log(computerArr);

// makeArrComputer(computerArr);

// console.log(computerArr);

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   console.log("input: ", line);
//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });
