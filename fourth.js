//this modules deals with files 
const fs=require('fs')
fs.writeFileSync("text.txt","hi files");
//basic file write which is synchoronus

//now reading file
//it is important to know the importance of files and how this actually works
//reading file must always exits
var ans=fs.readFileSync("text.txt",{encoding:"utf8"})
console.log(ans)