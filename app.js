//use of module.exports
const validator= require('validator');
const book = require('./book');
console.log("inside  the app.js")
console.log(book)
console.log(validator.isEmail('himanshu@gmail.com'))
console.log(validator.isEmail('himanshu@yahoo.com'))
console.log(validator.isEmail('Qhimanshu#gmail.com'))
console.log(validator.isURL('meshoo.com'))
console.log(validator.isURL('relevel.com'))
console.log(validator.isURL('http:/meshoo.com'))