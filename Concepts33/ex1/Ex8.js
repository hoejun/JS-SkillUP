//IIFE, Modules and Namespaces

//IIFE
//변수를 전역으로 선언하는것을 피하기 위해
(function () {
  console.log('add');
})();

(() => {
  console.log('arrow');
})();

//Modules
//다른 코드에서 쉽게 불러오고 사용할 수 있다. 대표 모듈 패턴
//-UMD
//-AMD
//-CommonJS
//-ES6 Module -System.register
//commonjs가 단순히 exports키워드를 사용하는 데 비해, nodejs모듈은 module.exports를  사용한다.

//CommonJS 포맷은 Node.js (서버사이드 자바스크립트) 의 표준
//내보내기의 경우 exports 및 module.exports,
//가져오기의 경우 require 를 사용한다.

//1-1. exports를 통한 내보내기
//func.js
function func1(param) {
  // ...
}

function func2(param) {
  // ...
}

exports.func1 = func1;
exports.func2 = func2;

//1-2. 가져오기
const obj = require('./func');

obj.func1(10);
obj.func2(20);

//2-1. module.exports를 통한 내보내기
// func.js
const obj = {
  func1: function (num) {
    // ...
  },

  func2: function (num) {
    // ...
  },
};

module.exports = obj;

//2-2. 가져오기
const obj = require('./func');
obj.func1(10);
obj.func2(20);

//Namespaces
//C++나 자바처럼 네임스페이스 기능을 위한 별도의 키워드나 개념을 제공하지 않는다.
//전역 객체를 하나 만들고(단 하나만 만드는 것이 이상적이다) 모든 기능을 이 객체에 추가하는 패턴을 네임스페이스 패턴이라고 합니다.
const globalObject = {};
globalObject.sayHello = function () {
  console.log('Hello!');
};
globalObject.sayBye = function () {
  console.log('Bye!');
};
globalObject.sayHello();
globalObject.sayBye();
