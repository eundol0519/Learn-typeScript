// 런타임에서 열거형 (Enums at runtime)

// 열거형은 런타임에 존재하는 실제 객체입니다. 예를 들어 아래와 같은 열거형은
enum E {
  X,
  Y,
  Z,
}

// 실제로 아래와 같이 함수로 전달될 수 있습니다.
function f(obj: { X: number }) {
  return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다.
f(E);
