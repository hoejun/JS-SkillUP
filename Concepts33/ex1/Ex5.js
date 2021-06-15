//==, ===, typeof
//===는 변수 유형을 고려, ==는 변수 값을 기반으로 비교. (엄격한 비교를 하기 위해서는 ===를 권장한다.)
function EqualityTypeof() {
  console.log(typeof 42);
  // expected output: "number"

  console.log(typeof 'blubber');
  // expected output: "string"

  console.log(typeof true);
  // expected output: "boolean"

  console.log(typeof undeclaredVariable);
  // expected output: "undefined"
}

//typeof : 피연산자의 데이터 타입을 반환하는 연산자
EqualityTypeof();
