/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Inventory
const inventory = {
  torch: true,
  map: false,
  sword: true,
  compass: false
}; 

// Introduction
console.log("You wake up in a dark forest. Two paths lie ahead: one to the mountains, one to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

// Mountain Arc
if (choice === "mountains" && inventory.torch) {
  console.log("You safely navigate through the dark mountains.");
  if (readline.question("You find a cave. Do you 'enter' or 'continue' on the path? ") === "enter") {
    console.log(inventory.sword ? "A wild beast appears! You defeat it and find treasure." : "A wild beast attacks! You barely escape.");
  } else {
    console.log("You continue and find a safe resting spot.");
  }

  // Village Arc
} else if (choice === "village") {
  console.log("You arrive at the village marketplace.");
  const marketChoice = readline.question("Visit the 'blacksmith' or the 'merchant'? ");
  
  console.log(marketChoice === "blacksmith" ? "The blacksmith sharpens your sword!" : 
              inventory.compass ? "The merchant gives you a map, improving navigation." : "The merchant sells you a compass.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/