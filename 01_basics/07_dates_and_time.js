// Dates

let myDate = new Date()
// console.log(myDate.toString());

// Sat Dec 30 2023 08:31:52 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toISOString());

// 2023-12-30T08:37:33.903Z

//console.log(myDate.toJSON());
// 2023-12-30T08:38:08.397Z

//console.log(myDate.toLocaleString());

// 12/30/2023, 8:38:39 AM
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday : "long",

// })