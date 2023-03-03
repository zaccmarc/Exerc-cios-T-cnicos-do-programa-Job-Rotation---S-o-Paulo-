    let a = 0, b = 1, c;
    let fibonacci = [a,b];
    let numero = 300;
    var sequenciaArray = [];

    
    for (let i = 2; i < 10; i++) {
      c = a + b;
      fibonacci[i] = c;
      a = b;
      b = c;
    }
    console.log (fibonacci); 

   for (var i = 0; i < fibonacci.length; i++) {
        sequenciaArray.push (fibonacci[i]);
    }

    console.log(sequenciaArray);

    console.log(sequenciaArray.includes(21));
    



  



    

    
    