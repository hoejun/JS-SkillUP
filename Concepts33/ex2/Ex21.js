//Closures
//외부함수가 종료된 후에도 외부함수의 인자, 지역변수를 계속 사용할 수 있는 것
function outter() {
  const title = 'coding everybody';
  return function () {
    console.log(title);
  };
}
inner = outter();
inner();

const multiflyFunc = (a) => (b) => a * b;
const multifly3 = multiflyFunc(3); // b => 3 * b 와 같다. 받은 값에 3을 곱해주는 함수가 되었다.

console.log(multifly3(5)); // 15
