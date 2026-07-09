        // ****************  basic ***********

console.log(3>2)
console.log(3==3)
console.log(3!=0)
console.log(4>=4)


//  null function
console.log(null>0)
console.log(null == 0)
console.log(null>=0)

// so the ouput is false false true
// because equality check (==) and comparison (> >= <= <) work differently 
// comparison convert null to a no. treating it as 0.

//  undefined 
console.log(undefined>0)
console.log(undefined == 0)
console.log(undefined>=0)

//  so the ouput is false false false
// undefined becomes NaN, and NaN fails every mathematical comparison, it always returns false.

//  equality check
console.log("4"==4)
// it is true because it changes the string to No. , == only compares the values

// strict check
console.log("4"===4)
// it is false because  (===) compares both values as well as datatypes

