var runTimer = (minute)=>{
    var sec = 60;
    setInterval(function() {
        console.log(minute + " : " + sec);
        sec--;
        if (sec == 00) {
          minute --;
          sec = 60;
          if (minute == 0) {
            minute = minute;
          }
          if(minute <= -1 && sec == 60){
            clearInterval(runTimer)
          }
        }
      }, 1000);
}

runTimer(0);
