// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(isDone);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// String
let color: string = "blue";
color = "red";

let fullName: string = "SaeBom Oh";
let age: number = 8;
let sentence1: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month`;
let sentence2: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
// sentence1과 sentence2는 동일하게 출력됨

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
// - 튜플 타입으로 선언
let x: [string, number];
// - 초기화
x = ["hello", 10]; // 성공
// - 잘못된 초기화
x = [10, "hello"]; // 오류

console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류 : 'number' 형식에 'substring' 속성이 없습니다.

x[3] = "world"; // '"world"' 형식은 'undefined' 형식에 할당할 수 없습니다.
console.log(x[5].toString()); // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.

enum Color1 {
  Red,
  Green,
  Blue,
}
let c1: Color1 = Color1.Green;

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c3: Color3 = Color3.Green;

enum Color4 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color4[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.

// Any
let notSure1: any = 4;
notSure1 = "maybe a string instead";
notSure1 = false;

let notSure2: any = 4;
notSure2.ifItExists(); // 성공, ifItExists 는 런타임엔 존재할 것입니다.
notSure2.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)

let prettySure: Object = 4;
prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.

let list: any[] = [1, true, "free"];

list[1] = 100;

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

// Undefined/Null
// - 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
let u: undefined = undefined;
let n: null = null;

// Never
// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

// - 반환 타입이 never로 추론된다.
function fail() {
  return error("Something failed");
}

// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
