const age =21

if (age>=20){
    console.log("yes age is correct");
}
else {
    console.log("age is incorrect");
    
}
// Output = yes age is correct

const age =19

if (age>=20){
    console.log("yes age is correct");
}
else {
    console.log("age is incorrect");
    
}
//output = age is incorrect 

const username = true
const debitcard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if (username && debitcard) {
    console.log("Allow to buy item");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("you are logged in");   
}
