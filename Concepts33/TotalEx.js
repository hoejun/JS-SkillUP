//콜스택, //화살표 함수
//콜스택은 함수의 호출을 저장하는 자료구조이다.
const func1 = () => {
  func2();
  console.log('Call func1');
};

const func2 = () => {
  func3();
  console.log('Call func2');
};

const func3 = () => {
  console.log('Call func3');
};

// //모듈 패턴
// let module = {
//   key: "data",
//   publicMethod: function () {
//     //하나의 객체라는 점에서 싱글톤 패턴이라고 할수있다.
//     return this.key;
//   },
// };

// console.log(module.key);
// console.log(module.publicMethod());

//클로저를 활용한 모듈 패턴
//모듈 패턴의 반환값은 함수가 아닌 객체이다.
let module = (function () {
  //은닉될 멤버 정의
  let privateKey = 0;
  function privateMethod() {
    return privateKey++;
  }

  //공개될 멤버(특권 메소드) 정의
  return {
    publicKey: privateKey,
    publicMethod: function () {
      return privateMethod();
    },
  };
})();

console.log(module.publicMethod());
console.log(module.publicMethod());

const greet = function (greeting, name) {
  console.log(greeting + ', ' + name);
};

greet('Hello', 'Heidi'); //함수가 제대로 작동하려면 인자 2개를 전달해야한다.

//첫번쨰 커링함수

const greetCurried = function (greetring) {
  return function (name) {
    console.log(greetring + ', ' + name);
  };
};

const greetHello = greetCurried('Hello');
greetHello('Heidi');
greetHello('Eddie');

greetCurried('hi')('curry');

//모두 커링
const greetDeeplyCurried = function (greeting) {
  return function (separator) {
    return function (emphasis) {
      return function (name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

const greetAwkwardly = greetDeeplyCurried('Hello')('...')('?');
greetAwkwardly('Heidi');
greetAwkwardly('Eddie');

const plus = function (a, b, c) {
  return a + b + c;
};

Function.prototype.partial = function () {
  const args = [].slice.apply(arguments);
  const self = this;
  return function () {
    return self.apply(null, args.concat([].slice.apply(arguments)));
  };
};

let plusa = plus.partial(1);
console.log(plusa(2, 3));

const transform1 = (transformer, url) => {
  return transformer.get(url);
};

const transform2 = (transformer, url) => {
  return transformer.get(url);
};

const transform3 = (transformer, url) => {
  return transformer.get(url);
};

const add = function (x, y) {
  return x + y;
};

const addf = function (x) {
  return function (y) {
    return x + y;
  };
};

//파이프와 컴포즈
console.log('파이프');

// const pipe =
//   (...fns) =>
//   (value) =>
//     fns.reduce((acc, fn) => fn(acc), value);

// pipe(
//   (x) => x + 10,
//   (x) => x + 20,
//   (x) => x * 100
// )(0);

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((v, f) => f(v), x);
// compose(
//   (x) => x + 10,
//   (x) => x + 20,
//   (x) => x * 100
// )(0);

const compose = (g, f) => (x) => g(f(x));
// 'x' in compose()
const user = { name: 'Gianmarco', password: 1234 };
// function 'f' in compose()
const getUserName = (user) => user.name;
// function 'g' in compose()
const upperCase = (string) => string.toUpperCase();
const getUserNameAndUpperCase = compose(upperCase, getUserName);
console.log(getUserNameAndUpperCase(user));
//'GIANMARCO'

// const compose =
//   (...functions) =>
//   (x) =>
//     functions.reduceRight((acc, fn) => fn(acc), x);
// const user = { name: 'Gianmarco', password: 1234 };
// const getUserName = (user) => user.name;
// const upperCase = (string) => string.toUpperCase();
// const firstFour = (string) => string.substring(0, 4);
// console.log(compose(firstFour, upperCase, getUserName)(user));

//메시지 큐, 이벤트 큐
function foo() {
  console.log('foo');
}

//setTimeout을 사용하게 되면서 bar함수는 메시지 큐에 들어가게 된다.
//그 후 foo함수는 콜스택에 들어가게 된다.
setTimeout(function bar() {
  console.log('bar');
}, 1000);

foo();

class TodoModel {
  constructor() {
    this.todos = [];
    this.lastChange = null;
  }

  addToPrivateList() {
    console.log('addToPrivateList');
  }
  add() {
    console.log('add');
  }
  reload() {}
}

const todoModel = new TodoModel();
console.log(todoModel.todos);
console.log(todoModel.lastChange);
todoModel.addToPrivateList();

//보안을 위해 팩토리 형태를 사용하자
//클래스는 함수 재정의 및 this를 통한 내부 변수 접근 등은 보안등에 최약하다
function TodoModel() {
  const todos = [];
  const lastsChange = null;

  function addToPrivateList() {
    console.log('addToPrivateList');
  }
  function add() {
    console.lgg('add');
  }
  function reload() {}

  return Object.freeze({
    add,
    reload,
  });
}

const todoModel = TodoModel();
console.log(todoModel.todos);
console.log(todoModel.lastsChange);
todoModel.addToPrivateList();

//데이터의 값이 복사된다.
let x = 100;
let y = x;
x = 99;
y; //100

//데이터의 참조가 복사된다.
let x = { cout: 100 };
let y = x;
x.count = 99;
y.count; //동일한 객체를 가리킴

let timerId = setInterval(() => console.log('tick'), 2000);

setTimeout(() => {
  clearInterval(timerId);
  console.log('stop');
}, 5000);
