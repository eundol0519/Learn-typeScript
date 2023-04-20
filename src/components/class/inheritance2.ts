class Animal {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// extends를 사용하여 Snake라는 하위 클래스를 생성함
class Snake extends Animal {
  // super : 파생된 클래스의 생성자 함수는 기초 클래스의 생성자를 실행할
  // + 생성자 내에서 this에 있는 프로퍼티에 접근하기 전에 super()를 먼저 호출해야 합니다. (타입스크립트의 중요한 규칙)
  constructor(name: string) {
    super(name);
  }

  // move를 오버라이드하여 각각 클래스의 특성에 맞게 기능을 가진 move를 생성합니다.
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

// extends를 사용하여 Horse라는 하위 클래스를 생성함
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
