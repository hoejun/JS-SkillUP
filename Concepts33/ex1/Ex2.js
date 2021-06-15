//Primitive Types
//원시 타입
//함수, 배열, 객체를 제외한 타입
//원시타입은 불변적이다.
//원시타입은 값으로 저장되고, 객체들은 참조로 저장된다.
function PrimitiveType() {
  //number
  let number = 23.2323;
  console.log(number.toFixed(2));
  console.log('원시 타입' + number);

  //string
  let name = '대문자 변환 school';
  console.log(name.toUpperCase());
  console.log('원시 타입' + name);

  //boolean
  let bol = 'false';
  console.log(bol.toString());
  console.log('원시타입' + bol);

  //undefined
  let a;
  console.log(a); //아직 값을 할당하지 않음.

  //null
  let b = null;
  console.log(b); //빈 값을 할당한 상태

  //symbol
  const s1 = Symbol('test');
  const s2 = Symbol('tset');
  console.log(s1 === s2);

  //같은 심볼을 사용할 때
  const mac = Symbol();
  const book = mac;
  console.log(mac === book);

  const mac1 = Symbol.for('mySym'); //레지스트리에 이미 심볼이 있으면 해당 심볼을 반환하고, 없으면 새로 생성하여 반환
  const mac2 = Symbol.for('mySym');
  console.log(Symbol.keyFor(mac1)); //전역 심볼 레지스트리에 저장된 심볼 값 키를 가져옴.
  console.log(mac1 === mac2);
}

//참조타입(래퍼 객체)
function ObjectType() {
  //Object
  let object = { x: 1 };
  object.x = 2;
  object.y = 3;

  console.log(object); //변환된 값 출력

  //Array
  let arr = [1, 2, 3];
  arr[0] = 0;
  arr[3] = 4;

  console.log(arr);

  arr.reverse();

  console.log(arr); //변환된 값 출력
}

PrimitiveType();
ObjectType();
