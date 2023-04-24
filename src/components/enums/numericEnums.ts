// 숫자 열거형 (Numeric enums)

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 위 코드에서 Up이 1로 초기화된 숫자 열거형을 선언했습니다.
// 그 지점부터 뒤따르는 멤버들은 자동으로 증가된 값을 갖습니다.
// 즉, Direction.Up은 1, Down은 2, Left는 3, Right는 4를 값으로 가집니다.

// 원한다면, 전부 초기화 하지 않을 수도 있습니다.
enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}
// 위 경우 Up 값은 0, Down 은 1 이 됩니다.
// 자동으로 증가하는 기능은 멤버 값 자체에는 신경 쓰지 않지만, 각 값이 같은 열거형의 다른 값과 구별돼야 하는 경우에 유용합니다.

// 열거형을 사용하는 것은 간단합니다
// 그냥 열거형 자체에서 프로퍼티로 모든 멤버에 접근하며, 열거형의 이름을 사용해 타입을 선언합니다.
enum Response3 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response3): void {
  // ...
}

respond("Princess Caroline", Response3.Yes);

// 숫자 열거형은 간단히 말해,
// 초기화되지 않은 열거형이 먼저 나오거나, 숫자 상수 혹은 다른 상수 열거형 멤버와 함께 초기화된 숫자 열거형 이후에 와야 합니다.
// 즉 아래 방식은 허용되지 않습니다:
const getSomeValue = () => {
  return 1;
};

enum E {
  A = getSomeValue(),
  B, // 오류! 앞에 나온 A가 계산된 멤버이므로 초기화가 필요합니다.
}
