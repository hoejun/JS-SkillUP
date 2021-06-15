//Prototype Inheritance and Prototype Chain
// //프로토타입이란 : 자신을 만들어낸 객체의 원형
//객체와 객체를 연결하고 한쪽 방향으로 상속을 받는 형태를 만들 수가 있다.

//
const person = function () {
  this.hp = function () {
    console.log('100');
  };
};

person.hp = function () {
  console.log('50');
};

const p1 = new person();

p1.hp();

//프로토타입
const person = function () {}; //프로토타입
person.hp = function () {
  console.log('100');
};
person.prototype.hp = function () {
  console.log('50');
};
const p1 = new person();
p1.hp(); // 50

//메모리에 4개가 할당이 된다. 그러면 객체를 100개 만들면 200개의 변수가 메모리에 할당을 한다고 치자
//이런 문제를 해결하기 위해서는 프로토타입으로 해결 가능
function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

const kim = new Person();
const park = new Person();

console.log(kim.eyes);

//이들은 각자 3개의 속성을 가지고 있고 데이터 또한 동일하다.
//메모리의 관점에서 보면 kim과 lee 객체가 생성되면서 총 6개의 변수가 메모리에 저장 되었을 것이다.
//심지어 중복된 값이다...
//메모리 관점에서 살펴보자. kim과 lee는 자신이 변수를 가지고 있는게 아니라,
//Person.prototype이라는 어떤 Object의 hand라는 속성을 공유하고 있다.
//그렇다는 말은 위의 코드 처럼 생성된 객체의 수 만큼 변수가 저장되는 것이 아니라,
//같은 생성자를 통해서 만들어진 객체들은 하나의 prototype 이라는 Object를 공유하고 있다는 뜻이다.

//kim과 park이라는 객체를 보면
//eyes라는 속성이 없는데도 출력이 된다.
//__proto__라는 것을 가지고 있다.
//자신을 생성 했던 함수가 가지고 있는 속성들을 가르킨다.

//1. 함수호출시 this
//자바스크립트에서 함수를 호출하면 해당함수 내부 코드에서 사용된 this는 전역객체에 바인딩된다.

//2. 메소드 호출시 this
//객체의 메소드를 호출할 때는 해당 메소드를 호출한 객체로 바인딩된다.

function Human(name) {
  this.name = name;
}

const girl = new Human('Marry');
const boy = new Human('TOM');

Human.prototype.sayName = function () {
  console.log('나의 이름은' + this.name + '입니다.');
};

girl.sayName();
boy.sayName();

//프로토타입
function Person(age, name) {
  this.age = age;
  this.name = name;
}

Person.prototype.eat = function () {
  console.log('I eat a pizza');
};

function Student(stdNum) {
  this.stdNum = stdNum;
}

Student.prototype = new Person(22, 'KIM');

Student.prototype.introduce = function () {
  console.log(
    `age : ${this.age}, name : ${this.name}, stdNum : ${this.stdNum}`
  );
};

const CS_student = new Student(1812345);
CS_student.eat();
CS_student.introduce();

//프로토타입 체인
//속성이나 메서드를 참조하게 되면, 먼저 자신 안에 멤버가 정의되어있는지 찾아본 다음,
//발견하지 못하면 그 프로토타입으로 이동하여 해당 프로토타입 객체 내에서 멤버를 찾는다.
//이는 멤버를 찾거나, 멤버를 찾지 못하고 null을 반환하고서야 비로소 끝나는데,
//이러한 객체들의 연쇄를 가리켜 프로토타입 체인(prototype chain)
function main() {
  var person = new Person('kid', 10, function () {
    console.log("I'm a boy!");
  });

  person.greeting();

  console.log(person.myInfo());

  // 3.1) person 객체에서 toString 멤버를 찾습니다.
  // 3.2) person.prototype 객체로 이동하여 toString 멤버를 찾습니다.
  // 3.3) Object.prototype 객체로 이동하여 toString 멤버를 찾습니다.
  // 3.4) toString 멤버가 있으므로 이를 호출합니다.
  console.log(person.toString());

  // 3.1) person 객체에서 wrong 멤버를 찾습니다.
  // 3.2) person.prototype 객체로 이동하여 wrong 멤버를 찾습니다.
  // 3.3) Object.prototype 객체로 이동하여 wrong 멤버를 찾습니다.
  // 3.4) wrong 멤버가 없으므로 undefined를 반환합니다.
  console.log(person.wrong);
}

main();
