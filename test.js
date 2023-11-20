console.log("Hitesh")
const accountId = 213445
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Ranchi"
/*
don't use var because it will be issue in the 
block scope
*/ 
let accountState

accountEmail ="def@gmail.com"
accountPassword="23456"
accountCity="Nagpur"
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])
