//this, call, apply and bind
//여기서 this는 전역객체이다. this는 사용에 따라 바뀐다.
//this를 상황에 따라 알맞은 객체로 바꿔서 this값에 따라 인사말을 할 것이다.
//이것이 바인딩이다.
//명시적으로 this를 window가 아닌 다른 객체로 바꿔주는 함수가 call, apply, bind이다.
const ExSay = function () {
  console.log(this); // 여기서 this는 뭘까?
  console.log('Hello, my name is ' + this.name);
};

ExSay();

//call, apply
const obj = { name: 'Tom' };
const say = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};

say('seoul');
say.call(obj, 'seoul'); //첫번째 인자에 this로 만들고 싶은 객체를 넘겨준다. -> this를 objf로 변경
say.apply(obj, ['seoul']); //첫번째 인자에 this로 만들고 싶은 객체를 넘겨준다. -> this를 objf로 변경

//bind
//call, apply는 다르게 함수를 실행하지 않는다.
const objBind = { name: 'Tom' };
const sayBind = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};

const boundSay = say.bind(objBind);
boundSay('seoul');
