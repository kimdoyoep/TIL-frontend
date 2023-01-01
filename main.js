const a = Math.floor(Math.random()*401);
const b = Math.floor(Math.random()*401);
const c = Math.floor(Math.random()*401);
const d = Math.floor(Math.random()*401);

const pobi = [a, b];
const crong = [c, d];


function ScoreAdd(n) {
  var sum = 0;
  n = n.toString();
  const nod = n.length;

  for(i = 0; i < nod; i++){
    sum += n%10;
    n = Math.floor(n/10);
  }

  return sum;
}

function ScoreMul(n) {
  var sum = 1;
  n = n.toString();
  const nod = n.length;

  for(i = 0; i < nod; i++){
    sum *= n%10;
    n = Math.floor(n/10);
  }

  return sum;
}

const A1 = ScoreAdd(a);
const A2 = ScoreMul(a);

const B1 = ScoreAdd(b);
const B2 = ScoreMul(b);

const C1 = ScoreAdd(c);
const c2 = ScoreMul(c);

const D1 = ScoreAdd(d);
const D2 = ScoreMul(d);



console.log(a);
console.log(ScoreAdd(a));
console.log(ScoreMul(a));
console.log(A1);



