//Recursion
//함수가 자기 자신을 호출하는 순간
function factorial(x) {
  // 종료 조건 : 잘못된 값이 들어왔을때
  if (x < 0) return;

  // 기반 조건 : 성공
  if (x === 0) return 1;

  // 재귀
  return x * factorial(x - 1);
}
console.log(factorial(3));
