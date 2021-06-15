//Object.create and Object.assign
//new
// function Person() {
//   this.name = 'anonymous';
//   this.job = 'none';
//   this.sayHello = function () {
//     console.log('hello, my name is ' + this.name);
//   };
// }

// function Unikys() {
//   this.name = 'Unikys';
//   this.job = 'Programmer';
// }

// //생성자가 있는 protoype을 다른 새로운 객체로 덮어씌우게 되면 원래 자기 자신의 생성자는 상실하게 되고, 수정한 객체 생성자로 바뀌게 된다.
// Unikys.prototype = new Person();
// const unikys = new Unikys();
// console.log(unikys.sayHello());

//object.create 자바스크립트의 상속
Object.create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

//상속
function Person(name) {
  this.name = name;
}

Person.prototype = {
  yell: function () {
    console.log('My name is ' + this.name);
  },
};

//생성자 호출
// const unikys = Object.create(Person.prototype);
Person.call(unikys, 'Unikys');
unikys.yell();
console.log('생성자 호출');
//new가 object.create()를 호환하고 있으므로, 생소한 object.create를 잘 사용하지 않는다.

//Object.assign
//동일한 키가 존재할 경우 대상 객체의 속성은 출처 객체의 속성으로 덮어쓰여집니다.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
const obj = Object.assign({}, o1, o2, o3);
console.log(obj);
