// ECMAScript 비공개 필드
// - TypeScript 3.8에서, TypeScript는 비공개 필드를 위한 JavaScript의 새로운 문법을 지원합니다:

class Animal {
  #name: string;

  constructor(theName: string) {
    console.log(this.#name);
    this.#name = theName;
  }
}

new Animal("Cat").#name; // 프로퍼티 '#name'은 비공개 식별자이기 때문에 'Animal' 클래스 외부에선 접근할 수 없습니다.
