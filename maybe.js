/* eslint-disable */
const MayBe = function (value) {
  this.value = value;
};

MayBe.of = function (value) {
  return new MayBe(value);
};

MayBe.prototype.map = function (fn) {
  return this.value === null || this.value === undefined
    ? MayBe.of(null)
    : MayBe.of(fn(this.value));
};

console.log(
  MayBe.of(2)
    .map((i) => i * i)
    .map((i) => i + 5)
);

// 后端返回的 response
let response = {
  data: {
    createTime: "2020-09-11 13:49:00",
    id: "1ecdc5f3-4eb0-447b-a0bf-79274e23a8d1",
    parentId: "",
    permission: {
      createTime: "2019-11-13 14:52:15",
      id: "6593ab35-c499-4943-8e55-4250afc606bd",
      menuFlag: 1,
      menuSort: 1573627934522,
      permissionDesc: "计算管理",
      permissionKey: "project",
      permissionType: 1,
      systemKey: "RT",
      updateTime: "2020-08-05 19:05:47"
    },
    roleClass: 2,
    roleType: 2,
    status: 1,
    systemKey: "RT",
    updateTime: "2020-09-15 16:50:34"
  },
  message: "success",
  status: "0"
};

// 取permission的id
let permissionId;

// 2B青年
permissionId = response.data.permission.id;
console.log("\n2B青年 ===>", permissionId);

// 动点脑子
if (
  response &&
  response.data &&
  response.data.permission &&
  response.data.permission.id
) {
  permissionId = response.data.permission.id;
}

console.log("\n动点脑子 ===>", permissionId);

// 函数式编程
permissionId = MayBe.of(response)
  .map((item) => item.data)
  .map((item) => item.permission)
  .map((item) => item.id).value;

console.log("\n函数式编程 ===>", permissionId);

// 是否可以抽象？ map中方法是一样的
let _attr = (item, key) => item[key];

permissionId = MayBe.of(response)
  .map((item) => _attr(item, "data"))
  .map((item) => _attr(item, "permission"))
  .map((item) => _attr(item, "id")).value;

console.log("\n抽象===>", permissionId);

// 感觉写法更麻烦了，哪里不对了？？ 二次抽象，使用闭包
let _attr2 = (key) => (item) => item[key];

permissionId = MayBe.of(response)
  .map(_attr2("data"))
  .map(_attr2("permission"))
  .map(_attr2("id")).value;

console.log("\n二次抽象 ===>", permissionId);

// 是不是有点小成绩感，晚上可以加鸡腿了
let attr = (attribute = (obj, ...keys) => {
  if (obj !== null && typeof obj === "object" && keys.length > 0) {
    let result = MayBe.of(obj);
    keys.forEach((key) => {
      result = result.map((item) => item[key]);
    });
    return result.value;
  }
  return obj;
});

console.log("\n加鸡腿 ===>", attr(response, "data", "permission", "id"));
