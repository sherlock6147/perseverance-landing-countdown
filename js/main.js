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
    if (deadline < now) { 
        // clearInterval(x);
        t = now - deadline; 
        days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        seconds = Math.floor((t % (1000 * 60)) / 1000); 
        daysLeft.innerHTML = days.toString();
        hoursLeft.innerHTML = hours.toString();
        minsLeft.innerHTML = minutes.toString();
        secsLeft.innerHTML = seconds.toString();
        document.getElementById('landed').innerHTML = "Time On Mars";
    } 
}, 1000);