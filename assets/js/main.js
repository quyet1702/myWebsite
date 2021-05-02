// BEGIN: HEADER__CLOCK
function date() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var a = '';
        var b = '';
        function style(reset, time){
            if (time < 10) {
                reset = '0';
                return reset;
            }  
            return reset;
        }
        return `${hours}:${style('',minutes)}${minutes}:${style('',seconds)}${seconds} -- ${day}/${month}/${year}`
}

var clock = document.getElementById('header__clock');
clock.textContent = date();
setInterval(function(){
    clock.textContent = date();
}, 1000);
// END: HEADER__CLOCK

// BEGIN: MY WALLET\
var myWallet = " " + "167 000" + "  VNĐ";
var wallet = document.querySelector('.header__nav-right li i');
wallet.textContent = myWallet;
// END: MY WALLET