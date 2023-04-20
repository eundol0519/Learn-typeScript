// readOnly
// - 프로퍼티를 읽기 전용으로 만들 수 있습니다. 읽기 전용 프로퍼티들은 선언 또는 생성자에서 초기화해야 합니다.

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 오류! name은 읽기전용 입니다.
