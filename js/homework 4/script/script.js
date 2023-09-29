let n = prompt(`enter your number`);
if (n>1){
    function fib(n) {
      let  f0= 1,
      f1 = 1;
      for (let i = 3; i <= n; i++) {
        let f2 = f0 + f1;
        let f3 = f1 + f2;
        f0 = f1;
        f1 = f2;
      }
      return f1;
    }
    alert (fib(n));
  }else if(n<0){
    function fib(n) {
      var  f0= 1,
      f1 = 1;
      for (let i = 3; i <= n; i++) {
        let f2 = f1 - f0;
        let f3 = f2 + f1;
        f0 = f1;
        f1 = f2;
      }
      return f1;
    }
    alert (fib(n));
  }
