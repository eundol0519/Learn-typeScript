// myAdd는 전체 함수 타입을 가집니다
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// 매개변수 x 와 y는 number 타입을 가집니다
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
