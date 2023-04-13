// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(isDone);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// String
var color = "blue";
color = "red";
var fullName = "SaeBom Oh";
var age = 8;
var sentence1 = "Hello, my name is ".concat(fullName, ".\nI'll be ").concat(age + 1, " years old next month");
var sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
// sentence1과 sentence2는 동일하게 출력됨
// Array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
// - 튜플 타입으로 선언
var x;
// - 초기화
x = ["hello", 10]; // 성공
// - 잘못된 초기화
x = [10, "hello"]; // 오류
console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류 : 'number' 형식에 'substring' 속성이 없습니다.
x[3] = "world"; // '"world"' 형식은 'undefined' 형식에 할당할 수 없습니다.
console.log(x[5].toString()); // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
var colorName = Color4[2];
console.log(colorName); // 값이 2인 'Green'이 출력됩니다.
// Any
var notSure1 = 4;
notSure1 = "maybe a string instead";
notSure1 = false;
var notSure2 = 4;
notSure2.ifItExists(); // 성공, ifItExists 는 런타임엔 존재할 것입니다.
notSure2.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)
var prettySure = 4;
prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
var list = [1, true, "free"];
list[1] = 100;
// Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
// Undefined/Null
// - 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
var u = undefined;
var n = null;
// Never
// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message) {
    throw new Error(message);
}
// - 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}
// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 }); // 성공
create(null); // 성공
create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
