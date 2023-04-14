interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 오류: 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될 것입니다!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number; // 성공, length는 숫자입니다
  name: string; // 오류, `name`의 타입은 인덱서의 하위타입이 아닙니다
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // 성공, length는 숫자입니다
  name: string; // 성공, name은 문자열입니다
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // 오류!
