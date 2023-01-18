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

// mock function

const mockFn = jest.fn();

mockFn();
mockFn(1);

test('함수는 2번 호출됩니다.', () => {
  expect(mockFn.mock.length).toBe(2);
})

test('2번째로 호출된 함수에 전달된 인수는 1입니다.', () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
})

function forEachAdd1(arr) {
  arr.forEach(num => {
    mockFn(num + 1)
  })
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(3);
})

test("전달된 값은 11 21 31 입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[0][1]).toBe(21);
  expect(mockFn.mock.calls[0][2]).toBe(31);
})

mockFn 
.mockReturnValueOnce(10)
.mockReturnValueOnce(20)
.mockReturnValueOnce(30)
.mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd")
})

mockFn 
.mockReturnValueOnce(true)
.mockReturnValueOnce(false)
.mockReturnValueOnce(true)
.mockReturnValueOnce(false)
.mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num => mockFn(num)));

test("홀수는 1, 3, 5", () => {
  expect(result).toStrickEqual([1, 3, 5]);
})