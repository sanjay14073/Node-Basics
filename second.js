//GLOBALS
//these are very important features 
//__dirname
//__filename
//module
//process
//require
//path
//these are the required for any node project just console log these details


//example for __dirname
const dir=__dirname
console.log(dir)

//example for __filename
const fil=__filename
console.log(fil)

//example for process
const pro=process.env
console.log(pro)

//example for path
const path=require('path')
console.log(path)

//example for modules
let myarray=[1,2,3]
module.exports=myarray
//functions also can be exported

//dummy.js and run dummy.js
const myarray=require('./app')
console.log(myarray[0])



//example for require
//const { log } = require('console')
const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.write("Hello world")
    res.end();
})
server.listen(3000,()=>{
    console.log("server running")
})
