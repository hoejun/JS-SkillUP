//async,await
//async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법
//콜백 함수와 프로미스 보완
const user = fetchUser('domain.com/users/1');
if (user.id === 1) {
  console.log(user.name);
}

//위와 동일
function logName() {
  const user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}

function logName() {
  //일반적으로 자바스크립트의 비동기 처리 코드는 아래와 같이 콜백을 사용해야지 코드의 실행 순서를 보장받을 수 있음
  const user = fetchUser('domain.com/users/1', function (user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}

//async function 함수명() {
//  await 비동기_처리_메서드_명();
//}
async function logName() {
  const user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}

//async 프로미스 비교
function fetchItems() {
  return new Promise(function (resolve, reject) {
    const items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  const resultItems = await fetchItems();
  //await를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 .then()등을 사용해야 했을 겁니다.
  //하지만 async await 문법 덕택에 비동기에 대한 사고를 하지 않아도 되는 것이죠.
  console.log(resultItems); // [1,2,3]
}
