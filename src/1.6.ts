
// normal function ts
function add(num1: number, num2: number){
    return num1 + num2;
}
console.log(add(20, 30));
// arrow function ts

// arrow function
const add2 = (num1: number, num2: number): number => num1 + num2;
const sum1 = add2(20,30);
console.log(sum1);

// object --> function --> method
const poorUser = {
    name: "Nayan",
    balance: 0,
    addBalance(balance:number): string{
        return `My new balance is ${this.balance + balance}`;
    }
}

const poorBalance = poorUser.addBalance(200);
console.log(poorBalance);

// callback function
const arr : number[] = [1,4,10];
const newArray : number[] = arr.map((elem: number):number => elem * elem);
console.log(newArray);
