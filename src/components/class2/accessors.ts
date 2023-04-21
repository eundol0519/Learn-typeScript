const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}

// get과 set이 없는 접근자는 자동으로 readonly로 유추됩니다.
// 이는 프로퍼티 내의 사용자들이 변경할 수 없음을 알 수 있기 때문에 코드 내에서 .d.ts 파일을 생성할 때 유용합니다.
