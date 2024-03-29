#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let totalBalance = 10000;
console.log(chalk.yellowBright.bold("Welcome to the ATM Machine"));
let pinNumber = await inquirer.prompt([
    {
        name: "pinEntery",
        type: " number",
        message: chalk.cyan("Please enter your PIN: "),
    },
]);
if (pinNumber.pinEntery == 9854) {
    console.log(chalk.bgGreen.black.bold("PIN verified. Access granted!"));
    let operation = await inquirer.prompt([
        {
            message: chalk.yellow("Select an operation:"),
            name: "operation1",
            type: "list",
            choices: [
                chalk.green("Cash withdrawal"),
                chalk.blue("Fast cash"),
                chalk.magenta("Balance check"),
            ],
        },
    ]);
    if (operation.operation1 === chalk.green("Cash withdrawal")) {
        let cashInquiry = await inquirer.prompt([
            {
                message: chalk.yellow("Enter the withdrawal amount:"),
                name: "inquiry",
                type: "number",
            },
        ]);
        console.log(chalk.greenBright(`${cashInquiry.inquiry} successfully withdrawn. Your remaining balance is ${totalBalance - cashInquiry.inquiry}`));
    }
    else if (operation.operation1 === chalk.blue("Fast cash")) {
        let cashFastInquiry = await inquirer.prompt([
            {
                message: chalk.yellow("Enter the withdrawal amount:"),
                name: "fastInquiry",
                type: "number",
            },
        ]);
        console.log(chalk.greenBright(`${cashFastInquiry.fastInquiry} successfully withdrawn. Your remaining balance is ${totalBalance - cashFastInquiry.fastInquiry}`));
    }
    else if (operation.operation1 === chalk.magenta("Balance check")) {
        console.log(chalk.yellow(`Your current balance is ${totalBalance}`));
    }
    else {
        console.log(chalk.red("Invalid operation selected."));
    }
}
else {
    console.log(chalk.red("Incorrect PIN entered. Access denied."));
}
