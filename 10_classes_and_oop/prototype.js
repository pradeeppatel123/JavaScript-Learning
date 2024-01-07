// let myName = "Pradeep    "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.pradeep = function () {
  console.log(`Pradeep is present in all objects`);
};

Array.prototype.heyPradeep = function () {
  console.log(`Pradeep say hello`);
};

//heroPower.pradeep()

// myHeros.pradeep();
// myHeros.heyPradeep();
// heroPower.heyPradeep()

// inheritance
// old syntax
const User = {
    name: "chai",
    email:"cjai@google.com"
}

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  sAvailable: false,
};

const TASupport = {
  makeAssgnement: "JS assgnement",
    fullTime: true,
  __proto__:TeachingSupport
};

Teacher.__proto__ = User;


// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

'pradeep'.trueLength()
'iceTea'.trueLength()