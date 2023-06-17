//now this is the sixth module of node
//lets start
//now lets require fs and http and port module
//importing or requiring only the fs module will genrate error
//you can also create your own promises
const fs=require('fs/promises')
const http=require('http')
const process=require('process')
//set up port
port=process.env.port||5000
//create a server
var server=http.createServer(async(req,res)=>{
   //this line is to confirm wheather its working
    // res.write("hello")
    //so now lest use async operations
    await fs.writeFile("text2.txt","Lets use the async method")
    //fs.writeFileSync("writen using sync")
    res.write("after async op")
    //this generates error
    var ans=await fs.readFile("text2.txt",{encoding:'utf-8'})
    res.write(ans);
    res.end()
})
server.listen(port,()=>{
    console.log(`server started at ${port}`)
})
//in the next module we will be learning about read buffer and finally will be moving to express