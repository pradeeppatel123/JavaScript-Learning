function sayMyname() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
}

//sayMyname // reference
//sayMyname() // function execution

// function addTwoNumbers(number1,number2) {
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
const result = addTwoNumbers(3, 4);
// console.log("Result : ",result);

function loginUserMessage(username="Sam") {
  if (!username) {
    console.log("Please Enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage());

// REST operator (...num1)
function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "Pradeep",
    price : 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObjects(user)
handleObjects({
    username : "Sam",
    price : 200
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([
    220,300,800,4000
]))