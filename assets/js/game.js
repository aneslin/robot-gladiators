var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  enemyHealth = enemyHealth - playerAttack;

  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has "+ enemyHealth + " remaining");

  if (enemyHealth <= 0){
    window.alert(enemyName +" has blowed up!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " remaining")
  }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack

  // Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " remaining");
};

fight();