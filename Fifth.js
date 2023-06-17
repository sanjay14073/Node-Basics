//in this module will use all the basics starting from files so this implies a complete revisitation of all topics
//this also ensures that we will be sure how to use buile in modules
//require fs and http modules of node
const fs=require('fs')
const http=require('http')
const port=process.env.port||5000
var server=http.createServer((req,res)=>{
    //start by adding url to the file
    //=>
    const url=req.url
    //also collect the status code
    const code=Number(req.statusCode)
    //now create a file namely text1.txt

    fs.writeFileSync("text1.txt",`our url is ${url},the status code is ${code},at port ${port}`,{flag:'w'})
    //now read the data from the file and display it in our page
    var ans=fs.readFileSync("text1.txt",{encoding:'utf8'})
    res.write(ans)
    res.end();
    }
)
server.listen(port,()=>{
    console.log(`server started at ${port}`)
})
//working prefectly next we will see async methods and later move on to streams and events
//later express and we start buling projects