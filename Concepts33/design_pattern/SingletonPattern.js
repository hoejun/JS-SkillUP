//싱글톤 패턴
//한 클레스에서 인스터를 한 개만 생성하도록 제한한다.
//함수 클래스의 객체를 단'하나'만 생성하게 만드는 디자인 패턴
//동일한 함수클래스 호출 시 반환되는 두번째 객체부터는 이전에 생성된 객체를 반환하게 된다.
//특정 클래스의 객체를 한개만 유지하는 패턴
const Singleton = (function () {
  let that = null;

  const Singleton = function () {
    if (that) return that;

    that = this;

    return that;
  };

  return Singleton;
})();

function User() {
  return this;
}

const obj1 = Singleton();
const obj2 = Singleton();

console.log(obj1 === obj2);
console.log(new User() === new User());
