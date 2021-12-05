//random number generator
var  randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max-min+ 1)) + min;

  return value;}


var getPlayerName = function() {
  var name = '';
  while (name ==="" || name === null){
      name = window.prompt("Enter Your robot's name")
  };
  console.log("your robot's name is " + name);
  return name;
}


var playerInfo = {
name: getPlayerName(),
health: 100,
attack: 25,
money :10,
reset:function(){
  this.health=100;
  this.money=10;
  this.attack = 10;
},
refillHealth: function(){
  if (this.money >=7){
    window.alert("refilling player's health by 20 for $7");
  this.health += 20;
this.money -= 7;
}
else {
  window.alert("you don't have enough money");
}
},
upgradeAttack: function() {
  
  if (this.money >= 7){
    window.alert("upgrading players' attack by 6 for $7");
  this.attack += 6;
  this.money -= 7;
  }
  else {
    window.alert("you don't have enough money");
  }
}
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


var enemyInfo = [
  {name: "Roberto",
attack:randomNumber(10,14)} ,
{name: "Amy Android",
attack: randomNumber(10,14)},
{name: "Robo Trumble",
attack: randomNumber(10,14)}
];


var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
// Conditional Recursive Function Call
if (promptFight === "" || promptFight === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  return fightOrSkip();
}
  // Enter the conditional recursive function call here!

  // if player picks "skip" confirm and then stop the loop
  if (promptFight.toLocaleLowerCase()==="skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = Math.max(0,playerInfo.money - 10);
      return true;
    }
  }
}


var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has blowed up!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has blowed up!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

var startGame = function() {
  //reset player
  playerInfo.reset();

  for(var i = 0 ; i < enemyInfo.length; i++){
    if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      debugger;
    // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];

    // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumber(40,60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);
      
    //if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1){
      var storeConfirm = window.confirm("the fight is over, visit the store before next round");
      if (storeConfirm){
              shop();

      }
    };
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      endGame();
   }
  }
  //play again
  endGame();
};

var endGame = function(){

if (playerInfo.health > 0){
window.alert("Great job, you survived the game. You now have a score of " + playerInfo.money + ".");
}
else{
  window.alert("You lost your robot battle.");
};

var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  //restart game
  startGame();
}
else {
  window.alert("thank you for player robot gladiators come back soon"); 
};
};


var shop = function(){
  var shopOptionPrompt = window.prompt(
    "would you like to 1) REFILL your health, 2) UPGRADE your attack or 3) LEAVE the store? lease enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    shopOptionPrompt= parseInt(shopOptionPrompt);
    switch (shopOptionPrompt){
      case 1:
       playerInfo.refillHealth()
        break ;

      case 2:
        playerInfo.upgradeAttack()
        break;

        case 3:
          window.alert('leaving the store');
          break;
        default:
          window.alert("you did not pick a valid option. try again");
          shop();

    }
};



startGame();
 