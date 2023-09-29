var time = 0;
var running = 0;

function startPause() {
  if (running == 0){
    running = 1;
    increment();
    document.getElementById('startPause').innerHTML = 'pause';
  }else{
    running = 0;
    document.getElementById('startPause').innerHTML = 'resume';
  };
};

function reset() {
  running = 0;
  time = 0;
  document.getElementById('startPause').innerHTML = 'start';
  document.getElementById('output').innerHTML = '00/00/00';
};

function increment() {
  if (running == 1){
    setTimeout(function(){
      time++;
      var min = Math.floor(time/10/60);
      var sec = Math.floor(time/10);
      var ms = time%10;

      if ( min < 10 ){
        min = '0' + min ;
      }
      if ( sec < 10 ){
        sec = '0' + sec ;
      };
      document.getElementById('output').innerHTML = min + ' / ' + sec + ' / '+'0' + ms ;
      increment();
    },100);
  }
};
