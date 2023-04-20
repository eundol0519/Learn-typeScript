// 기본적으로 공개
// - 타입스크립트에서는 기본적으로 각 멤버는 public입니다.
// - 명시적으로 멤버를 public으로 표시할 수도 있습니다.

class Animal {
  public name: string;

  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
