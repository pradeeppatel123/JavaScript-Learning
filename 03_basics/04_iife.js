// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)

})();

((name)=>{
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('Pradeep');