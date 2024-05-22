#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 10 + 1);
let GuessedNumber = await inquirer.prompt([{
        message: "Enter the number",
        type: "number",
        name: "numberGuessed"
    }]);
if (GuessedNumber.numberGuessed === RandomNumber) {
    console.log("Congratulation!!, You Guessed Right Number");
}
else {
    console.log("Sorry, You Guessed Wrong Number");
}
console.log(GuessedNumber);
