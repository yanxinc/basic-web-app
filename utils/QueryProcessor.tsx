function isPrime(num:number):boolean{
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.includes("What is your name?")) {
    return "abcd";
  }
  
  if (query.includes("What is") && query.includes("plus")) {
    var ns = query.replace("What is ", "").replace("?", "").split(" plus ");

    var sum = 0;
    for (let i = 0; i < ns.length; i++){
      sum += parseInt(ns[i]);
    }

    return sum.toString();
  }


  if (query.includes("Which of the following numbers is the largest")) {
    var number = query.split(": ")[1].replace('?', "");
    var numbers = number.split(", ")

    var max = 0;
    for (let i = 0; i < 3; i++){
      if (parseInt(numbers[i]) > max){
        max = parseInt(numbers[i])
      }
    }

    return max.toString();
  }
  // What is 86 multiplied by 26?
  if (query.includes("multiplied")) {
    var q = query.split(" ");
    var num1 = parseInt(q[2]);
    var num2 = parseInt(q[5]);
    return (num1 * num2).toString();
  }
  // What is 27 minus 77?	
  if (query.includes("minus")) {
    var q = query.split(" ");
    var num1 = parseInt(q[2]);
    var num2 = parseInt(q[4]);
    return (num1 - num2).toString();
  }
  // Which of the following numbers is both a square and a cube: 23, 3364, 3147, 729, 22, 277, 4913?
  if (query.includes("square and a cube")) {
    var number = query.split(": ")[1].replace('?', "");
    var numbers = number.split(", ")

    for (let i = 0; i < numbers.length; i++){
      var n = parseInt(numbers[i])
      var tmp = Math.round(Math.pow(n, 1/6))
      var t2 = Math.pow(tmp, 6)
      
      if (t2 == n){
        return numbers[i]
      }
    }
  }
  // What is 33 to the power of 45?	
  if (query.includes("to the power of")) {
    var q = query.split(" ");
    var num1 = parseInt(q[2]);
    var num2 = parseInt(q[7]);
    return (Math.pow(num1, num2)).toString();
  }

  // Which of the following numbers are primes: 97, 83, 91, 4, 7?	
  if (query.includes("following numbers are primes")) {


    var number = query.split(": ")[1].replace('?', "");
    var numbers = number.split(", ")

    for (let i = 0; i < numbers.length; i++){
      var n = parseInt(numbers[i])
      if (isPrime(n)){
        return numbers[i]
      }
    }
  }



  return "";
}
