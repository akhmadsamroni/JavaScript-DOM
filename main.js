function fizzBuzz() {
    // Mengambil input angka dari pengguna
    const number = document.getElementById("number").value;
  
    // Memeriksa apakah angka merupakan kelipatan 3 dan/atau 5
    if (number % 3 === 0 && number % 5 === 0) {
      document.getElementById("result").textContent = "FizzBuzz";
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      document.getElementById("result").textContent = "Fizz";
      console.log("Fizz");
    } else if (number % 5 === 0) {
      document.getElementById("result").textContent = "Buzz";
      console.log("Buzz");
    } else {
      document.getElementById("result").textContent = number;
      console.log(number);
    }
  }