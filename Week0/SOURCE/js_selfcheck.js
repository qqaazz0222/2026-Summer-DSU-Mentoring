/*
Week 0 자가진단 - JavaScript 맛보기

JS 처음 보는 사람 기준으로 주석 자세히 씀. Python 아는 거 기준으로 비교.
TODO 채우고 터미널에서 `node js_selfcheck.js` 실행.
"모두 통과!" 뜨면 완료. (JS 자체는 Week3부터 본격적으로 다룸 - 여긴 미리 감 잡기용)
*/

// ---------------------------------------------
// 변수 선언 비교
// Python:  a = 10
// JS    :  let a = 10;   ← 앞에 let/const 붙이고, 문장 끝에 세미콜론(;) 붙이는 습관 들이기
//   let   : 나중에 값 바뀔 수 있는 변수
//   const : 한 번 정하면 안 바뀌는 값 (상수). 최대한 const 먼저 쓰고, 필요할 때만 let
//   var   : 옛날 방식, 지금은 거의 안 씀 (몰라도 됨)
// ---------------------------------------------


// 1) 함수 - Python: def add(a, b): return a + b
function add(a, b) {
  // TODO: a와 b를 더해서 반환 (return a + b;)
}


// 2) 짝수 판별 - JS 비교 연산자
// Python: n % 2 == 0
// JS    : n % 2 === 0   ← JS는 === (엄격한 비교, 타입까지 확인) 씀. == 는 타입 안 맞아도 봐줘서 버그 원인 잘 됨 → === 만 쓰기
function isEven(n) {
  // TODO: n이 짝수면 true, 홀수면 false 반환
  // JS의 참/거짓은 소문자 true/false (Python은 True/False, 대문자였음 주의)
}


// 3) 문자열 조합 - 템플릿 리터럴
// Python: f"안녕하세요, {name}님!"
// JS    : `안녕하세요, ${name}님!`   ← 백틱(`)으로 감싸고, 변수는 ${ } 안에 넣음
function makeGreeting(name) {
  // TODO: `안녕하세요, ${name}님!` 형태 문자열 반환
}


// 4) 배열(리스트) 순회 - Python의 list가 JS에선 array
// Python: for x in numbers: total += x
// JS    : for (let i = 0; i < numbers.length; i++) { total += numbers[i]; }
//   - numbers.length  : Python의 len(numbers)에 해당
//   - for(초기값; 조건; 증가)  형태. 세 부분 다 세미콜론(;)으로 구분
function sumList(numbers) {
  let total = 0;
  // TODO: for문으로 numbers 배열 순회하며 total에 더하기, 마지막에 total 반환
  return total;
}


// 5) 문자열 나누기 - Python의 str.split()과 거의 동일
// Python: len(text.split(" "))
// JS    : text.split(" ").length
function countWords(text) {
  // TODO: 공백 기준으로 나눈 단어 개수 반환
}


// 6) 조건문 - Python의 elif가 JS에선 else if (띄어쓰기 있음)
function studentGrade(score) {
  // TODO: 90이상 "A", 80이상 "B", 70이상 "C", 그 외 "F" 반환
  // if (score >= 90) {
  //   return "A";
  // } else if (score >= 80) {
  //   ...
  // } else {
  //   ...
  // }
}


// 7) 클래스 - Python의 self가 JS에선 this
// Python:
//   class Counter:
//       def __init__(self):
//           self.count = 0
//       def increment(self):
//           self.count += 1
// JS:
class Counter {
  constructor() {
    // TODO: this.count 를 0으로 초기화
    // constructor() 는 Python의 __init__(self) 와 같은 역할 (객체 만들 때 자동 실행)
  }

  increment() {
    // TODO: 호출될 때마다 this.count 1 증가
  }
}


// ---------------------------------------------
// 테스트 실행부 - 여기는 안 고쳐도 됨
// require("assert") : Python의 import assert 같은 느낌, 내장 모듈 불러오기
// assert.strictEqual(실제값, 기대값) : 둘이 다르면 에러 던지고 멈춤 (Python의 assert 실제==기대 와 같은 개념)
// ---------------------------------------------
const assert = require("assert");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(isEven(4), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(makeGreeting("철수"), "안녕하세요, 철수님!");
assert.strictEqual(sumList([1, 2, 3, 4]), 10);
assert.strictEqual(countWords("hello world foo"), 3);
assert.strictEqual(studentGrade(95), "A");
assert.strictEqual(studentGrade(82), "B");
assert.strictEqual(studentGrade(71), "C");
assert.strictEqual(studentGrade(50), "F");

const c = new Counter(); // Python의 c = Counter() 와 같음
assert.strictEqual(c.count, 0);
c.increment();
c.increment();
assert.strictEqual(c.count, 2);

// console.log() : Python의 print() 와 같음
console.log("모두 통과! JS 감 잡기 완료.");
