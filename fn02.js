const fn02 = {
  add: (num1, num2) => num1 + num2,
  getName: () => {
    const name = "Mike";
    setTimeout(()=>{
      callback(name);
    }, 3000)
  },
  getAge: () => {
    const age = 30; 
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
}

module.export 