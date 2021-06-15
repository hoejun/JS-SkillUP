//Collections and generators(컬렉션과 제너레이터)
//컬렉션 map, set
let max = new Map();

// set으로 맵 객체에 삽입
max.set('id', 0);
max.set('이름', '마이클');
max.set('전공', '영문학');
max.set('나이', 25);
console.log(max);

// 이차원 배열로 넘겨주는 것도 가능합니다
let michael = new Map([
  ['id', 0],
  ['이름', '마이클'],
  ['전공', '영문학'],
  ['나이', 29],
]);
console.log(michael);

// get으로 맵 객체 조회
console.log(max.get('이름')); // "마이클"

// delete로 삭제
max.delete('나이'); // 삭제가 성공하면 true를 반환
console.log(max);

// clear로 맵 안의 프로퍼티 전부삭제
max.clear();
console.log(max);

// 객체 : let으로 선언해 빈 객체 할당해서 빈 객체로 초기화
// maxInfoObj = {};

// // 맵 객체 : clear 메소드 사용해 빈 맵 객체로 초기화
// maxInfoMap.clear();

//맵 객체는 객체의 프로퍼티를 자주 변경해야할 때 빛을 발합니다.
//메소드 이름들이 예측 가능하여 동작이 명확하고, 기존 객체와 달리 순회도 쉽게 이루어져 데이터를 조작하기 적합한 것 같습니다.
//Object의 키는 Strings이며, Map의 키는 모든 값을 가질 수 있다.

//제너레이터
//이터레이터를 발생시키는 함수로 사용
//iterable : 반복 가능한 / iterator : 반복자
//iterable은 iterator를 리턴하는 [Symbol.iterator]() 를 가진 값,
//iterator는 {value, done} 객체를 리턴하는 next() 를 가진 값입니다.

function* generateSequence() {
  //이터러블을 생성하는 함수
  //제너레이터 함수를 호출하면 코드가 실행되지 않고, 대신 실행을 처리하는 제너레이터 객체가 반환
  //제너레이터 함수 내부에 yield 키워드를 사용해서 이터러블의 요소를 표현식으로 나타낼 수 있습니다.
  //하나 이상의 yield 문을 포함한다.
  yield 1;
  yield 2;
  return 3;
}

// '제너레이터 함수'는 '제너레이터 객체'를 생성합니다.
let generator = generateSequence();
// let one = generator.next();
// let two = generator.next();
// console.log(two);
