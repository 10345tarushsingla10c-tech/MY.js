//global scope = When you declare a variable outside of any function or block ({})
// This variable is Global
const globalName = "Tarush"; 

function sayHello() {
    console.log(`Hello ${globalName}`); 
}

sayHello();
console.log(globalName); 

const word = 20 ;
function tellAge(){
    console.log(`age ${word}`);
}
tellAge();

// function scope
// When you declare a variable inside a specific boundary (like a function or a block)
function localExample() {
    const city = "Ludhiana"; 
    console.log(city); 
}

localExample();

// Variables declared with let or const inside any curly braces {} 
// (like an if statement or a for loop) are locked inside that specific block.
if (true) { 
    // 🚪 The Block Opens!
    const user = "Tarush";
    let status = "Active";
    var role = "Engineer"; 
    
    // Both 'user' and 'status' are locked inside this room.
} 
// 🚫 The Block Closes! The room is destroyed.

console.log(role);   // ✅ Outputs: "Engineer" (Because 'var' ignores blocks!)
console.log(user);   // ❌ ERROR: ReferenceError: user is not defined
// engineer is printed but Tarush not printed


function one(){
    const name = "Tarush"

    function Two(){
        const work = "engineer"
        console.log(name);
        console.log(work);
        
    }

    Two()
}

one()

// Two is child and one is parent , i can print name in Two but not work in one 
// because child can read parent class but parent cannot read child class
