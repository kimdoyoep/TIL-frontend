const a = Math.floor(Math.random() * 400);
const c = Math.floor(Math.random() * 401);

function RightPage(n) {
  if (a % 2 !== 0) {
    n = a + 1;
  } else if (a % 2 === 0) {
    n = a - 1;
  }

  return n;
}

const b = 0;
const pobi = [a, RightPage(b)];
pobi.sort();

const d = 0;
const crong = [c, RightPage(d)];
crong.sort();

function ScoreAdd(n) {
  var sum = 0;
  n = n.toString();
  const nod = n.length;

  for (i = 0; i < nod; i++) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

function ScoreMul(n) {
  var sum = 1;
  n = n.toString();
  const nod = n.length;

  for (i = 0; i < nod; i++) {
    sum *= n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

const A1 = ScoreAdd(a);
const A2 = ScoreMul(a);

const B1 = ScoreAdd(RightPage(b));
const B2 = ScoreMul(RightPage(b));

const C1 = ScoreAdd(c);
const C2 = ScoreMul(c);

const D1 = ScoreAdd(RightPage(d));
const D2 = ScoreMul(RightPage(d));

const pobiArr = [A1, A2, B1, B2];
const crongArr = [C1, C2, D1, D2];

var pobiMax = Math.max(...pobiArr);
var crongMax = Math.max(...crongArr);

if (pobiMax > crongMax) {
  log(`1 (포비 승!)`);
} else if (pobiMax < crongMax) {
  log(`2 (크롱 승!)`);
} else if (pobiMax === crongMax) {
  log(`0 (무승부!)`);
} else {
  console.log(`-1 (예외상황!)`);
}

function log(param) {
  console.log(`포비 : ${pobi}`);
  console.log(`크롱 : ${crong}`);
  console.log(`result :${param}`);
}
