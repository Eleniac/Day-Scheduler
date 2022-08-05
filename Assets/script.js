var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()


//11 hours
//loop over time blocks
//check if I have moved past the time

var past = document.querySelector (".time-block")
for (var i = 0; i < past; i++) {
     + timeElement [i] + ".";
}

var present = document.querySelector (".time-block")
for (var i = 0; i < future; i++) {
     + timeElement [i] + ".";
}


var future = document.querySelector (".time-block")
for (var i = 0; i < future; i++) {
     + timeElement [i] + ".";
}




var savebtn= document.querySelector (".btn btn-primary col-1")
function saveEvent () {
    document.getElementbyId ("saveBtn").innerHTML
    localStorage.setitem("submission",JSON.stringify(savebtn))
}; saveEvent ()










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