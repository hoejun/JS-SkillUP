//High Order Functions
//함수를 입력받아 함수를 반환하는 함수

//함수를 인자로 받아 대신 실행하는 함수
const test = (f) => f(1);
/**
 * 익명함수(f => f(1))를 test 변수에 할당했다.
 * 함수의 인자로 함수를 전달했다(f)
 * 이 함수는 함수를 인자로 받아 1을 인자로 전달하는 함수다.
 */

const apply3 = (f) => f(3); // 함수를 인자로 받아 3을 할당하는 함수
const multiply2 = (a) => a * 2; // 값을 받아 2를 곱해주는 함수

console.log(apply3(multiply2)); // 6 이 된다.
// console.log(apply3(a => a*2))와 동일한 의미

//함수를 인자로 받아 대신 실행하는 함수
function callWith10(val, func) {
  return func(10, val);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

callWith10(20, add);
callWith10(5, sub);

//함수를 리턴하는 함수
function constant(val) {
  return function () {
    return val;
  };
}

const always10 = constant(10);
always10();
always10();
always10();

//함수를 인자로 받아서 또 다른 함수를 리턴하는 함수
function callWith(val1) {
  return function (val2, func) {
    return func(val1, val2);
  };
}

const callWith10 = callWith(10);
callWith10(20, add);

const callWith5 = callWith(5);
callWith5(5, sub);
