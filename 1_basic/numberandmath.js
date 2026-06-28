const score = 400

const balance = new Number (250)
console.log(balance);
// output :- [Number: 250]

console.log(balance.toString().length);
// output = 3 this bracket() is imp. aftet toString

console.log(balance.toString().indexOf(2))
//  output = 0 as in string it starts count from 0

const marks = 97.8967
console.log(marks.toFixed(1));
// output = 97.9 it roundfigured 
// toFixed() cares about the number of digits after the decimal point.


const anotherMarks = 90.7856456
console.log(anotherMarks.toPrecision(4));
// output = 90.79 gives first 3 no. same and then round figure and give no. 4 

// ******************* Maths **************

console.log(Math.min(20,30,40,21,2,11));
// output = 2

console.log(Math.max(20,30,40,21,2,11));
//  output = 40 

console.log(Math.abs(-10));
// output = 10 only changes negative value to positive

console.log(Math.random())
//  output always between 0 AND 1

console.log(Math.floor(Math.random()*10 + 1))
// now as we multiply it with 10 but the random value can be 0.01 so to avoid that we added +1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min ))



