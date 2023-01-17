const fn02 = require("./fn02");

test("3초 후에 받아온 이름은 Mike", () => { // passed
  function callback(name){
    expect(name).toBe("Mike");
  }
  fn02.getName(callback)
})

test("3초 후에 받아온 이름은 Mike", () => { // passed
  function callback(name){ 
    expect(name).toBe("Tom");
  }
  fn02.getName(callback)
})

test("3초 후에 받아온 이름은 Mike", (done) => { // failed :: done을 실행할 때까지 멈추지 않기.
  function callback(name){
    expect(name).toBe("Tom");
    done();
  }
  fn02.getName(callback)
})

test("3초 후에 받아온 나이는 30", () => {
  // return fn02.getAge().then(age => {
  //   expect(age).toBe(30)
  // })
  return expect(fn02.getAge()).resolve.toBe(30);
})

//--

let num = 0;

test("0 더하기 1은 1이야", () => {
  num = fn02.add(num,1);
  expect(num).toBe(1)
})

test("0 더하기 2은 2이야", () => { // failed :: num에 1이 그대로 남음.
  num = fn02.add(num,2);
  expect(num).toBe(2)
})

//solution


beforeEach(()=>{ // 실행할때마다 num을 0으로 바꿔줌..ㄷㄷ
  num = 0;
})

test("0 더하기 1은 1이야", () => {
  num = fn02.add(num,1);
  expect(num).toBe(1)
})

test("0 더하기 2은 2이야", () => { // failed :: num에 1이 그대로 남음.
  num = fn02.add(num,2);
  expect(num).toBe(2)
})

