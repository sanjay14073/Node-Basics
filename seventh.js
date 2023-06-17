//in this module we will be diving into events and event hanlers
//first let's require the http module and the port inbulit modules
//this is an example for events in node js
const http=require('http')
const process=require('process')
const fs=require('fs')
const { log } = require('console')
const { EventEmitter } = require('stream')
const port=process.env.port||5000
var e=new EventEmitter('on')
var server=http.createServer((req,res)=>{
    log(e)
    res.write("Example for event emitter")
    res.end()
})

server.listen(port,()=>{log(`started at port ${port}`)})
server.on('connection',()=>{log(`someone connected`)})
//next we will be going to sterams and move onto express