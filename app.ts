console.log("It works!");



function sayHello(): void {
  console.log("Hello!");
}

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 5));

let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;

console.log(myMultiply(5, 2));

let userData: {name: string, age: number } = {
  name: 'Joe',
  age: 27
};

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2:  Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

let myRealAge: number | string = 27;
myRealAge = "27";

let finalValue = 30;
if (typeof finalValue == "number") {
  console.log("Final value is a number")
}

function neverReturns():never {
    throw new Error('An error!');
}

let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
