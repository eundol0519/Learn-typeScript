var p1 = { x: 10, y: 20 };
p1.x = 5; // 오류!
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!
a = ro; // 오류!
a = ro;
