// 실제로 문자열 리터럴 타입은 유니언 타입, 타입 가드 그리고 타입 별칭과 잘 결합됩니다.
// 이런 기능을 함께 사용하여 문자열로 enum과 비슷한 형태로 갖출 수 있습니다.

// @errors: 2345
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // 하지만 누군가가 타입을 무시하게 된다면
      // 이곳에 도달하게 될 수 있습니다.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // 허용된 세 개의 문자열이 아닌 다른 문자열을 사용하게 되면 오류가 발생합니다.

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... 추가적인 중복 정의들 ...
function createElement(tagName: string): Element {
  // ... 여기에 로직 추가 ...
}
