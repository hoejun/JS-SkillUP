//Pure Functions, Side Effects and State Mutation
//순수 함수
//동일한 인자를 넣었을 때 항상 동일한 리턴값을 반환하고 외부에 영향을 받지 않는 함수를 말합니다.
function add(a, b) {
  return a + b;
}

const c = 7;
function add2(a, b) {
  return a + b + c; //c의 값에 따라 리턴값이 달라진다.
}

const c = 5;
function add3(a, b) {
  c = b;
  return a + b;
}

//사이드 이펙트
//부작용이라는 뜻인데, 우리가 함수를 호출 하는 이유는 인풋에 따른 결과값을 얻어내기 위해서 입니다.
//근데 함수가 함수 외부의 어떤것을 변경하게 되면 우리가 의도치 않은 동작을 하는 것입니다.
public Program getCurrentProgram(TVGuide guide, int channel) { 
  Schedule schedule = guide.getSchedule(channel); 
  Program current = schedule.programAt(new Date());//new Date 사이드 이펙트, 순수 함수로 바꿔야함.
  
  return current; 
}

public Program getProgramAt(TVGuide guide, int channel, Date when) {
  Schedule schedule = guide.getSchedule(channel); 
  Program program = schedule.programAt(when); 
  
  return program; 
}

//상태변이? 불변성? 상태관리
