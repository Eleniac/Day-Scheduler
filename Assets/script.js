var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()

//9 hours total
//loop over time blocks
//check if it has moved past the time
//apply classes

var past = document.querySelector (".past")
var present = document.querySelector (".present")
for (var i = 0; i < timeBlocks; i++) {
     + timeElement [i] + ".";
}

var future = document.querySelector (".future")
for (var i = 0; i < future; i++) {
     + timeElement [i] + ".";
}

var timeBlocks= ["8", "9", "10","11", "12", "1","2","3","4", "5"]
$("textarea").each (function () {
    $(this).addClass ("col-1");
});
if (day === col-10) {
    $(timeBlocks).addClass(present,function (indexpresent)
});


// var blocksElement = document.querySelectorAll ("#timeblocks")

// function changeColor () {
//     setInterval (function () {
//         var past = moment().format (day)
//         var present = moment().format (day)
//         bloacksElement.innerHTML = day
//     }, 1000 * 6
// )}; changeColor ()  


//save event to local storage

    function saveEvent () {
        document.getElementById ("saveBtn").innerHTML = "save";
        saveBtn.addEventListener("click",saveEvent)
    } 

    function setItem (){
        localStorage.setitem("saveBtn",JSON.stringify())
        console.log (saveBtn)
    } setItem ()
  










    


