// tableau a ne PAS supprimer !important
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
	if (id.includes("red")) {
		newobject = {
			id: id,
			spe: false,
			color: "red"
		}
	} else if (id.includes("blue")) {
		newobject = {
			id: id,
			spe: false,
			color: "blue"
		}
	} else if (id.includes("green")) {
		newobject = {
			id: id,
			spe: false,
			color: "green"
		}
	} else if (id.includes("yellow")) {
		newobject = {
			id: id,
			spe: false,
			color: "yellow"
		}
	} else if (id.includes("black")) {
		newobject = {
			id: id,
			spe: false,
			color: "black"
		}
	}
	return newobject;
}
// 		 {
//		 	id: "blueCgeSns",
// 		 	img: "cards/blue/blueChangerSense.png",
//		 	spe: true,
//		 	color: "blue",
//		 }

function boom(text) {
	const boom = document.createElement("div");
	const boomPS = document.createElement("span");

	boomPS.textContent = " PS: clic pour fermer";
	boom.textContent = "Hey c'est au tour de " + text + ".";

	boom.classList.add("boom");

	boom.appendChild(boomPS);
	$body.appendChild(boom);

	$boom = document.querySelector(".boom");

	$boom.addEventListener("click", () => {
		$boom.remove()
	});
}

function setTheGameVue(player) {
	const otherPlayer = document.createElement("section");
	const gameActive = document.createElement("section");
	const piocheEtDefause = document.createElement("section");
	const tourDuJoueur = document.createElement("tourDuJoueur");

	otherPlayer.id = "otherPlayer";
	gameActive.id = "gameActive";
	piocheEtDefause.id = "piocheEtDefause";
	tourDuJoueur.id = "tourDuJoueur";

	piocheEtDefause.innerHTML = '<div class="cadre"><button class="pioche"><div class="card-pioche"><h3>Pioche</h3></div></button></div>'

	otherPlayer.append()
	
	gameActive.append(piocheEtDefause, tourDuJoueur);

	$GameVue.append(otherPlayer, gameActive);

/*
<section id="otherPlayer"></section>
<section id="gameActive">
	<section id="piocheEtDefause">
		<div class="cadre">
			<button class="pioche">
				<div class="card-pioche">
					<h3>Pioche</h3>
				</div>
			</button>
		</div>
		<div class="cadre">
			<div class="card">
				<p>0</p>
				<h3>blue</h3>
				<p class="right">0</p>
			</div>
		</div>
	</section>
	<section id="tourDuJoueur"></section>
</section>
*/
}

//		queryselector

/*
let $ = document.querySelector("");
*/

const $body = document.querySelector("body");
const $info = document.querySelector("#info");
const $CstAqui = document.querySelector("#aQuiCest");
const $ProcCst = document.querySelector("#auProchainCest");
const $setgame = document.querySelector("#setgame");
const $start = document.querySelector("#start");
const $GameVue = document.querySelector("#GameVue");

let $boom = document.querySelector(".boom");
let $NcardOf = document.querySelectorAll("#NcardOf");
let $nameOf = document.querySelectorAll("#NameOf");
let man = document.querySelectorAll("#mamanTesChiante");

//		addeventlistenner

/*
.addEventListener("click", () => {});
*/

// $boom.addEventListener("click", () => {
// 	$boom.remove()
// });
$start.addEventListener("click", (e) => {
	e.preventDefault();
	let data = new FormData($setgame);
	const NumberOfPalyer = data.get("nombreJoueur");
	if (NumberOfPalyer > 1) {
		AllPlayer = addorset(NumberOfPalyer, true);
		setTheGameVue();
	}
});

// test and debug zone

document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World", $body);
});

	// let AllPlayer = addorset(4, true);
	// addorset(0, false, 2, AllPlayer[3]);
	// deleteAcard("blue0", AllPlayer[3]);

/*

<div class="card">
	<p>0</p>
	<h3>blue</h3>
	<p class="right">0</p>
</div>

<div class="card">
	<p>
		<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z">
			</path>
		</svg>
	</p>
	<h3>reverse</h3>
	<p class="right">
		<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z">
			</path>
		</svg>
	</p>
</div>

<div class="card">
	<p>
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
			viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff"
				stroke="none">
				<path
					d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" />
			</g>
		</svg>
	</p>
	<h3>block</h3>
	<p class="right">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
			viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff"
				stroke="none">
				<path
					d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" />
			</g>
		</svg>
	</p>
</div>

<div class="player">
	<h2><span id="NameOf">"1"</span> a <span id="NcardOf">1</span> carte<span id="MamanTesChiante"></span></h2>
</div>

<section id="otherPlayer"></section><section id="gameActive"><section id="piocheEtDefause"><div class="cadre"><button class="pioche"><div class="card-pioche"><h3>Pioche</h3></div></button></div><div class="cadre"><div class="card"><p>0</p><h3>blue</h3><p class="right">0</p></div></div></section><section id="tourDuJoueur"></section></section>

*/
