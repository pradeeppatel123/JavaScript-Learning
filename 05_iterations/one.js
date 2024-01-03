// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// Table Printing

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Vlaue : ${i}`)
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner Loop value ${j} and inner loop ${i}`);
      // console.log(i + ' * ' + j +' = ' + i*j);
    }
}

let myArray = ["falsh","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`vlaue of i is : ${index}`)
    
// }
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`vlaue of i is : ${index}`)
    
}