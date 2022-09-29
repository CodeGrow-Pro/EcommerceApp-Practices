//Asycronnous porgram
const fs = require("fs")
console.log("start");
fs.readFileSync("./fsWrite.txt",(err,data)=>{
    console.log(data.toString);
})
console.log("stop");
