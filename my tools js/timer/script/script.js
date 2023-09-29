var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft < 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);
