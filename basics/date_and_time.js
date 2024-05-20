const newDate = new Date();

// console.log(newDate);

// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.toString());
// // console.log(newDate.toJSON());
// console.log("Today is : " + newDate.toLocaleDateString('default',{
//             weekday : 'long' 
// }));
// console.log("Current time is : " + newDate.toLocaleTimeString('default',{
//            timeStyle : 'medium'
// }));
// console.log(newDate.toLocaleTimeString());
/*console.log(newDate.toLocaleString('default',{
dateStyle : "short",
timeStyle : "short",
}
));*/

// const myCreatDate = new Date ("2024-08-12");
// const myCreatDate = new Date ("2024-08-12");
// const myCreatDate = new Date();

// console.log(myCreatDate.toLocaleString());

// console.log(myCreatDate.getTime());
// console.log((myCreatDate.getHours().toLocaleString('en-IN')));
// console.log(Math.floor(myCreatDate.getTime()/1000/60/60/24));
const date =new Date().getDate()
const month =new Date().getMonth()
const year =new Date().getFullYear()
const myDates = `${date} - ${month} - ${year} `
console.log(myDates);
          