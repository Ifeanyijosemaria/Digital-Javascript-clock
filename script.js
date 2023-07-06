// alert("hello")

let hours = document.getElementById("hrs");
let min = document.getElementById("min")
let sec = document.getElementById("sec")

// current time using the javascript date
setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"")   + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") +currentTime.getSeconds();
},1000)

// // console.log
// console.log(currentTime.getHours())
// console.log(currentTime.getMinutes())
// console.log(currentTime.getSeconds())

// let currentDate = new Date();
// console.log(currentDate)

// let day = document.getElementById("day")
// let month = document.getElementById("month")
// let year = document.getElementById("year")
// z
// console.log(currentDate.getDay())