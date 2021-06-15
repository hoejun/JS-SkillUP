//Inheritance, Polymorphism and Code Reuse
//다형성 메서드 오버라이딩 흉내내기
function Runable() {
  this.run = function () {
    throw new Error('run 메서드 미구현');
  };
}

function RunImpl() {
  this.run = function () {
    console.log('달려!');
  };
}

RunImpl.prototype = new Runable();

const man = new RunImpl();

man.run();

console.log(man instanceof Object); // true
console.log(man instanceof Runable); // true
console.log(man instanceof RunImpl); // true

//상속
//어떤 클래스에서 더 특화된 버전의 클래스를 위한 행동을 제공할 수 있게 한다.
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands stiil.`);
  }
}

let animal = new Animal('My animal');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5);
rabbit.hide();

//다형성
//한 행동을 여러 방법으로 구현하고 상황에 따라 적당한 구현을 선택해서 쓸 수 있도록 해주는 기능
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!

//코드 재사용
