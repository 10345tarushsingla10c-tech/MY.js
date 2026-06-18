// prefix =  (++x)      "Stop everything! Increase my value by 1 right now ,
//  and then use this brand-new value for the rest of the line."

let a = 10
let b = ++a
console.log(b)
console.log(a)

so output is 11 11


// postfix = (x++)  "Use my current value right now for this line of code,
//  and once this line is completely done, increase my value by 1."

let a = 10
let b = a++
console.log(a)
console.log(b)

so output is 11 10
// if b printed first then a the output would be 10 , 11
// b is given the initial value of a which is 10 , so b becomes 10 and a automatically 11