//alert("JavaScript works!");

// David Jones
// SDI 1303
// Project 3

//Global Variables
var groupSize = 6,
	hitPoints = 27000,
	mobName = "Avatar of Fear",
	loot1 = "Coif of Enlivened Chance",
	loot2 = "Bangle of Demise",
	loot3 = "Corrupted Plate Greaves of Sorrow"
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
			getSet: function(){
				var set = true;
			},
			groupSet: function(numGroupMembers, warded){
				if (numGroupMembers === 6 && warded === true){
					count = 10;
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
					return readyToPull;
				} else {
					var readyToPull = "You guys are fail. We aren't ready yet.";
					return readyToPull;
				}
			}; // End of groupSet method
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
					return wardingGroup;
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


//players.groupMembers[1].targetSpotted(true);
//console.log(players.groupMembers[3].warding);


/*

for (var key in players.groupMembers){
	var member = players.groupMembers[key];
	console.log("Hello " + member.name + ".");
};

*/
