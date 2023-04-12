// 클래스(Class)
// + 생성자(constructor)에 public을 사용하는 것은 그 인수의 이름으로 프로퍼티를 자동으로 생성하는 축약형입니다.
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 인터페이스(interface) : firstName 및 laseName 필드를 갖고 있는 객체
interface Person {
  firstName: string;
  lastName: string;
}

// typeScript의 타입 표시 : 함수나 변수의 의도된 계약을 기록하는 간단한 방법
// + 내부 구조가 호환되는 두 타입은 서로 호환됩니다. 그래서 명시적인 implements(구현하다)절 없이,
//   인터페이스가 요구하는 형태를 사용하는 것만으로도 인터페이스를 구현할 수 있습니다.
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
