function printLabel(labeldObj: { label: string }) {
  console.log(labeldObj.label);
}

let myObj = {
  size: 10,
  label: "Size 10 Object",
};

printLabel(myObj);
