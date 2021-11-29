  //  Task1...................

     let i = 0;
    while(i){
     alert(i--);
    }

    //task2...................

    let i = 0;
    while(++i < 10){
      alert(i);
    }

    let i = 0;
    while(i++ < 10){
    alert(i);
    }



  //  task3....................

   var evenNumber = 2;
   for(; evenNumber < 30; evenNumber++){
       if(evenNumber % 2 == 0){
           alert(evenNumber);
       }
   }



//task4......................

let i = 0;

while(i < 10){
    alert(`number is ${i}`);
    i++;
}


//task5.......................
   var number = prompt('Enter any number with a value greater than 500');
   do{
       if(number <= 500){
           var number = prompt('Your input is wrong,try again...');
       }else{
        alert(`The value you inputted is ${number}`);
       }
   }while(number > 500);




//task 6........................

    function primeNumber(n){

    outerloop:

    for (let x = 2; x < n; x++) {

        for (let y = 2; y < x; y++) {
            if (x % y == 0) {
                continue outerloop;
            }
        } alert(x);
    }
}
primeNumber(10);
            
