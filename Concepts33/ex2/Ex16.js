//new, Constructor, instanceof and Instances
//new 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);

//constructor 메서드는 class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드입니다.
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
//인스턴스 컴퓨터 저장공간에서 할당된 실체를 의미한다.
//A instanceof B 의 형식으로 사용하며 A가 B의 인스턴스가 맞는지를 판단하여 true / false를 반환
//개체가 특정 클래스의 인스턴스인지 여부를 나타내는 boolean값으로 반환하는 비교연산자
