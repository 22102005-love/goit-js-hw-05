"use script";
const Account = function (object) {
  this.object = object;
};

Account.prototype.getInfo = function () {
  console.log(this.object);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
