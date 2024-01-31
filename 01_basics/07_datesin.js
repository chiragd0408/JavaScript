// Dates 

let myDate = new Date() 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createdDate = new Date(2023,4,23)
// console.log(createdDate.toDateString());

let mycreatedDate = new Date("2023-01-14")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${(newDate.getDay())}`

newDate.toLocaleString('default', {
    weekday: "long"
})

