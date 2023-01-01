const a = Math.floor(Math.random()*401);
const b = Math.floor(Math.random()*401);
const c = Math.floor(Math.random()*401);
const d = Math.floor(Math.random()*401);

const pobi = [a, b];
const crong = [c, d];


function pobiScoreAdd(n) {
  var sum = 0;
  //n = n.toString();

  for(i = 0; i < n.length; i){
    sum += n%10;
    n = Math.floor(n/10);
  }

  return sum;
}

console.log(a);
console.log(pobiScoreAdd(a));
console.log(a.length);



