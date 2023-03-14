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
    var q = query.split(" ");
    var num1 = parseInt(q[2]);
    var num2 = parseInt(q[4]);
    return (num1 + num2).toString();
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
  // if (query.includes("")) {
  //   return "";
  // }

  return "";
}
