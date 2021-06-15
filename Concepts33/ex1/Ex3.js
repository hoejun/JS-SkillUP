//Value Types and Reference Types

//값 타입
function ValueType() {
  let a = 50;
  let b = a; //a의 값을 복사해서 b에 붙여넣는다.

  a = 10; //이후에 a의 값을 변경해도 b의 값은 변하지 않는다.

  console.log(b);
}

//참조 타입
function ReferenceType() {
  const food = ['first', 'second'];
  const apple = food;
  food.push('blue');

  console.log(apple);
}
ValueType();
ReferenceType();

let x = { cout: 100 };
let y = x;
x.count = 99;

console.log(y.count);
