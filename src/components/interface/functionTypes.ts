interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch1: SearchFunc;
mySearch1 = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

let mySearch3: SearchFunc;
mySearch3 = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

let mySearch4: SearchFunc;

// error: Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
// Type 'string' is not assignable to type 'boolean'.
mySearch4 = function (src, sub) {
  let result = src.search(sub);
  return "string";
};
