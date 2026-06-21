//  2 types of memory in js Stack and heap
// stack stores primitve and heap stores non primitive
// primitive = number , string , boolean etc. ,non primitve :- Array , unctions and objects

// stack
let myName = "Tarush"
let anotherName = "Singla"
console.log(myName)
console.log(anotherName)
// the output is different as in stack there are two different slots occupies by myName &
//  anotherName so changing one do not have affect on other , they are independent



// Heap

let userOne = {
    email: "123@gmail.com",
    age:32
}

let userTwo= userOne
 userTwo.email = "369@gmail.com"

console.log(userTwo)
console.log(userOne)

// the output is same as in heap the same data is reflected