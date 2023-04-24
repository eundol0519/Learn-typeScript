// const 열거형 (const enums)

const enum Enum {
  A = 1,
  B = A * 2,
}

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

// 위 코드는 아래와 같이 컴파일 됩니다.
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
