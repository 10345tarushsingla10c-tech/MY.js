let myArr = [4,10,'Tarush',15,80]
console.log(myArr[2]);

myArr.push(250)
console.log(myArr);
// just add 250 in myArr , so push adds element in the pre existing array

 myArr.pop() 
//  removes the last element of the array

myArr.unshift(5)
console.log(myArr);
// just add the element in the start of the array , simply it will make 5 first element of array

myArr.shift()
console.log(myArr);
//  removes the first element

const newArr = myArr.join()
console.log(newArr);
//  it converts the array into string

let myN1 =  myArr.slice(0,3)
console.log(myN1);
console.log('A',myArr );
// it prints first 3 elements from the array and has no change on the original arrray

let myN2 =  myArr.splice(0,3)
console.log(myN2);
console.log('A',myArr );
// it prints first 3 elements from the array and removes those elements from the original arrray

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = arr1.concat(arr2)
console.log(arr3);
// used for adding arrays
const arr4 = [...arr1, ...arr2]
console.log(arr4);
// also used for adding arrays , its a better way , less chance of making mistake

const anArr = [1,2,3,[4,5,6],2,8,[5,6,[2,4,6,8]]]
const anotherArr = anArr.flat(2)
console.log(anotherArr);
// flat is used to unpack the inner arrays as output is 
//  [ 1, 2, 3, 4, 5, 6,
//   2, 8, 5, 6, 2, 4,
//   6, 8
// ]

console.log(Array.isArray(arr1));
//  to check that is the specific content , mine is arr1 is array or not

console.log(Array.from("Tarush"))
// output will be ['T','a','r','u','s','h'] as it forms an array

let A = 20
let B = 40
let c = 60
let D = 80
console.log(Array.of(A, B, c, D));
// output = [20,40,60,80] , so Array.of is used to make an array of pre defined data








