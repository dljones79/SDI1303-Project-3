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
			"class": "Monk"
		},
		"2": {
			"name": "Attricane",
			"class": "Ranger"
		},
		"3": {
			"name": "Trevail",
			"class": "Fury"
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





/*

for (var key in players.groupMembers){
	var member = players.groupMembers[key];
	console.log("Hello " + member.name + ".");
};

*/
