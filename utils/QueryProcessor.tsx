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
  // if (query.includes("What is 21 plus 46?")) {
  //   return "67";
  // }

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

  return "";
}
