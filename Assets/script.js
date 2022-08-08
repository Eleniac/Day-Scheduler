var timerElement = document.querySelector (".timer")

//day and time function

function getTime () {
    setInterval (function () {
        var day = moment().format ("dddd, MMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day 
    }, 1000
)}; getTime ()



// function changeColor () {
//     setInterval (function () {
//      var blocksElement = document.querySelectorAll ("#timeblocks")
//      blocksElement.innerHTML = day
//     }, 1000 * 6
// )}; changeColor ()  


//9 hours total
//loop over time blocks
var past = document.querySelector (".past")
var present = document.querySelector (".present")
var future = document.querySelector (".future")

for (var i = 0; i = timeBlocks; i++) {
     + timerElement [i] + ".";
}

//adding a class using Jquery
var timeBlocks= ["8", "9", "10","11", "12", "1","2","3","4", "5"]
$("textarea").each (function () {
    $(this).addClass ("col-1");
});
var column = document.querySelectorAll (".col-1")
//check if it has moved past the time
if (moment().format === column) {
    $(timeBlocks).addClass.past
};

if (moment().format === column) {
    $(timeBlocks).addClass.present
};


if (moment().format === column) {
    $(timeBlocks).addClass.furture
};


//save event to local storage

    function saveEvent () {
        document.getElementById ("saveBtn").innerHTML = "save";
        saveBtn.addEventListener("click",saveEvent)
    } saveEvent ()
   

    function setItem (){
        localStorage.setitem("saveBtn",JSON.stringify())
        console.log (saveBtn)
    } setItem ()
 










    


