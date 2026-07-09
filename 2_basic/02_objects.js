
const mySymbol = Symbol("key1")

const JsUser = {
    "name": "Tarush",
    age: 21,
    "Email": "tarush@google.com",
    location: "Ludhiana",
    [mySymbol]: Symbol("work"),
}
//  for symbol it has to be in square brackets
console.log(typeof JsUser[mySymbol]);

JsUser.Email = "singla21@google.com"
console.log(JsUser);
// Object.freeze(JsUser)
// it will freeze the object now no changes can be made inside the object
JsUser.Email = "1444@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("HELLO JS USER");   
}
console.log(JsUser.greeting());

JsUser.JustTwo = function() {
    console.log(`HELLO JS USER, ${this.name}`);
}
console.log(JsUser.JustTwo());
//  always remember to use () when printing a function like JustTwo()

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"} 

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
// object.assign is used for concatenation of object and it is not compulsory to use {} 

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// mostly use this for concat this is also good and easy
console.log(Object.keys(JsUser));
// [ 'name', 'age', 'Email', 'location', 'greeting', 'JustTwo' ] it will print in array 
console.log(Object.entries(JsUser));
// output  [ 'name', 'Tarush' ],
//         [ 'age', 21 ],
//         [ 'Email', '1444@gmail.com' ],
//         [ 'location', 'Ludhiana' ]