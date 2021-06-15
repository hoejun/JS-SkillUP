//call stack
//함수의 호출을 저장하는 자료구조이다.
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

func1();
