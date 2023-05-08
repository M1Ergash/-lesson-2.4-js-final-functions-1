/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
*/
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz

function fizzBuzz(number) {
  let isFizzBuzz = number % 3 === 0 && number % 5 === 0;
  if (isFizzBuzz) {
    console.log("FizzBuzz");
    return;
  }

  if (number % 3 === 0) {
    console.log("Fizz");
    return;
  }

  if (number % 5 === 0) {
    console.log("Buzz");
    return;
  }

  console.log("Pop");
}

/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let result = averager(prices);
console.log(result);

function averager(prices) {
  return prices.reduce((a, c) => a + c);
}

// Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places.

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);

function celToFah(celsius) {
  let convert = Math.round(celsius * 1.8 + 32).toFixed(2);
  console.log(`${celsius} C (°) is equal to ${convert} F`);
}

function celToKel(celsius) {
  let convert = Math.round(celsius + 273.15).toFixed(2);
  console.log(`${celsius} C (°) is equal to ${convert} K`);
}

// Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
//pow(2, 3) -> 2 * 2 * 2 -> 8

//Note: You can not use Math.pow function. You need to write your own implementation of the function.

function pow(value, power) {
  if (value === 0 && power < 0) {
    console.log(`power ${power} can't be minus for zero!!!`);
    return;
  }
  if (value === 0 && power > 0) return 0;
  let result = 1;

  if (power > 0) {
    for (let i = 0; i < power; i++) {
      result *= value;
    }
  } else {
    for (let i = power; i < 0; i++) {
      result /= value;
      console.log(result);
    }
  }
  return result;
}
