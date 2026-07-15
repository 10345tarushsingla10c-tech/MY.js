const name = "Tarush"
if (name){
    console.log("my name is Tarush"); 
}else {    console.log("no identity");}


const age = ""
if (age){
    console.log("my name is Tarush"); 
}else {    console.log("no identity");}
// so this is a falsy value as it is an empty string 

// false value means which dosent give any answer

//  falsy value are 0 , -0 , false , BigInt 0n , "" , undefined , null

// truthy values are " " , "0" , true , [] , () , {}

// Nulish Coalescing operator ??

let val1;
val1 = 10 ?? 30

console.log(val1); //output is 10 prints first value

let val2;
val2 = null ?? 5
console.log(val2); // output 5 , it is for removing null and undefined values

// ternary operator ?
// condition ? true:false
const price = 100
price <=70 ? console.log("less than 70") : console.log("more than 70");
                   //  first statement              second statement


    