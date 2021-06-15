//Promises
//콜백: 다른 함수가 실행을 끝낸 뒤 실행되는 — call back 되는 함수를 말한다.
//콜백
function getData(callbackFunc) {
  $.get('url 주소/products/1', function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});

//프로미슈
function getData(callback) {
  // new Promise() 추가
  //new promise를 호출하면 대기(Pending) 상태가 됩니다.
  //new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject입니다.
  return new Promise(function (resolve, reject) {
    $.get('url 주소/products/1', function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response); //이행상태
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});

//Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
//Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
//Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
