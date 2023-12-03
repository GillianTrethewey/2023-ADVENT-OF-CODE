const fs = require("fs");

const data = fs.readFileSync("day02.txt", "utf8");

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

const problemOne = (data) => {
  const lines = data.split("\n");

  return lines
    .map((line) => {
      return line
        .split(": ")[1]
        .split("; ")
        .map((set) => {
          const pulls = set.split(", ");
          return pulls.every((pull) => {
            const [count, color] = pull.split(" ");
            return maxCount[color] >= Number(count);
          });
        })
        .every((p) => p); // returns every play is true
    })
    .reduce((s, result, i) => {
      return result ? s + (i + 1) : s;
    }, 0);
};

//console.log(problemOne(data));

const problemTwo = (data) => {
  const lines = data.split("\n");

  return lines.map((line) => {
    const max = {
      red: 0,
      green: 0,
      blue: 0,
    };
    line
      .split(": ")[1]
      .split("; ")
      .forEach((set) => {
        const pulls = set.split(", ");
        return pulls.forEach((pull) => {
          const [count, color] = pull.split(" ");
          if (max[color] < Number(count)) {
            max[color] = Number(count);
          }
        });
      });
    return max.red * max.green * max.blue;
  }).reduce((s, v) => s + v);
};

console.log(problemTwo(data));
