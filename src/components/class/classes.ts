class Greeter {
  // Greeter 클래스는 3개의 멤버를 가지고 있다.

  // 프로퍼티
  greeting: string;

  // 생성자
  constructor(message: string) {
    this.greeting = message;
  }

  // 메소드
  greet() {
    // this : 클래스 안에서 클래스의 멤버를 참조할 때 사용 (멤버에 접근하는 것을 의미)
    return "Hello, " + this.greeting;
  }
}

// new를 사용하여 Greeter 클래스의 인스턴스를 생성합니다.
// 이 코드는 이전에 정의한 생성자를 호출하여 Greeter 형태의 새로운 객체를 만들고 생성자를 실행하여 초기화합니다.
let greeter = new Greeter("world");
console.log(greeter); // 출력 : Hello, world
