// public
// - 멤버를 포함하는 클래스 외부에서 이 멤버에 접근하지 못하도록 멤버를 private로 표시할 수 있습니다.

class Animal2 {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal2("Cat").name; // 오류: 'name'은 비공개로 선언되어 있습니다;
