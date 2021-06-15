//팩토리 패턴
//비슷한 객체를 공장에서 찍어내듯이 반복적으로 생성할 수 있게 하는 패턴
//사용자가 구체적인 클래스 정보를 모르고도 빌드를 통해 객체를 생성할 수 있도록 만드는 패턴
// function Person(name) {
//   this.name = name;
//   console.log(this.name);
//   this.introduce = function () {
//     return "My name is" + this.name;
//   };
// }

// var user1 = new Person("godori");
// var user2 = new Person("irodog");

// console.log(user1.introduce());
// console.log(user2.introduce());

// //연결형 상속
// const jsSkill = {
//   knowJS() {
//     return true;
//   },
// };

// const javaSkill = {
//   knowJava() {
//     return true;
//   },
// };

// const isWorking = {
//   isWorking() {
//     return true;
//   },
// };

// const frontendEngineer = Object.assign({}, jsSkill, isWorking);
// const backendEngineer = Object.assign({}, javaSkill, isWorking);
// const fullStackEngineer = Object.assign({}, jsSkill, javaSkill, isWorking);

////
const HumanBorn = function (obj) {
  let isWalking = false;

  return Object.assign({}, obj, {
    walk() {
      isWalking = true;
    },
    isWalking() {
      return isWalking;
    },
  });
};

const StarkIndustry = function (obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return isFlying;
    },
  });
};

const tony = HumanBorn();
console.log(tony);
const ironman = StarkIndustry(tony);
console.log(ironman);

const jarvis = StarkIndustry();
console.log(jarvis);
const vision = HumanBorn(jarvis);
console.log(vision);
