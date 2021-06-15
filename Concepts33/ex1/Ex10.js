//setTimeout, setInterval and requestAnimationFrame
//setTimeout, setInterval
//setTimeout 일정시간 후 함수실행
let timerId = setTimeout(() => console.log('Nothing happens...'), 1000); //1초 후 첫번째 인자를 실행한다.

let timerId = setInterval(() => console.log('tick'), 2000); //모든 인자들은 setTimeout과 동일하다. 2초 주기로 첫번째 인자를 실행한다.

setTimeout(() => {
  clearInterval(timerId); //멈추기 위해 clearInterval를 사용하고, setTimeout에 몇초뒤에 중지를 시킬것인지 정한다.
  console.log('stop');
}, 5000);

//requestAnimationFrame
!(function () {
  let start = new Date().getTime();
  let i = 1;
  let callback = function () {
    let ts = new Date().getTime();
    if (ts - 1000 > start) {
      // console.log('End');
    } else {
      console.log(i++, ts);
      requestAnimationFrame(callback);
    }
  };
  requestAnimationFrame(callback);
})();
