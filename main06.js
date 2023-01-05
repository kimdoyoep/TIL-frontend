const storage = ['dp@email.com, 도도', 'jjss@email.com, 심스', 'pp@email.com, 피피', 'suu@email.com, 수우우'];
const arr = [];
const arr2 = [];


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
      arr.push(`${mail}@email.com, ${name}`);
      console.log(arr)
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

console.log(storage);

duplicateTest = (storage, arr) => {
  for(k = 0; k < arr.length; k++){
    for(i = 0; i < storage.length; i++){
      const storageNum = storage[i];
      const storageArr = [...storageNum];
      const arrNum = arr[k];
      const arrArr = [...arrNum];
      for(j = 0; j < 14; j++){
        if(storageArr[j] === arrArr[j] && storageArr[j+1] === arrArr[j+1]){
          arr2.storage[i];
          console.log('성공했노 ㅋ');
        }else{
          continue;
        }
      }
    }
  }
}

duplicateTest(storage, arr);
