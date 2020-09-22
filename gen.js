/* eslint-disable */
function* gen() {
  yield "first";
  yield "second";
  yield "third";
}

let result = gen();
console.log(result);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

console.log("-----------------");
console.log(gen().next());
console.log(gen().next());
console.log(gen().next());
console.log(gen().next());

console.log("-----------------");
for (let value of gen()) {
  console.log(value);
}

console.log("-----------------");
function* sayFullName() {
  var firstName = yield;
  var secondName = yield;
  console.log(firstName, secondName);
}

let fullName = sayFullName();

fullName.next();
fullName.next("Rich");
fullName.next("Cheng");
fullName.next();
