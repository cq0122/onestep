/* eslint-disable */
let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve("gt 0.5");
    } else {
      reject("lt 0.5");
    }
  }, 1000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve("gt 0.6");
    } else {
      reject("lt 0.5");
    }
  }, 1000);
});

Promise.all([p1, p2]).then(
  (v) => {
    console.log(1);
    console.log(v);
  },
  (v) => {
    console.log(2);
    console.log(v);
  }
);
