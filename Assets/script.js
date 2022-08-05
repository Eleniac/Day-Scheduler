var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()

var past = document.querySelectorAll ("")

function pastTime () {
    setInterval (function () {
        var dayTimes = moment ().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        past.innerHTML = past
    }, 1000 * 60
    )}; pastTime ()

