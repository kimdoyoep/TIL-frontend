'use strick';

//class

class person{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name}: hello!`);
  }

}

const yupgy = new person('yupgy', 18);
console.log(yupgy.name);
console.log(yupgy.age);
yupgy.speak();

class User{

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    //if(value < 0){
    //console.log('value can not be negative')}
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('steve', 'Jobs', -1);
console.log(user1.age);

//static

class Article {

  static publisher = 'Dream coder';

  constructor(article){
    this.article = article;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

class Shape {

  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color of`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{}

class Triangle extends Shape{

  draw(){
    super.draw(); //부모의 메서드를 가져옴.
    console.log('🔺');
  }


  getArea(){
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

const triangle = new Triangle(20, 20, 'red');
console.log(Triangle.getArea());

