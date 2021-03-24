/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/




for (var i = 1; i <= 100; i++) {    //from 1 to 100
    if ((i % 15) == 0) {   // se [i] / 15 (3*5) = 0 --> FizzBuzz
        console.log("FizzBuzz");
    } 
    else if ((i % 3) == 0) {         //se [i] / 3 = 0 --> Fizz
        console.log("Fizz");
    } 
    else if ((i % 5) == 0) {    // se [i] / 5 = 0 --> Buzz
        console.log("Buzz");
    } 
    else {                        // altrimenti [i] --> numero
        console.log(i);
    }
}







/* funziona ma...
var numbers = []; //array che conterrà i numeri
console.log(numbers);

var rest = 0;

for (var i = 0; i < 100; i++) {
  numbers.push((i + 1));
  console.log(numbers);
  if ((rest = numbers[i] % 3) == 0) {
    numbers[i] = "Fizz";
  } 
  else if ((rest = numbers[i] % 5) == 0) {
    numbers[i] = "Buzz";
  } 
  else if (((rest = numbers[i] % 3) == 0) && ((rest = numbers[i] % 5) == 0)) {
    numbers[i] = "FizzBuzz";
  }
  document.getElementById("result").innerHTML += " " + numbers[i] + " ";
}*/
