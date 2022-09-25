//use of module.exports
const validator= require('validator');
const book = require('./book');

const fs = require('fs')
console.log("inside  the app.js")
console.log(book)
console.log(validator.isEmail('himanshu@gmail.com'))
console.log(validator.isEmail('himanshu@yahoo.com'))
console.log(validator.isEmail('Qhimanshu#gmail.com'))
console.log(validator.isURL('meshoo.com'))
console.log(validator.isURL('relevel.com'))
console.log(validator.isURL('http:/meshoo.com'))

fs.writeFile('fsWrite.txt',"we are write using node fs module",()=>{
    console.log("writing completed");
});
fs.readFile('fsWrite.txt',(err,data)=>{
    if(err) throw new Error("somthing want wrong");
    console.log(data.toString())
})

console.log("we are try to write the file an json Object");
const data = {
    "name":"vishal",
    "class":"first",
    "number":"45",
    "address":"meerut"
}
fs.writeFile('fsWrite.txt',"don't overWriteing ook",()=>{
    console.log("writeing completed");
})