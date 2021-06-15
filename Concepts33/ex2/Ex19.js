//map, reduce, filter

//map 새배열로 리턴한다.
const myArray = [1, 2, 3, 4];
const myArrayTimesTwo = myArray.map((values, index, array) => {
  return values * 2;
});

console.log(myArrayTimesTwo);

//filter 조건에 만족하지 못하는 원소들을 걸러낸다.
const myEvenArray = myArray.filter((value, index, array) => {
  return value % 2 === 0;
});

console.log(myEvenArray);

//reduce 하나의 결과값을 출력. 함수에서 계속 누적하여 계산된 값을 반환
const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sumArr.reduce(function (prev, curr) {
  return prev + curr;
});

console.log(result);
