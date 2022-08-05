var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()


var blocksElement = document.querySelector ("#timeblocks")

function changColor () {
    setInterval (function () {
        var past = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
        var present = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
        blocksElement.innerHTML = hour
    }, 1000 * 6
)}; changeColor ()


for (var i =0; i = timeElement.length; i++) {
     + timeElement [i] + ".";
}

var savebtn= document.querySelector (".btn btn-primary col-1")
function saveEvent () {
    localStorage.setitem("submission",JSON.stringify(savebtn))
}; saveEvent ()








// var past = document.querySelectorAll (".row")

// function pastTime () {
//     setInterval (function () {
//         var dayTimes = moment ().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
//         past.innerHTML = past
//     }, 1000 * 60
//     )}; pastTime ()

//     for (var i = 0; i != dayTimes; i++) {
     
//       }
    //   $("textarea").each(function(){

        
    //   })
      

      