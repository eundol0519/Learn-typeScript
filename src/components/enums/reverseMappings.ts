// 역 매핑 (Reverse mappings)
// 숫자 열거형 멤버는 멤버의 프로퍼티 이름을 가진 객체를 생성하는 것 외에도 열거형 값에서 열거형 이름으로 역 매핑 을 받습니다.

enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
