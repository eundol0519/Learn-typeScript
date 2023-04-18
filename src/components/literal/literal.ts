// const를 사용하여 변수 helloWorld가
// 절대 변경되지 않음을 보장합니다.

// 따라서, TypeScript는 문자열이 아닌 "Hello World"로 타입을 정합니다.
const helloWorld = "Hello World";

// 반면, let은 변경될 수 있으므로 컴파일러는 문자열이라고 선언할 것입니다.
let hiWorld = "Hi World";

// 무한한 수의 잠재적 케이스들(문자열 같은 경우의 수가 무한대)을 유한한 수의 잠재적 케이스로 줄여나가는 것을 타입 좁히기라고 합니다.
