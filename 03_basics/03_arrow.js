const user = {
  username: "Pradeep",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};
//  this => refers the current context of the object

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "pradeep"
//     console.log(this.username)
// }

// chai()
// const chai = function(){
//     let username = "Pradeep"
//     console.log(this.username)
// }

//  arrow function

const chai = () => {
  let username = "Pradeep";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) =>  (num1 + num2);

// object return
const addTwo = (num1, num2) =>  ({username : "pradeep"})


console.log(addTwo(3,4))

// const myArray = [2,3,4,5,6]
// myArray.forEach()