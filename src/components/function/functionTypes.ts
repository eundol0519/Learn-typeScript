// 기명 함수
function add(x: number, y: number): number {
  return x + y;
}

// 익명 함수
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// 함수 타입 작성하기
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
