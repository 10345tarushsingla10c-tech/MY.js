function averageTwoNumbers(Number1,Number2) {
    let result = (Number1+ Number2)/2
    return result
}
const result = averageTwoNumbers(10,20)

console.log("the average is " , result);
//  output is    the average is  15

const myNewArray = [200,300,400,500]

function returnThirdValue(goArray){
return goArray[2]
}
console.log(returnThirdValue(myNewArray));
//  output 400

const myObject = {
    name: "Tarush",
    age: 21,
    work: "Student"
}
function findObject(anyObject) {
 console.log(`my name is ${anyObject.name} `);
    }

   findObject(myObject);
    // output = my name is Tarush
    // why not console.log becuase it is done in the function