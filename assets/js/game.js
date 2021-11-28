var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "Fight" || promptFight === "fight" ){
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
}
else if (promptFight === "Skip" || promptFight=== "skip"){
    var skipConfirm = window.confirm("are you sure?");
    if (skipConfirm) {
        playerMoney = playerMoney - 2;
        window.alert(playerName + " has decided to skip this fight")
    }
    else {
        fight()
    }

    window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to choose a valid option. Try again!");
}
};

fight();