// protected
// - protected 지정자도 protected로 선언된 멤버를 파생된 클래스 내에서 접근할 수 있다는 점만 제외하면 private 지정자와 매우 유사하게 동작합니다.

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 오류

// Person 외부에서 name을 사용할 수 없지만, Employee는 Person에서 파생되었기 때문에 Employee의 인스턴스 메서드 내에서는 여전히 사용할 수 있습니다.

// 생성자 또한 protected로 표시될 수도 있습니다.
// 이는 클래스를 포함하는 클래스 외부에서 인스턴스화 할 수 없지만 확장 할 수 있음을 의미합니다.
class Person2 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee는 Person을 확장할 수 있습니다.
class Employee2 extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard2 = new Employee2("Howard", "Sales");
let john2 = new Person2("John"); // 오류: 'Person'의 생성자는 protected 입니다.
