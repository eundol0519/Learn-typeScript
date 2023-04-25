interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 이제 .length 프로퍼티가 있는 것을 알기 때문에 더 이상 오류가 발생하지 않습니다.
  return arg;
}

loggingIdentity(3); // 오류, number는 .length 프로퍼티가 없습니다.
loggingIdentity({ length: 10, value: 3 });
