
const arr = [];
const result = [];


class Student{

  constructor(email, name){
    this.email = email;
    this.name = name;
  }

  makeMail = () => {
    const mail = this.email;
    const name = this.name;
    const mailToString = mail.toString();
    const nameToString = name.toString();
    const regex = /^[a-z|A-Z]+$/;
    const regexKorean = /^[ㄱ-ㅎ|가-힣]+$/;

    if(mailToString.length < 2 || mailToString.length > 11){
      console.log('2자 이상 11자 이하로 메일을 지정합니다.');
    }else if(nameToString.length < 1 || nameToString.length > 20){
      console.log('1자 이상 20자 이하로 이름을 지정합니다.');
    }else if(mailToString.length < 2 || mailToString.length > 11 && nameToString.length < 1 || nameToString.length > 20){
      console.log('2자 이상 11자 이하로 메일을 지정합니다.');
      console.log('1자 이상 20자 이하로 이름을 지정합니다.');
    }else if(regex.test(mail) !== true){
      console.log('영어로만 입력합니다.');
    }else if(regexKorean.test(name) !== true){
      console.log('한글로만 입력합니다.')
    }else{
      const studentArr = [`${mail}@email.com`, `${name}`];
      arr.push(studentArr.toString());
      console.log(arr);
    }
  }
  
}

const student01 = new Student('dpdp','도엽지');
const student02 = new Student('jsjs', '자스');
const student03 = new Student('ppap', '피피에이피');
const student04 = new Student('dppp', '디피피피');
student01.makeMail();
student02.makeMail();
student03.makeMail();
student04.makeMail();

console.log(arr.length);

duplicateTest = arr => {
  for(i = 0; i < arr.length; i++){
    const arrNum = arr[i];
    const arrr = [...arrNum]
    arr.splice(i,1);
    for(k = 0; k < arr.length; k++){
      const arrArr = [...arr[k]];
      for(j = 0; j < arrr.length; j++){
        for(t = 0; t < arrArr.length; t++){
          if(arrr[j] === arrArr[t] && arrr[j+1] === arrArr[t+1]){
            result.push(arrNum, arr[k]);
            console.log(arr)
            break;
          }else{
            arr.splice(i-1, 0, arrNum);
            break;
          }
        }
      }
    }
  }
}

duplicateTest(arr);