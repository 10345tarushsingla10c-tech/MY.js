//  Immediately Invoked Functions Expression (IIFE)

// these are used to control the pollution made from the global scope
// as global scope in parent and children can access parents properties.
// An IIFE is a function that is created and executed immediately after it is defined.

(function name () {
    console.log("Tarush")
})();
// use () before the function and at last as we usually call the function like name()
// always remeber to use semicolon ; after we perform IIFE as we need to end it 

( () => {
    console.log("Singla")
})();
// IIFE using arrow function , IIFE is used this stament because we ended the previous

