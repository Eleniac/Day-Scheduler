var getTime = document.querySelector ('#getTime');
var timerElement = document.querySelector (".timer")
function getTime() {
    setInterval(){
        var day = moment (). format ("dddd, MMMMM, Do, YYYY h:mm:ss a");
        console.log (hello)
        timerElement.innerHTML = day
    }, 1000
};
getTime()