// tableau a ne PAS supprimer !important
const AllcardNameAndColor = [
	{
		color: ,
		name: "",
	}
]
const Allcard = {
	red: {
		num: [
			"red0",
			"red1",
			"red2",
			"red3",
			"red4",
			"red5",
			"red6",
			"red7",
			"red8",
			"red9",
		],
		spe: ["redPastrn", "redCgeSns", "redAddtwo"],
	},
	green: {
		num: [
			"green0",
			"green1",
			"green2",
			"green3",
			"green4",
			"green5",
			"green6",
			"green7",
			"green8",
			"green9",
		],
		spe: ["greenPastrn", "greenCgeSns", "greenAddtwo"],
	},
	blue: {
		num: [
			"blue0",
			"blue1",
			"blue2",
			"blue3",
			"blue4",
			"blue5",
			"blue6",
			"blue7",
			"blue8",
			"blue9",
		],
		spe: ["bluePastrn", "blueCgeSns", "blueAddtwo"],
	},
	yellow: {
		num: [
			"yellow0",
			"yellow1",
			"yellow2",
			"yellow3",
			"yellow4",
			"yellow5",
			"yellow6",
			"yellow7",
			"yellow8",
			"yellow9",
		],
		spe: ["yellowPastrn", "yellowCgeSns", "yellowAddtwo"],
	},
	black: ["blackaddfour", "blackchangeColor"],
};
// function zone
//		initialise les deck de tout les joueurs
function setGameOrAdd(NumberOfPlayer = Number, howManyCard = Number, isadd) {
	if (NumberOfPlayer < 2 && isadd == null) {
		console.log("pas assez de joueur");
		return "error";
	}

	let newSetForAllPlayer = [];
	let cardsOfOnePlayer = [];



	for (let i = 0; i < NumberOfPlayer; i++) {
		cardsOfOnePlayer = [];

		for (let y = 0; y < howManyCard; y++) {
			let random = Math.floor(Math.random() * 14);
			if (random <= 3) {

				// red
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("red", "num"))) : cardsOfOnePlayer.push(createObject(selectCard("red", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("red", "spe"))) : cardsOfOnePlayer.push(createObject(selectCard("red", "spe")));
				}

			} else if (random >= 4 && random <= 6) {
				//  blue
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("blue", "num"))) : cardsOfOnePlayer.push(createObject(selectCard("blue", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("blue", "spe"))) : cardsOfOnePlayer.push(createObject(selectCard("blue", "spe")));
				}

			} else if (random >= 7 && random <= 9) {
				//  yellow
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("yellow", "num"))) : cardsOfOnePlayer.push(createObject(selectCard("yellow", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("yellow", "spe"))) : cardsOfOnePlayer.push(createObject(selectCard("yellow", "spe")));
				}

			} else if (random >= 10 && random <= 12) {
				//  green
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("green", "num"))) : cardsOfOnePlayer.push(createObject(selectCard("green", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("green", "spe"))) : cardsOfOnePlayer.push(createObject(selectCard("green", "spe")));
				}

			} else {
				random = Math.floor(Math.random() * 2);
				isadd != null ? isadd.push(createObject(Allcard.black[random])) : cardsOfOnePlayer.push(createObject(Allcard.black[random]));
			}
		}
		newSetForAllPlayer.push(cardsOfOnePlayer);
		if (isadd != null) {
			return isadd
		}
	}
	return newSetForAllPlayer;
};
//		selectionne une carte aléatoire
function selectCard(colors = String, type = String) {
	let select = Math.floor(Math.random() * Allcard[colors][type].length);
	return Allcard[colors][type][select];
};
// 		pour plus facilement appeler la fonction
function addorset(howmany, whatis, addcard, player) {
	if (whatis) {
		return setGameOrAdd(howmany, 7, null);
	}
	return setGameOrAdd(1, addcard, player);
};
//		supprime une carte
function deleteAcard(id = String, player = []) {
	for (let i = 0; i < player.length; i++) {
		if (player[i].id == id) {
			player.splice(i, 1);
			break;
		}
	}
	return player;
};
// Résultat attendu : 1
//    id attendue => "red0" "blue6" "blackaddfour" ....
function createObject(id = "") {
	let newobject = {
		id: id,
		visual: "",
		spe: Boolean,
	};
	for (let i = 0; i < AllcardNameAndColor.length; i++) {
		if (AllCardVisual[i].includes(id)) {
			if (
				AllCardVisual[i].includes("Addtwo") ||
				AllCardVisual[i].includes("CgeSns") ||
				AllCardVisual[i].includes("Pastrn") ||
				AllCardVisual[i].includes("black")
			) {
				if (AllCardVisual[i].includes("red")) {
					newobject = {
						id: id, visual: AllCardVisual[i],
						spe: true, color: "red"
					}
				} else if (AllCardVisual[i].includes("blue")) {
					newobject = {
						id: id,
						visual: AllCardVisual[i],
						spe: true,
						color: "blue" 
					}
				} else if (AllCardVisual[i].includes("green"))
					{ newobject = {
						id: id, visual:
						AllCardVisual[i],
						spe: true,
						color: "green"
					}
				} else if (AllCardVisual[i].includes("yellow")) {
					newobject = {
						id: id,
						visual: AllCardVisual[i],
						spe: true,
						color: "yellow"
					}
				} else if (AllCardVisual[i].includes("black")) {
					newobject = {
						id: id,
						visual: AllCardVisual[i],
						spe: true,
						color: "black"
					}
				}
				break;
			}
			if (AllCardVisual[i].includes("red")) {
				newobject = { id: id, visual: AllCardVisual[i], spe: false, color: "red" }
			} else if (AllCardVisual[i].includes("blue")) {
				newobject = { id: id, visual: AllCardVisual[i], spe: false, color: "blue" } 
			} else if (AllCardVisual[i].includes("green")) {
				newobject = { id: id, visual: AllCardVisual[i], spe: false, color: "green" } 
			} else if (AllCardVisual[i].includes("yellow")) {
				newobject = { id: id, visual: AllCardVisual[i], spe: false, color: "yellow" } 
			} else if (AllCardVisual[i].includes("black")) {
				newobject = { id: id, visual: AllCardVisual[i], spe: false, color: "black" }
			}
			break;
		}
	}
	return newobject;

};
/*
EXEMPLE D'OBJECT QUE RENVOIE CETTE FONCTION
{
	id: "blueCgeSns",
	img: "cards/blue/blueChangerSense.png",
	spe: true,
	color: "blue",
}
*/

//		queryselector

//		addeventlistenner

// test and debug zone

document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World");
});
/*
	let AllPlayer = addorset(4, true);

	addorset(0, false, 16, AllPlayer[3])
	
	deleteAcard("blue0", AllPlayer[3])
*/
