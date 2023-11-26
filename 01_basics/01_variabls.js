const accountId = 144553;
let accountEmail = "pradeepsingh@gmail.com";
var accountPassword =  "12345";
accountCity = "jaipur";
let accountState;
// accountId =2; // Not allowed
accountEmail = "pp06@gmail.com"
accountPassword = "2123"
accountCity = "Bangaluru"
console.log(accountId);

/* prefer not to use var bacause of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
