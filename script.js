var newYears = '1 Jan 2023';

function countDown() {
    var newYearDate = new Date(newYears);
    var currentDate = new Date();
    var totalSeconds = (newYearDate - currentDate) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60);

    document.getElementById('days').innerHTML = formate(days);
    document.getElementById('hours').innerHTML = formate(hours);
    document.getElementById('mins').innerHTML = formate(mins);
    document.getElementById('sec').innerHTML = formate(seconds);
}

function formate(time) {
    return time < 10 ? ('0' + time) : time;
}
//Initial Call.....
countDown();

setInterval(countDown, 1000); //call countdown every Second.