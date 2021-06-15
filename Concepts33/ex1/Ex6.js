//Function Scope, Block Scope, Lexical Scope

//함수 스코프
function functionScopeTest() {
  if (true) {
    let x = '블록';
    const y = '블록';
    console.log(x);
    console.log(y);
  }

  for (var i = 0; i < 2; i++) {
    let variable2 = 'I am in a block';
    const variable3 = 'I am in a block';
    console.log(variable2);
    console.log(variable3);
  }
}

//블록 스코프
function BlockScopeTest() {
  if (true) {
    let x = '';
    const y = '';
    console.log(x);
    console.log(y);
  }
  for (var i = 0; i < 2; i++) {
    let variable2 = 'I am in a block';
    const variable3 = 'I am in a block';
    console.log(variable2);
    console.log(variable3);
  }
}
functionScopeTest();
BlockScopeTest();

//렉시컬 스코프
//함수가 선언이 되는 위치에 따라 상위 스코프가 결정된다.
let x = 'global';

function foo() {
  let x = 'local';
  bar();
}
function bar() {
  console.log(x);
}
foo(); //global
bar(); //global
