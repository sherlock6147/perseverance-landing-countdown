var daysLeft = document.getElementById('days-left');
var hoursLeft = document.getElementById('hours-left');
var minsLeft = document.getElementById('mins-left');
var secsLeft = document.getElementById('secs-left');

var deadline = new Date(Date.UTC(2021, 1, 18, 20, 55)); 
var x = setInterval(function() { 
    var now = Date.now(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    daysLeft.innerHTML = days.toString();
    hoursLeft.innerHTML = hours.toString();
    minsLeft.innerHTML = minutes.toString();
    secsLeft.innerHTML = seconds.toString();
    if (t < 0) { 
        clearInterval(x);
        daysLeft.innerHTML = "00";
        hoursLeft.innerHTML = "00";
        minsLeft.innerHTML = "00";
        secsLeft.innerHTML = "00";
        document.getElementById('landed').innerHTML = "Landed";
    } 
}, 1000);