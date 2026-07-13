// const user = {
//     username: "Tarush" ,
//     price: 42500,
 
//     welcomeMessage: function(){
//         console.log(`${this.username} , wlecome to the website`);
//          console.log(this)
//     }

// }
// user.welcomeMessage()
// user.username = "Singla";
// user.welcomeMessage()  // when i will run it with console.log(this) i will see whole object 

// // this acts as a reference to the object that is executing the current function (in this case, user).
// console.log(this);
// {}

// function chai(){
//     username: "Tarush",
//     console.log(this)
// }
// chai()

// const good = () => {      // this arrow => is a function
//     console.log(this);
    
// }
// chai()
// // answer for both the parts from 19 to 29 is same they are same diff. only username not in other

// const multi = (num1 , num2) => {
//     return num1 * num2
// }
// console.log(multi(5,20));
// //  output 100 ,  this is explicit return

// const another = (num1 , num2) =>  (num1 * num2)
// console.log(another(5,20));
// //  it is also same output is 100 very useful in react , when use {}  
// //  it is implicit return

const next  = (num1 , num2) =>  {myname : "Tarush"} // this will show undefined always
console.log(next(5,20));

const just  = (num1 , num2) =>  ({myname : "Tarush"}) // these () should always be there
console.log(just(5,20));
// output printed keep in mind for this situation where we have to print an object