// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let maxDataVal = 5000; // max data value

// *****************************************************
// INITIALIZE ACCOUNTS ARRAY
// *****************************************************
let accounts = [];
for (let i = 0; i < 50; i++) {
  accounts.push(Math.floor(Math.random() * (maxDataVal + 1)));
}
// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  // Prompt the user for the index of an account and the amount to deposit into that account.
  let index = +prompt("Account Index:");
  let val = +prompt("Deposit Amount:");
  // Modify the accounts array to reflect the deposit.
  accounts[index - 1] += val;
  // Adjust the maxDataVal variable if necessary.
  if (accounts[index - 1] > maxDataVal) {
    maxDataVal = accounts[index - 1];
  }
  // Use the outputEl to provide a confirmation message.

  outputEl.innerHTML = `Deposited ${val}`;
}

function withdrawal() {
  // Prompt the user for the index of an account and the amount to withdraw from that account.
  let index = +prompt("Account Index:");
  let val = +prompt("Deposit Amount:");
  // Modify the accounts array to reflect the withdrawal.
  accounts[index - 1] -= val;
  // Check to assure that the account has enough funds.
  if (accounts[index - 1] < 0) {
    val = val + accounts[index - 1];
    accounts[index - 1] = 0;
  }
  // Use the outputEl to provide a confirmation message.

  outputEl.innerHTML = `Withdrawed ${val}`;
}

function countUnder2000() {
  // Count the number of accounts that are less than 2000
  let count = 0;
  for (let i = 0; i < 50; i++) {
    if (accounts[i] < 2000) {
      count++;
    }
  }
  // Use the outputEl to display the results of the count.

  outputEl.innerHTML = `${count} Accounts Under $2000`;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000.
  // Modify the investment account array to apply this donation.
  let count = 0;
  for (let i = 0; i < 50; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      count += 500;
    }
  }
  // Use the outputEl to display the total amount of money that was donated.
  outputEl.innerHTML = `Generous Donor Gifted ${count}`;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  let count = 0;
  let steal = 0;
  for (let i = 0; i < 50; i++) {
    steal = accounts[i] * 0.05;
    count += steal;
    accounts[i] -= steal;
  }
  // Use the outputEl to display the total amount that was stolen.

  outputEl.innerHTML = `Hacker Attack Stole ${count}`;
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Display Data
drawArray(accounts, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }

  // Redraw array to show any changes
  drawArray(accounts, maxDataVal);
}

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
