//체이닝 패턴 디버깅 어려움
const Chain = new ((function () {
  const Chain = function () {
    this.name = '';
    this.age = 0;

    return this;
  };

  Chain.fn = Chain.prototype = {
    getName: function () {
      return this.name;
    },
    setName: function (name) {
      this.name = name;
      return this;
    },
    getAge: function () {
      return this.age;
    },
    setAge: function (age) {
      this.age = age;
      return this;
    },
  };

  return Chain;
})())();

console.log(Chain.setName('test').getName()); // test
console.log(Chain.setAge(10).getAge()); // 10
console.log(Chain.setName('test').setAge(10).getAge()); // 10
