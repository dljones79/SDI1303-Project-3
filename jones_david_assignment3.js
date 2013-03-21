//alert("JavaScript works!");

// David Jones
// SDI 1303
// Project 3

//Global Variables
var groupSize 	= 6,
	hitPoints 	= 27000,
	mobName 	= "Avatar of Fear",
	loot1 		= "Coif of Enlivened Chance",
	loot2 		= "Bangle of Demise",
	loot3 		= "Corrupted Plate Greaves of Sorrow",
	tgtSpot		= true
; // End of Global Variables

// JSON Data
var players = {
	"groupMembers": {
		"1": {
			"name": "Attritank",
			"class": "Monk",
			targetSpotted: function(spotted){						// Method: Procedure
				if (spotted === true){
					console.log("I have spotted the target!");
					players.groupMembers[3].warding = true;			// Method: Mutator
				} else {
					console.log("Let's wait for a respawn.");
				}
			},
			groupSet: function(numGroupMembers, warded){
				if (numGroupMembers === 6 && warded === true){
					var countDown = function(){
						for (var x = 10; x > 0; x--){
							if (x != 1){
								var pluralization = " seconds";
							} else { var pluralization = " second"};
						console.log("Pulling in " + x + pluralization + ".");
						}
					}; // End of countDown
					var readyToPull = "We are ready to pull!";
					countDown();
					return readyToPull;								// Return String
				} else {
					var readyToPull = "You guys are fail. We aren't ready yet.";
					return readyToPull;
				}
			} // End of groupSet method
		},
		"2": {
			"name": "Attricane",
			"class": "Ranger"
		},
		"3": {
			"name": "Trevail",
			"class": "Fury",
			"warding": false,
			wardGroup: function(ready){								// Method: Function
				if (ready === true){
					var wardingGroup = true;
					console.log("Warding now!");
					return wardingGroup;							// Return Boolean
				} else {
					var wardingGroup = false;
					console.log("Hang on! I can't find my ward.");
					return wardingGroup;
				}
			}
		},
		"4": {
			"name": "Royale",
			"class": "Dirge"
		},
		"5": {
			"name": "Mezzem",
			"class": "Illusionist"
		},
		"6": {
			"name": "Kataklysm",
			"class": "Warlock"
		}
	} //End of groupMembers object
}; // End of players Variable (JSON)

// Number function to calculate dps (Damage Per Second) needed to kill mob before wipe.
var dpsNeeded = function(hitPoints){
	var timeToWipe = 60;
	var dps = hitPoints/timeToWipe;
	while (hitPoints > 0){
		console.log ("Damaging " + mobName + " by " + dps + " damage per second!");
		console.log (hitPoints + " health left!");
		hitPoints -= dps;
	}
	var mobDefeated = "We have destroyed " + mobName + " in " + timeToWipe +
		" seconds, at " + dps + " damage per second!";
	return mobDefeated;											// Return String
}; // End of dpsNeeded function

// String function telling what was in the treasure chest from the kill.
var loot = function(item1, item2, item3){
	var spoilsOfWar = "The treasure chest contains the " + item1 + ", a " + item2 +
		", and the " + item3 + ". Hooray!";
	return spoilsOfWar;											// Return String
}; //End of loot function

// Function to build an array of group member names and output thanks to each.
var thankGroup = function(){
	var x = 0;
	var	grpMemNames = [];
	
	for (var key in players.groupMembers){
		var mem = players.groupMembers[key];
		grpMemNames[x] = mem.name;
		console.log("Thank you " + mem.name + " for the group.");
		x++;
	}
	return grpMemNames;											// Return Array
}; // End of thankGroup

//Main Code

players.groupMembers[1].targetSpotted(tgtSpot);

players.groupMembers[3].wardGroup(players.groupMembers[3].warding);

players.groupMembers[1].groupSet(groupSize, players.groupMembers[3].warding);

console.log(dpsNeeded(hitPoints));

console.log(loot(loot1, loot2, loot3));

console.log(thankGroup());

console.log("On to greater victories!");

