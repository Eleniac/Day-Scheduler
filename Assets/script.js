var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()




var blocksElement = document.querySelectorAll ("#timeblocks")

function changeColor () {
    setInterval (function () {
        var past = moment().format (day)
        var present = moment().format (day)
        bloacksElement.innerHTML = day
    }, 1000 * 6
)}; changeColor ()  


//9 hours


var timeBlocks= ["8", "9", "10","11", "12", "1","2","3","4", "5"]
$("textarea").each (function () {
    $(this).addClass ("col-1");
});
if (getTime === col-10) {
    $(timeBlocks).addClass(present,function (indexpresent)
});

// var past = document.querySelector (".past")
// var present = document.querySelector (".present")
// for (var i = 0; i < timeBlocks; i++) {
//      + timeElement [i] + ".";
// }


// var future = document.querySelector (".future")
// for (var i = 0; i < future; i++) {
//      + timeElement [i] + ".";
// }

//if time has moved past current time turn time-block red
//if time is in the future turn time-block green
//if the time is the current time turn grey



    function saveEvent () {
        document.getElementById ("saveBtn").innerHTML = "save";
        saveBtn.addEventListener("click",saveEvent)
    } 

    function setItem (){
        localStorage.setitem("saveBtn",JSON.stringify())
        console.log (saveBtn)
    } setItem ()
  









    //   $("textarea").each(function(){

        
    //   })
      

    


