//return numbers 1to N on new line
//every number divisible by 3 show Fizz
//every number divisible by 5 show buzz
//show fizzbuzz at number 'N' (currently:100)
//Error:Not showing fizzbuzz @ N


for (var i = 1; i <= 100; i++) {
  if ( i % 3 == 0 ) {
    console.log("Fizz");
  }
  else if ( i % 5 == 0 ) {
    console.log("Buzz");
  }
  else if ( i % 3 == 0 && i % 5 == 0 ) {
    console.log("FizzBuzz");
  }
  else {
    console.log(i);
  }
}