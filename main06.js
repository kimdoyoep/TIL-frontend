const arr = [];
const list = [
  `"pppp@email.com"`,
  `"dpul@email.com"`,
  `"yuil@email.com"`,
  `"sdthm@email.com"`,
];
const result = [];

class Student {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  makeMail = () => {
    const mail = this.email;
    const mailArr = [...mail];
    const name = this.name;
    const mailToString = mail.toString();
    const nameToString = name.toString();
    const regex = /^[a-z|A-Z]+$/;
    const regexKorean = /^[ㄱ-ㅎ|가-힣]+$/;
    const mailRule = "2자 이상 11자 이하로 메일을 지정합니다.";

    if (mailToString.length < 2 || mailToString.length > 11) {
      console.log(`${mailRule}`);
    } else if (nameToString.length < 1 || nameToString.length > 20) {
      console.log("1자 이상 20자 이하로 이름을 지정합니다.");
    } else if (
      mailToString.length < 2 ||
      (mailToString.length > 11 && nameToString.length < 1) ||
      nameToString.length > 20
    ) {
      console.log("2자 이상 11자 이하로 메일을 지정합니다.");
      console.log("1자 이상 20자 이하로 이름을 지정합니다.");
    } else if (regex.test(mail) !== true) {
      console.log("영어로만 입력합니다.");
    } else if (regexKorean.test(name) !== true) {
      console.log("한글로만 입력합니다.");
    } else {
      arr.push(`["${mail}email.com", "${name}"]`);

      for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < mailArr.length; j++) {
          if (list[i].indexOf(mailArr[j] + mailArr[j + 1]) !== -1) {
            result.push(list[i]);
            break;
          } else {
            continue;
          }
        }
      }

      const x = "asdf";
      for (let i = 0; i < x.length; i++) {
        if (i < 2) {
          console.log(validateList(x.charAt(i) + x.charAt(i + 1)));
        }
      }
    }
  };
}

function validateList(x) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(x)) {
      return list[i];
    }
    return null;
  }
}

const student01 = new Student("dpdp", "디피");
const student02 = new Student("ppap", "피피에이피");
const student03 = new Student("ndl", "니달리");
const student04 = new Student("shm", "손흥민");
student01.makeMail();
student02.makeMail();
student03.makeMail();
student04.makeMail();

resultOutput = (arr, result) => {
  arr.sort();
  result.sort();
  console.log(`forms: ${arr}`);
  console.log(`result: [${result}]`);
};

resultOutput(arr, result);

const aaa = [1, 3, 5, 2, 4];
aaa.sort();
console.log(aaa);
