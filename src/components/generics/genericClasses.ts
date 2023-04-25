class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 제네릭 클래스와 제네릭 인터페이스는 형태가 비슷합니다.
// 제네릭 클래스는 클래스 이름 뒤에 꺾쇠괄호(<>) 안쪽에 제네릭 타입 매개변수 목록을 가집니다.

// 이것은 GenericNumber 클래스의 문자 그대로 사용하지만 number 타입만 쓰도록 제한하는 것은 없습니다.
// 대신 string이나 훨씬 복잡한 객체를 사용할 수 있습니다.
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// 정적 측면과 인스턴스 측면.
// 제네릭 클래스는 정적 측면이 아닌 인스턴스 측면에서만 제네릭이므로 클래스로 작업할 때 정적 멤버는 클래스의 타입 매개변수를 쓸 수 없습니다.
