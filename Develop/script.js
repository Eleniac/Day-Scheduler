var getTime = document.querySelector ('#getTime');
var timerElement = document.querySelector (".timer")
function getTime() {
    setInterval (function ()){
        var day = moment (). format ("dddd, MMMMM, Do, YYYY h:mm:ss a");
        timerElement.innerHTML = day
    }, 1000
};
getTime()