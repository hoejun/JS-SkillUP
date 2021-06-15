//Algorithms
//버블 정렬, 선택 정렬, 삽입 정렬, 빠른 정렬, 병합 정렬
//ES6를 사용한 검색 알고리즘
//순차 검색, 이진 검색, 텍스트 데이터 검색, 이진 검색 트리 검색

//버블 정렬 O(N^2)
const bubbleSort = function (array) {
  const length = array.length;
  let i, j, temp;

  for (i = 0; i < length - 1; i++) {
    //순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) {
      //끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]));

//선택 정렬 O(N^2)
const selectionSort = function (array) {
  const length = array.length;
  const minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    // 처음부터 훑으면서
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      // 최솟값의 위치를 찾음
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex]; // 최솟값을 저장
    array[minIndex] = array[i];
    array[i] = temp; // 최솟값을 제일 앞으로 보냄
  }
  return array;
};

selectionSort([5, 1, 4, 7, 2, 6, 8, 3]); // [1,2,3,4,5,6,7,8]
