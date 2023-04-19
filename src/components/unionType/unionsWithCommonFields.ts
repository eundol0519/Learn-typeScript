// @errors: 2339

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// 두 개의 잠재적인 타입 중 하나에서만 사용할 수 있습니다.
pet.swim();
pet.fly();

/*
  만약 값이 A | B 타입을 갖고 있으면 확신할 수 있는 것은 그 값이 A와 B 둘다 가지고 있는 멤버들만 갖고 있다는 것입니다.
  위 예제에서 Bird는 fly라는 멤버를 갖고 있습니다. Bild | Fish로 타입을 지정한 변수가 fly 메서드를 갖고 있는 지 확신할 수 없습니다.
  만약 변수가 실제로 런타임에 Fish이면 pet.fly를 호출하는 것은 오류입니다.
*/
