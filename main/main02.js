brownpassword = () => {
  const input = prompt("암호를 입력하세요.");
  const inputArr = [...input];

  if (input.length > 10000 || input.length < 1) {
    alert("1자 이상 10000자 이하로 작성하세요.");
    brownpassword();
  }
};
brownpassword();
