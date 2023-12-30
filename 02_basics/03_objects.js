// singleton

// object literals
const mySym  =  Symbol("key1")
const JsUser = {
    name : "Pradeep",
    "full name" : "Pradeep Patel",
    // symbol as a key
    [mySym] : "myKey1",
    age : 21,
    location : "Rewa",
    email : "pradeeppatel@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym])

JsUser.email = "pp0608105@chatgpt.com"
// freeze the object
// Object.freeze(JsUser)
JsUser.email = "pp0608105@microsoft.com"
console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())