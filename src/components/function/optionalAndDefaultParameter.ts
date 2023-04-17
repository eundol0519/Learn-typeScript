function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // 오류, 너무 적은 매개변수
let result2 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams"); // 정확함

function buildName2(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result4 = buildName2("Bob"); // 지금은 바르게 동작
let result5 = buildName2("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result6 = buildName2("Bob", "Adams"); // 정확함

function buildName3(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result7 = buildName("Bob"); // 올바르게 동작, "Bob Smith" 반환
let result8 = buildName("Bob", undefined); // 여전히 동작, 역시 "Bob Smith" 반환
let result9 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result10 = buildName("Bob", "Adams"); // 정확함
