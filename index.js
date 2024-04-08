const sum = require('./alter');
const chalk = require('chalk');

console.log("Marc Spitznagel")
console.log(chalk.blue("Die Summe von Zahlen 3 und 4 ist ") + chalk.red(sum(3, 4)) + chalk.blue("."));
console.log(chalk.blue("Die Summe von Zahlen 5 und 6 ist ") + chalk.red(sum(5, 6)) + chalk.blue("."));
console.log(chalk.blue("Die Summe von Zahlen 7 und 8 ist ") + chalk.red(sum(7, 8)) + chalk.blue("."));
