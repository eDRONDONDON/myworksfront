let x = prompt(`enter your value`);
    function isInteger(x) {
      return (x ^ 0) === x;
    }if(isInteger(x)==true,x>1){
primeNum:
  for(var i = 2; i <= x; i++)
  {
    for (var j = 2; j < i; j++)
    {
      if (i % j == 0) continue primeNum;
    }
    console.log( i );
  }
    }else{
      console.log(`enter correct value`);
    }
