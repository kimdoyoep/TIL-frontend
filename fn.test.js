const fn = require("./fn");

test("1은 1이야", () => { // passed
  expect(1).toBe(1);
});

test("1더하기 2는 3이야", () => { // passed
  expect(add(1, 2)).toBe(3);
});

test("1더하기 2는 4이야", () => { // failed
  expect(add(1, 2)).toBe(4);
});

// toEqual VS

test("1더하기 3는 4이야", () => { // failed
  expect(add(1, 3)).toEqual(4);
});

test("나이를 받아서 객체로 전달해줘", () => { // passed
  expect("yupgy", 19).toBe({
    name: "yupgy",
    age: 19,
  });
});

test("나이를 받아서 객체로 전달해줘", () => { // passed
  expect("yupgy", 19).toEqual({
    name: "yupgy",
    age: 19,
  });
});

test("나이를 받아서 객체로 전달해줘", () => { // failde :: toStrickEqual는 구체적으로 test하기 때문에 gender을 포함해야 passed된다.
  expect("yupgy", 19).toStrickEqual({
    name: "yupgy",
    age: 19,
  });
});

// toBeNull
// toBeUndefine
// toBeDefine

//toBeTruthy
//toBeFalsy


test("0은 false입니다.", () => { //passed
  expect(add(1, -1)).toBeNull();
})

test("0은 false입니다.", () => { // passed
  expect(add(1, -1)).toBeFalsy();
})

test("비어있지 않은 문자열은 true 입니다.", () => { // failed :: 빈 문자열이 아닌 hello world로 채워진 문자열이 왔기 때문에 toBeTruthy를 기대한다.
  expect(add("hello", "World")).toBeFalsy();  
})

// toBeGreaterThan 크다
// toBeGreaterThanEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", () => { // passed
  const id = 'HELLOWORLD';
  expect(id.length).toBeLessThanEqual(10);
})

test("비밀번호 4자리.", () => { // passed
  const pw = '1234';
  expect(pw.length).toBe(4);
})

test("비밀번호 4자리.", () => { // passed
  const pw = '1234';
  expect(pw.length).toEqual(4);
})

// toBeClose

test("0.1 더하기 0.2는 0.3이다", () => { // passed :: 0.3에 근접했는가 test한다.
  expect(add(0.1,0.2)).toBeClose(0.3); 
})