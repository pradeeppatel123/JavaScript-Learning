// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Reference or Non-Primitive

// Array, Objects, Function
console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename  = "pradeeppatel.com";
let anothername  = myYoutubename;
anothername  = "baldaoopatel.com"

console.log(myYoutubename);
console.log(anothername);

let userOne  = {
    email :"user@gmail.com",
    upi:"user@ybl"
}
let userTwo  = userOne ;

userTwo.email = "pradeep@gmail.com"

console.log(userOne.email);

console.log(userTwo.email);
