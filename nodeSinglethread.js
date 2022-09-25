console.log("starting");
setTimeout(()=>{
    console.log("timer complete aftre 2 seconds")
},2000);
setTimeout(() => {
    console.log("timer complete immedately")
},0);
setTimeout(() => {
    console.log("timer complete 3 seconnd")
},3000);
console.log("stoped")

//above code says
//this is asycronous code or none blocking in nature