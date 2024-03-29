#! /usr/bin/env node


import inquirer from "inquirer";
let myBalance = 25000; // Dollar
let pin = 1100;
let pinAns = await inquirer.prompt([
    { name: "pin",
      type: "number",
      message: "Enter your pin",

    },
]);
if(pinAns.pin === pin) {
    console.log("pin code verified successfully");

    let operationAns = await inquirer.prompt([
        { name: "operatons",
          type: "list",
          message: "please select one of the following options",
          choices: ["manual withdraw", "fast cash", "balance inquiry"],

        },
    ]);

if(operationAns.operatons === "manual withdraw") {

let amountAns = await inquirer.prompt([
        { name: "amount",
        type: "number",
        message: "enter your amount",

        },
    ])


if(amountAns.amount <= myBalance) {
    let balance = myBalance - amountAns.amount
    console.log(`your remaining balance is ${balance}`);
}else if(amountAns.amount > myBalance) {
    console.log("you have insufficient balance");
}}
 else if(operationAns.operatons === "fast cash") {
    let userAmount = await inquirer.prompt([
    {
        name: "amount",
        type: "list",
        choices: ["1000", "5000", "10000", "25000"],
    },
  ])
  if(userAmount.amount <= myBalance) {
    let balance2 = myBalance - userAmount.amount
    console.log(`your remaining balance is ${balance2}`);
  }else if(userAmount.amount > myBalance) {
    console.log("you have insufficient balance");
  }
}else if(operationAns.operatons === "balance inquiry") {
    console.log(`your current balance is ${myBalance}`);
}else {
    console.log("invalid pin code please enter valid pin code");
}
};


