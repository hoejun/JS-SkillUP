//반복자 패턴
//기능의 세부적인 구현을 외부로 노출시키지 않고, 컨테이너의 요소에 차례대로 접근할 수 있는 방법
const Interator = (function () {
  const Interator = function () {
    return new Interator.fn.init(arguments);
  };

  Interator.fn = Interator.prototype = {
    init: function (arguments) {
      this.arguments = arguments;
      return this;
    },
    each: function (callback) {
      callback = typeof callback === "function" ? callback : function () {};

      for (const i = 0, length = this.arguments.length; i < length; i++) {
        const argument = this.arguments[i];
        callback.call(argument, i);
      }
    },
  };

  Interator.fn.init.prototype = Interator.prototype;

  return Interator;
})();

Interator(1, 2, 3).each(function (i) {
  console.log(this + "," + i);
});
