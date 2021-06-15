//Data Structures
//스택 LIFO, push, pop
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1];
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//큐 FIFO, unshift, pop
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log('연결리스트');
//연결 리스트
function Node(val) {
  this.val = val;
  this.next = null;
}

let head = new Node(0); //0
let node1 = new Node(1); //1
let node2 = new Node(2); //2

head.next = node1; //1
node1.next = node2; //2

//트리
function NodeTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let root = new NodeTree(5);
let left = new NodeTree(3);
let right = new NodeTree(8);
root.left = left;
root.right = right;

//그래프 트리가 둘 이상의 부모를 자유롭게 가질 수 있는 경우
