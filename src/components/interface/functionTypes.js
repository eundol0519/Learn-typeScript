var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch1;
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch4;
// error: Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
// Type 'string' is not assignable to type 'boolean'.
mySearch4 = function (src, sub) {
    var result = src.search(sub);
    return "string";
};
