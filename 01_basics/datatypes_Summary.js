// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Reference Type or Non-Primitive

// Array, Objects, Function
console.log(typeof anotherId);