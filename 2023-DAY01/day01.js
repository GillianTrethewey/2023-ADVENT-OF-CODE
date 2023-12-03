const fs = require("fs");

const data = fs.readFileSync("day01.txt", "utf8");

const problemOne = (data) => {
  const numbers = data.split("\n").map((line) => {
    const firstNum = line.split("").find((e) => e >= "0" && e <= "9");
    const lastNum = line
      .split("")
      .reverse()
      .find((e) => e >= "0" && e <= "9");
    console.log(Number(firstNum + lastNum));
    return Number(firstNum + lastNum);
  });
  return numbers.reduce((a, b) => a + b, 0);
};

//console.log(problemOne(data));


 

 const problemTwo = (data) => {
    const lines = extractNumbers(data);
    let total = 0;
    lines.map(line => {
      const digits = line.replace(/\D/g, '');
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      const sum = Number(firstDigit + lastDigit);
      total += sum;
    });
  
    return total;
  }
  
  const extractNumbers = (data) => {  
    const copy = {
      'one': 'o1e',
      'two': 't2o',
      'three': 't3e',
      'four': 'f4r',
      'five': 'f5e',
      'six': 's6x',
      'seven': 's7n',
      'eight': 'e8t',
      'nine': 'n9e'
    };
  
    Object.keys(copy).forEach(key => {
      data = data.replaceAll(key, copy[key]);
    });
  
    return data.split('\n');
  }

console.log(problemTwo(data));
