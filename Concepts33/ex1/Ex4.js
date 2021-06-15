//Implicit, Explicit, Nominal, Structuring and Duck Typing
//명시적 변환(Implicit)
function ExplictConversion() {
  let mix = 50;

  console.log(mix, typeof mix);

  //Object, Number, String 생성자 함수인데, new 연산자가 없을 경우 형변환에 사용된다.
  mix = Object(mix);
  console.log(mix, typeof mix);

  //String(), toString()
  mix = String(mix); //toString()은 진수를 지정할 수 있다.
  console.log(mix, typeof mix);
  console.log((10000).toString(8), typeof (10000).toString(8));

  //Boolean
  mix = Boolean(mix);
  console.log(mix, typeof mix);

  //Number() 숫자 데이터가 아닌 것은 Nan을 반환.
  console.log(Number('a'), typeof Number('a'));

  console.log(Number(true), typeof Number(true));
  console.log(Number(false), typeof Number(false));

  //parseInt()
  console.log(parseInt('3.14'), typeof parseInt('3.14'));
  console.log(parseFloat('3.14'), typeof parseFloat('3.14'));

  //toFixed()
  console.log((3.14).toFixed(1), typeof (3.14).toFixed);
}

//암시적 변환(Explicit)
function ImplicitConversion() {
  let num = 10;
  let str = '10';

  console.log(num + str, typeof (num + str));

  console.log(10 + 'abc', typeof (10 + 'abc'));
  console.log('abc' + false, typeof ('abc' + true));
  console.log('abc' + (() => {}), typeof ('abc' + (() => {})));

  //더하기 연산자를 제외한 연산자에서는 숫자의 수선순위가 문자보다 높다
  console.log(10 - 'abc', typeof (10 - 'abc')); // Nan
}

//명칭적 타이핑(Nominal Typing)

//구조적 타이핑(Structural Typing)

//덕 타이핑(Duck Typing)

// ExplictConversion();
ImplicitConversion();
