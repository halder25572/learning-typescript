"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal function ts
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(20, 30));
// arrow function ts
// arrow function
const add2 = (num1, num2) => num1 + num2;
const sum1 = add2(20, 30);
// console.log(sum1);
// object --> function --> method
const poorUser = {
    name: "Nayan",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    }
};
const poorBalance = poorUser.addBalance(200);
console.log(poorBalance);
//# sourceMappingURL=1.6.js.map