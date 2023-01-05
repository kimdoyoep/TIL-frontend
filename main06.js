const storage = [];

class Student{

  constructor(email, name){
    this.email = email;
    this.name = name;
  }

  makeMail = () => {
    const arr = [];
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
      arr.push(`${mail}@email, ${name}`);
      console.log(arr);
      storage.push(arr);
      console.log(`storage : ${storage}`);
    }

  //   duplicateTest = () => {
  //     storage.push(arr);
  //     console.log(result)
  //   }
  }
  
}

// 새로만든 회원의 메일 [i] === 기존 회원의 메일[k] 새로만든 회원의 메일 [i+1] === 기존 회원의 메일[k+1] => console.log(ddd) 실행

const student01 = new Student('dpdp','도엽지');
const student02 = new Student('jsjs', '자스');
student01.makeMail();
student02.makeMail();



