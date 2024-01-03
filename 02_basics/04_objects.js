const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname:{
            firstname :"Pradeep",
            lastname : "Patel"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// combine two objects in another objects
// By using assign
// const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)

// By using spread operator
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id :1,
        email:"p@gmail.com"
    },
    {
        id :1,
        email:"p@gmail.com"
    },
    {
        id :1,
        email:"p@gmail.com"
    }, 
    {
        id :1,
        email:"p@gmail.com"
    }
]

// user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedOut"))


// Objects destructuring and JSON API

const course  = {
    coursename : "JS in Hindi",
    price : "999",
    coursenstructor : "Hitesh"
}

// course.coursenstructor


// ++++++++++++ object destructuring  +++++++++++++++++

const {coursenstructor:instructor} = course
// console.log(coursenstructor);
console.log(instructor);

// ++++++++++++++++ APIs ++++++++++++++++++++

// JSON
// OBJECT Fromat API
// {
//     "name":"Pradeep",
//     "coursename":"JS in Hindi",
//     "price":"free"

// }


// Array format API
// [
//     {},
//     {},
//     {}
// ]