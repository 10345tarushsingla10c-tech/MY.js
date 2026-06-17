let IsThis = (1)
let booleanIsThis = Boolean(IsThis)
console.log (booleanIsThis)

let IsThis = (0)

let booleanIsThis = Boolean(IsThis)
//console.log (booleanIsThis)

let IsNumber = 23
let StringNumber = String(IsNumber)
console.log(StringNumber)
console.log(typeof StringNumber)

// ****************** Operations *******************

let value = 16
let negval = -value
console.log(negval)

// ***************string to number***************

let a = "12"
let b = "15"
console.log(a+b)    

//  as a & b are string "" so the output becomes 1215

let a = 12
let b = 15
console.log(a+b)

let a = "90"
let b = "100"
let c = 200
console.log(a+b+c)

// the output is 90100200***************


let a = "90"
let b = "100"
let c = 200
console.log(a-b-c)
// the output is -210 because on the operations like "-" "*" "/" they all don't work on string
// so the string is forced to convert to number