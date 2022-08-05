var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()


var blocksElement = document.querySelector ("#timeblocks")

function changeColor () {
    setInterval (function () {
        var past = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
        var present = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a")
        bloacksElement.innerHTML = hour
    }, 1000 * 6
)}; changeColor ()


for (var i =0; i = timeElement.length; i++) {
     + timeElement [i] + ".";
}

var savebtn= document.querySelector (".btn btn-primary col-1")
function saveEvent () {
    document.getElementbyId ("saveBtn").innerHTML
    localStorage.setitem("submission",JSON.stringify(savebtn))
}; saveEvent ()









    //   $("textarea").each(function(){

        
    //   })
      

      