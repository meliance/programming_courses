//a number divide by 3&5 fizzBuzz
//a number divide by 3 Fizz
//a number divide by 5 Buzz 
//a number not divide by 3 & 5 return itself
// input is not number return not a number

const output = fizzBuzz('lkjhg');
console.log(output);
function fizzBuzz(input) {
  if (typeof input != 'number')
  //NaN is not a number
  return NaN;
  else if (input % 3 == 0 && input % 5 == 0)
  return ('fizzBuzz');
  if (input % 3 == 0)
  return ('Fizz');
  else if (input % 5 == 0)
  return ('Buzz');
  
  // else 
  return input;
}