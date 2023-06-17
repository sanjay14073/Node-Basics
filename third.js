//This module will be related to module exports
//let us consider these examples 
let a=[2,3,4]
function myfun(a){
//a=a;
return a*a;
}
var ser=()=>{
a.map(myfun);
}
console.log(a.map(myfun))
module.exports={ser,a}
//this is the main function
//considering the above examples
//lets require it and start 
//const ser = require('./third')
//boom this a new thing no need of below statement
//console.log(ser());
//const {...a}=require('./third')
//console.log(a);