//lets now start the next6 module
//here we will be going deep into streams
//as usual we will be creating a sever and exploring this example as well
//this truly will end concepts of node series
const fs=require('fs')
const http=require('http')
var server=http.createServer((req,res)=>{
   var s= fs.createReadStream("text.txt",{encoding:'utf-8'})
    //console.log(s)
    //var ans=fs.ReadStream()
    //console.log(s.pipe(k,{}))
    var k=fs.createWriteStream("text3.txt",{encoding:'utf-8'})
    k.write("hi files")
    //s.pipe('k',{})
    //console.log()
    res.end()
})
server.listen(5000,()=>{console.log("hey server this lime hardcodded at 5000")})
server.on('connection',()=>{console.log("server connection extablished")})
//this example completes our node basics next lets build severs using express