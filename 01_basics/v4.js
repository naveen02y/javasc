const accountid = 12345
let acc_email = "nav@aa"
var acc_pass ="123"
account_city="hyd"
console.log(accountid);


/* due to scope {}  var is noted used changes made in scope arer also changed in var type */
//accountid = 12 //not allowed
acc_email="sunny@i"
acc_pass="888"
account_city ="vizz"
let acc_city
 


//console.log. -> single output kavali annapudu use chesthamu

console.table([acc_email,acc_pass,accountid,acc_city,account_city])
  /* table form avtutadi */
  /* incase nuv aa identifer lo em store cheyaka pothey udefined ani vastadi output lo*/