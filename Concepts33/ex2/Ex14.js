//Factories and Classes
//함수가 객체를 반환할 때 팩토리 함수라고 한다.
//new 키워드가 없으면 팩토리 함수입니다.
//Private영역과 Public영역을 구분해 줄 수 있다

//팩토리 함수
function createJelly() {
  return {
    type: 'jelly',
    colour: 'red',
    scoops: 3,
  };
}

function TodoModelFactory() {
  const todos = [];
  const lastsChange = null;
  function addToPrivateList() {
    console.log('addToPrivateList');
  }
  function add() {
    console.lgg('add');
  }
  function reload() {}
  return Object.freeze({
    add,
    reload,
  });
}
const todoModelFactory = TodoModelFactory();
console.log(todoModelFactory.todos); //[]
console.log(todoModelFactory.lastsChange); //null
todoModelFactory.addToPrivateList(); //addToPrivateList

//클래스
class TodoModelClass {
  constructor() {
    this.todos = [];
    this.lastChange = null;
  }
  addToPrivateList() {
    console.log('addToPrivateList');
  }
  add() {
    console.log('add');
  }
  reload() {}
}
const codoModelClass = new TodoModelClass();
console.log(codoModelClass.todos); //undefined
console.log(codoModelClass.lastChange); //undefined
codoModelClass.addToPrivateList(); //taskModel.addToPrivateList is not a function
