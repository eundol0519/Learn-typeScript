class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

// 클래스는 기초 클래스부터 프로퍼티와 메서드를 상속받습니다.
// Dog는 extend 키워드를 사용하여 Animal이라는 기초 클래스부터 파생된 파생 클래스입니다.
// 파생된 클래스는 하위 클래스, 기초 클래스는 상위 클래스라고 불리기도 합니다.

// Dog는 Animal의 기능을 확장하기 때문에, bark()와 move()를 모두 가진 Dog 인스턴스를 생성할 수 있습니다.
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
