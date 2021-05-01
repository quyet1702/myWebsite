function date() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return `${hours}:${minutes}:${seconds}  ${day}/${month}/${year}`
}
setInterval(function(){
    console.log(date());
}, 1000);

