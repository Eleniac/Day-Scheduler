var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()


//10 hours
//loop over time blocks
//check if I have moved past the time

var past = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
for (var i = 0; i < past; i++) {
     + timeElement [i] + ".";
}
    if (i < 10) {

    }


var present = document.querySelector (".time-block")
for (var i = 0; i < future; i++) {
     + timeElement [i] + ".";
}


var future = document.querySelector (".time-block")
for (var i = 0; i < future; i++) {
     + timeElement [i] + ".";
}

//if time has moved past current time turn time-block red
//if time is in the future turn time-block green
//if the time is the current time turn grey




    localStorage.setitem("saveBtn",JSON.stringify())










    //   $("textarea").each(function(){

        
    //   })
      

    
// var blocksElement = document.querySelector ("#timeblocks")

// function changeColor () {
//     setInterval (function () {
//         var past = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
//         var present = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
//         bloacksElement.innerHTML = hour
//     }, 1000 * 6
// )}; changeColor ()  