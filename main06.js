class Student{

  constructor(email, name){
    this.email = email;
    this.name = name;
  }

  MakeMail = () => {
    const arr = [];
    const email = `"[${this.email}@email.com]","${this.name}"`;

    arr.push(email);
    
    console.log(arr);
  }

}

const student01 = new Student('dpdp','도엽지');
const student02 = new Student('sysy', '수연');
student01.MakeMail();
student02.MakeMail();

