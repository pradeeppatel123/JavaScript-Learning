var c = 200;
let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
   // console.log("INNER : ",a)
}

//console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Pradeep"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username = "Pradeep"
    if(username === "Pradeep"){
        const website = " youtube"
       // console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

// +++++++++++++++++++ Interesting ++++++++++++++++++++++

// hoisting

console.log(addOne(5))
function addOne(num){
    return num+1;
}

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2;
}

