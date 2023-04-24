// 유니언 열거형과 열거형 멤버 타입 (Union enums and enum member types)

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square, // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
  radius: 100,
};

enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
    //             ~~~~~~~~~~~
    // 에러! E 타입은 Foo, Bar 둘 중 하나이기 때문에 이 조건은 항상 true를 반환합니다.
  }
}
// 이 예제에서 우리는 x 가 E.Foo 가 아닌지 확인합니다.
// 만약 이 조건이 true 라면, || 조건은 더는 체크할 필요가 없으므로 if 아래의 body가 실행될 것입니다.
// 그러나 만약 이 조건이 통과되지 않는다면, x 는 반드시 E.Foo 이기 때문에, x가 E.Bar 가 아닌지 묻는 조건과 비교하는 것은 적절하지 않습니다.
