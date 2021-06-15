//Expensive Operation and Big O Notation
//빅오표기법 알고리즘이 걸리는데 필요한 시간의 수하적인 표현.

//데이터가 증가해도 성능 변화 없음 O(1)
const dummyArray = [1, 2, 3, 4];
dummyArray.pop();

const dummyArray = [1, 2, 3, 4];
const getLast = (items) => items[items.length - 1];

getLast(dummyArray);

//입력 데이터에 비례해서 처리시간 증가, 데이터와 시간이 정비례하게 증감 O(N)
//N개의 요소에 대해 선형적으로 순회하는 메소드들이 이에 해당한다. 최악의 경우 N개를 다 순회 해야하는 것!

Array.prototype.indexOf = function (element) {
  for (let i = 0, count = this.length; i < count; i++) {
    if (this[x] === element) {
      return x;
    }
  }
  return -1;
};

//입력 데이터에 비례하여 처리시간 제곱배로 증가 O(N^2)
const buildMatrix = (n) => {
  const matirx = new Array(n);
  for (let i = 0; i < n; i++) {
    const cols = new Array(n);
    matrix[i] = cols;
    for (let j = 0; j < n; j++) {
      cols[j];
    }
  }
  return matrix;
};

//O(logN)
//이진탐색, 퀵정렬, 병합정렬
function FindItemBinarySearch(items, match) {
  const low = 0,
    high = items.length - 1;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    current = items[mid];

    if (current > match) {
      high = mid - 1;
    } else if (current < match) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// //데이터가 증가할수록 그래프가 수직 증가
// let n = [];
// let m = [];
// for (let i = 0; i < n.length; i++) {
//   for (var j = 0; j < m.length; j++) {
//     console.log(i + j);
//   }
// }

// //세제곱은 데이터에 비례하여 시간이 더 급하게 증가
// let n = [];
// for (let i = 0; i < n.length; i++) {
//   for (let j = 0; j < n.length; j++) {
//     for (let k = 0; k < n.length; k++) {
//       console.log(i + j + k);
//     }
//   }
// }

// //피보나치 수열: 재귀 함수로 트리의 구조를 스캔해야 하므로 n의 세제곱보다 높은 데이터 비례 시간을 보인다.
// function a(n) {
//   if (n <= 0) return 0;
//   else if (n === 1) return 1;
//   return a(n - 1) + a(n - 2);
// }

// //m의 n승 위 2의 n승 피보나치 수열 공식의 2를 m으로 바꾸면된다.
