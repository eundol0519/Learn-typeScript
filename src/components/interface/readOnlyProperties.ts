interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 오류!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!
a = ro; // 오류!

a = ro as number[];
