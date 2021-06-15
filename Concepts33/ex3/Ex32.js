// //Partial Applications, Currying, Compose and Pipe
// //커링:하나의 인자만 받을 수 있는 함수를 계속 반환. 마지막 인자 전달되기 전까지는 원본 함수가 실행되지 않음. 리덕스에서 많이 사용됨
// //Partial Application(부분 적용 함수): 여러 개의 인자를 전달하여 실행 결과를 재실행할 때 원본 함수가 무조건 실행됨.

// const partial = function () {
//   const originalPartialArgs = arguments;
//   const func = originalPartialArgs[0];

//   if (typeof func !== 'function') {
//     throw new Error('첫 번째 인자가 함수가 아닙니다.');
//   }

//   return function () {
//     //외부함수의 arguments를 함수 빼고 두 번째 인자부터 배열로 만듦
//     const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1); //첫번째 인자 배열
//     const restArgs = Array.prototype.slice.call(arguments); //두번째 인자 배열

//     return func.apply(this, partialArgs.concat(restArgs));
//   };
// };

// const add = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// };

// const addPartial = partial(add, 1, 2, 3, 4, 5);
// console.log(addPartial(6, 7, 8, 9, 10));

// const dog = {
//   name: '강아지',
//   greet: partial(function (prefix, suffix) {
//     return prefix + this.name + suffix;
//   }, '왈왈,'),
// };
// console.log(dog.greet('입니다.'));

// // ////////
// // //Partial application
// // const plus = function (a, b, c) {
// //   return a + b + c;
// // };

// // Function.prototype.partial = function () {
// //   const args = [].slice.apply(arguments);
// //   const self = this;
// //   return function () {
// //     return self.apply(null, args.concat([].slice.apply(arguments)));
// //   };
// // };

// // const plusa = plus.partial(1);
// // plusa(2, 3); // 6
// // const plusb = plusa.partial(2);
// // plusb(4); // 7
// // const plusab = plus.partial(1, 3);
// // plusab(5); // 9

// // //bind를 사용하면 더 깔끔해짐. 위의 partial 메소드를 prototype에 추가할 필요 없이
// // const plusa = plus.bind(null, 1);
// // plusa(2, 3); // 6
// // const plusb = plusa.bind(null, 2);
// // plusb(4); // 7
// // const plusab = plus.bind(null, 1, 3);
// // plusab(5); // 9

// // //Currying
// // //하나의 인자만 받을 수 있는 함수를 계속 반환. 마지막 인자 전달되기 전까지는 원본 함수가 실행되지 않음. 리덕스에서 많이 사용됨
// // function multiplyThree(x) {
// //   return function (y) {
// //     return function (z) {
// //       return x * y * z;
// //     };
// //   };
// // }

// // multiplyThree(4)(8)(2);

// // Function.prototype.curry = function (one) {
// //   const origFunc = this;
// //   const target = origFunc.length;
// //   const args = [];

// //   function next(nextOne) {
// //     args = args.concat(nextOne);
// //     if (args.length === target) {
// //       return origFunc.apply(null, args);
// //     } else {
// //       return function (nextOne) {
// //         return next(nextOne);
// //       };
// //     }
// //   }
// //   return next(one);
// // };

// // function multiplyFour(w, x, y, z) {
// //   return w * x * y * z;
// // }

// // multiplyFour.curry(2)(3)(4)(5); // 120

// //////////////////////////////////////////// //컴포즈, 파이프
// // const compose =
// //   (...fns) =>
// //   (x) =>
// //     fns.reduceRight((v, f) => f(v), x);

// // compose(
// //   (x) => x + 10,
// //   (x) => x + 20,
// //   (x) => x * 100
// // )(0);

// // const pipe =
// //   (...fns) =>
// //   (value) =>
// //     fns.reduce((acc, fn) => fn(acc, value));

// // pipe(
// //   (x) => x + 10,
// //   (x) => x + 20,
// //   (x) => x * 100
// // )(0);

// const partial = (fun, ...args1) => {
//   return (...args2) => fun.apply(null, [...args1, ...args2]);
// };

// const sqr = (n) => n * n;

// sqr(2);
// sqr('two');

// const condition =
//   (...validators) =>
//   (fun, arg) => {
//     const result = validators.reduce(
//       (isvalid, vali) => (vali(arg) ? isValid : false),
//       true
//     );
//     if (!result) throw new Error();

//     return fun(arg);
//   };

// //꼼꼼하지 않다
// //집중하지 않는다.
// //하루 속도 느리다.
// //???
// //개발..

// //커링
// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2));

//커링
//인자를 여러개 받는 함수를 분리하여, 인자를 하나씩만 받는 함수의 체인으로 만드는 방법
//함수를 재사용하는데 유용하게 쓰일 수 있는 기법

//함수가 제대로 동작하려면 greeting과 name을 전달 받아야만 한다.
function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}

//->
//커링 함수로 수정
function greet(greeting) {
  return function (name) {
    console.log(greeting + ', ' + name);
  };
}

const hello = greet('hello');
hello('world');
hello('john');

//어떤 함수를 호출할 때 매개변수가 항상 비슷할 때 유용하게 사용할 수 있는 기법.
//매번 새로운 인자를 전달하지 않아도 바깥에 있는 함수가 인자를 전달하고, 샌로운 인자는 내부 함수가 받게된다.
//커링 함수에서는 인자의 순서가 매우 중요하다.
//다중인자를 받는 함수를 단일인자만 받는 함수열로 변경하는 것이 커링
const curry = (fun) => (arg) => fun(arg);

curry(parseInt)('11');
curry(parseInt)('11', 2);

function curring(num) {
  return function (add) {
    return num + add;
  };
}

const add = curring(5);
const result = add(5);

console.log(result);

//부분적인 인자의 목록을 받는다.
function add(x, y) {
  const old_x = x,
    old_y = y;
  if (typeof old_y === 'undefined') {
    //부분적인 적용
    return function (new_y) {
      return old_x + new_y;
    };
  }
  //전체 인자를 적용
  return x + y;
}

function greeting(name, age) {
  console.log(`${name} is ${age}`);
}

greeting('da', 25);
//-> 커링으로 변경
// currying을 통한 구현
function curGreeting(name) {
  return function (age) {
    console.log(`${name} is ${age}`);
  };
}

const da = curGreeting('da');
da(25);

//부분 적용 함수
//참고 사이트
//https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-curry-%EC%99%80-partial-application-a7f83472cf53

// Currying function
//하나의 인자를 받는 함수로 표현하며 그 함수는 다른 함수를 반환하고, 반환된 함수 역시 하나의 인자를 받는다는 규칙을 따른다.
const add = (x) => (y) => (z) => x + y + z;
// Partial Application function
//함수를 반환하는 함수이지만 함수가 받는 인자는 하나일 필요는 없다. 여러 개를 받을 수도 있다.
const add = (x) => (y, z) => x + y + z;

// 공통점: 커리와 파셜 애플리케이션 모두 원래 함수가 아닌 새로운 함수로 재탄생 되는 점에서 같다고 볼 수 있다.
//그리고 새롭게 반환되는 함수들이 받는 인자는 기존 함수가 받는 인자보다 최소한 1 개 이상 덜 받는 다는 점에서 같다.
//차이점: 커리는 모든 함수가 하나의 인자만을 받는 대신에, 파셜 애플리케이션은 여러 개를 받을 수도 있다.
