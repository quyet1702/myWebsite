// BEGIN: HEADER__CLOCK
function date() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return `${hours}:${minutes}:${seconds} -- ${day}/${month}/${year}`
}

var clock = document.getElementById('header__clock');
setInterval(function(){
    clock.textContent = date();
}, 1000);
// END: HEADER__CLOCK