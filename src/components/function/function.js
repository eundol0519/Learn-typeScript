// 기명 함수
function add(x, y) {
  return x + y;
}

// 익명 함수
let myAdd = function (x, y) {
  return x + y;
};

// 변수 캡처
let z = 100;

function addToZ(x, y) {
  return x + y + z;
}
