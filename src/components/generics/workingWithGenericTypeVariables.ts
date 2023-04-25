// 제너릭 타입 변수 작업 (Working with Generic TypeVariables)
function identity<T>(arg: T): T {
  return arg;
}

// 함수 호출 시마다 인수 arg의 길이를 로그에 찍으려면 어떻게 해야 합니까? 아마 이것을 쓰고 싶을 겁니다:
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // 오류: T에는 .length 가 없습니다.
  return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}

function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}
