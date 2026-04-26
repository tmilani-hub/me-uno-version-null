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
//		initialise les deck de tout les joueurs / si isadd != null alors isadd = ALLplayer[index].cardOF
function setGameOrAdd(NumberOfPlayer = Number, howManyCard = Number, isadd) {
	if (NumberOfPlayer < 2 && isadd == null) {
		console.log("pas assez de joueur");
		return "error";
	}

	let newSetForAllPlayer = [];
	let cardsOfOnePlayer = [];

	for (let i = 0; i < NumberOfPlayer; i++) {
		cardsOfOnePlayer = { cardOF: [], name: "" };

		for (let y = 0; y < howManyCard; y++) {
			let random = Math.floor(Math.random() * 14);
			if (random <= 3) {
				// red
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("red", "num"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("red", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("red", "spe"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("red", "spe")));
				}
			} else if (random >= 4 && random <= 6) {
				//  blue
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("blue", "num"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("blue", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("blue", "spe"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("blue", "spe")));
				}
			} else if (random >= 7 && random <= 9) {
				//  yellow
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("yellow", "num"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("yellow", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("yellow", "spe"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("yellow", "spe")));
				}
			} else if (random >= 10 && random <= 12) {
				//  green
				random = Math.floor(Math.random() * 5);
				if (random <= 3) {
					//  num
					isadd != null ? isadd.push(createObject(selectCard("green", "num"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("green", "num")));
				} else {
					//  spe
					isadd != null ? isadd.push(createObject(selectCard("green", "spe"))) : cardsOfOnePlayer.cardOF.push(createObject(selectCard("green", "spe")));
				}
			} else {
				random = Math.floor(Math.random() * 2);
				isadd != null ? isadd.push(createObject(Allcard.black[random])) : cardsOfOnePlayer.cardOF.push(createObject(Allcard.black[random]));
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
	if (colors == "black") {
		select = Math.floor(Math.random() * Allcard[colors].length);
		return Allcard[colors][select];
	}
	return Allcard[colors][type][select];
};
// 		pour plus facilement appeler la fonction selectCard 
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
		spe: Boolean,
		color: "",
	};
	if (id.includes("red")) {
		newobject = {
			id: id,
			spe: id.includes("Pastrn") || id.includes("CgeSns") || id.includes("Addtwo") || id.includes("black") ? true : false,
			color: "red"
		}
	} else if (id.includes("blue")) {
		newobject = {
			id: id,
			spe: id.includes("Pastrn") || id.includes("CgeSns") || id.includes("Addtwo") || id.includes("black") ? true : false,
			color: "blue"
		}
	} else if (id.includes("green")) {
		newobject = {
			id: id,
			spe: id.includes("Pastrn") || id.includes("CgeSns") || id.includes("Addtwo") || id.includes("black") ? true : false,
			color: "green"
		}
	} else if (id.includes("yellow")) {
		newobject = {
			id: id,
			spe: id.includes("Pastrn") || id.includes("CgeSns") || id.includes("Addtwo") || id.includes("black") ? true : false,
			color: "yellow"
		}
	} else if (id.includes("black")) {
		newobject = {
			id: id,
			spe: id.includes("Pastrn") || id.includes("CgeSns") || id.includes("Addtwo") || id.includes("black") ? true : false,
			color: "black"
		}
	}
	return newobject;
	// 		 {
	//		 	id: "blueCgeSns",
	//		 	spe: true,
	//		 	color: "blue",
	//		 }
}
// affiche du text en prenant tout l'écran
// longueur max d'un message "test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test longueur test test tes"
function boom(text, presision) {
	const boom = document.createElement("div");
	const boomPS = document.createElement("span");

	boom.textContent = "Hey c'est au tour de " + text + "!";
	
	if (presision != undefined) {
		boom.textContent = presision;
	}

	boomPS.textContent = " PS: clic pour fermer";

	boom.classList.add("boom");

	boom.appendChild(boomPS);
	$body.appendChild(boom);

	$boom = document.querySelectorAll(".boom");

	for (let i = 0; i < $boom.length; i++) {
		$boom[i].addEventListener("click", () => {
			$boom[i].remove()
		});
	}
}
// nomme les joueur grace a une succesion de form
function GiveMeAname(J_num) {
	const NTP = document.createElement("section");
	const F_NN = document.createElement("form");
	const title = document.createElement("h4");
	const INPtext = document.createElement("input");
	const yeah = document.createElement("button");

	NTP.id = "nameThePlayer";

	F_NN.classList.add("NeedName");
	INPtext.classList.add("INPtext");
	yeah.classList.add("normalbtn");

	INPtext.setAttribute("maxlength", "16");
	yeah.setAttribute("minlength", "1");
	INPtext.setAttribute("name", "HeNameMe");
	INPtext.setAttribute("type", "text");
	INPtext.setAttribute("placeholder", "J" + J_num);
	title.textContent = "Nomme le joueur " + J_num + ".";

	yeah.textContent = "Suivant";

	NTP.appendChild(F_NN);
	F_NN.append(title, INPtext, yeah);

	yeah.addEventListener("click", (e) => {
		e.preventDefault();
		let data = new FormData(F_NN);
		let name = data.get("HeNameMe");
		let ok = true;
		for (let i = 0; i < AllPlayer.length; i++) {
			if (name === "" || name == AllPlayer[i].name) {
				console.log("the input is empty or double name");
				title.textContent = "Nomme le stp"
				ok = false;
				break;
			}
		}
		if (ok) {
			console.log("merci");
			AllPlayer[J_num - 1].name = name;
			NTP.remove();
			if (J_num < AllPlayer.length) {
				GiveMeAname(J_num + 1);
			} else {
				setTheGameVue(AllPlayer);
			}
		} else {
			title.textContent = "Nom du joueur déja utiliser ou aucun nom donné.";
			INPtext.setAttribute("placeholder", "nomme moi stp");
		}
	});


	$GameVue.appendChild(NTP);
	/*
	<section id="nameThePlayer">
		<form class="NeedName">
			<h4>name the player 1</h4>
			<input maxlength="16" name="HeNameMe" class="INPtext" placeholder="furie" type="text">
			<button class="normalbtn" type="submit">suivant</button>
		</form>
	</section>
	*/
}
// creer toute les balise pour jouer
function setTheGameVue(player) {
	const otherPlayer = document.createElement("section");
	const gameActive = document.createElement("section");
	const piocheEtDefause = document.createElement("section");
	const tourDuJoueur = document.createElement("tourDuJoueur");

	otherPlayer.id = "otherPlayer";
	gameActive.id = "gameActive";
	piocheEtDefause.id = "piocheEtDefause";
	tourDuJoueur.id = "tourDuJoueur";

	let tab = [];
	addorset(null, false, 1, tab);
	for (let i = 0; tab[0].id.includes("black") && i < 100; i++) {
		tab = [];
		addorset(null, false, 1, tab);
	}
	carteDeDefause = tab[0];

	for (let i = 0; i < player.length; i++) {
		const div = document.createElement("div");
		const h2 = document.createElement("h2");

		div.classList.add("player");

		h2.textContent = ""; // appeler la Fonction actulize pour actualiser ce text

		h2.setAttribute("id", "infoDeJ-num");

		div.appendChild(h2);

		otherPlayer.appendChild(div);
	}
	/*
		<div class="player">
			<h2>nom a <span id="NcardOf">1</span> carte<span id="MamanTesChiante"></span></h2>
		</div>
	*/

	gameActive.append(piocheEtDefause, tourDuJoueur);

	$GameVue.append(otherPlayer, gameActive);

	boom(AllPlayer[0].name);
	actulize();
	console.log(AllPlayer);

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
// actualise les text selont comment la partie est avancer
function actulize() {
	// $infotext.textContent = "c'est le tour de " + "\\ Le prochain c'est";
	if (horlosens) {
		if (auTourDe + 1 < AllPlayer.length) {
			$infotext.textContent = "C'est le tour de " + AllPlayer[auTourDe].name + " \\ Le prochain c'est " + AllPlayer[auTourDe + 1].name;
		} else {
			$infotext.textContent = "C'est le tour de " + AllPlayer[auTourDe].name + " \\ Le prochain c'est " + AllPlayer[0].name;
		}
	} else {
		if (auTourDe - 1 > -1) {
			$infotext.textContent = "C'est le tour de " + AllPlayer[auTourDe].name + " \\ Le prochain c'est " + AllPlayer[auTourDe - 1].name;
		} else {
			$infotext.textContent = "C'est le tour de " + AllPlayer[auTourDe].name + " \\ Le prochain c'est " + AllPlayer[AllPlayer.length - 1].name;
		}
	}
	let $infoDeJ_num = document.querySelectorAll("#infoDeJ-num");
	for (let i = 0; i < $infoDeJ_num.length; i++) {
		if (AllPlayer[i].cardOF.length == 1) {
			$infoDeJ_num[i].textContent = "Le joueur " + AllPlayer[i].name + " a " + AllPlayer[i].cardOF.length + " carte .";
		} else {
			$infoDeJ_num[i].textContent = "Le joueur " + AllPlayer[i].name + " a " + AllPlayer[i].cardOF.length + " cartes .";
		}
	}

	vueCardOf(AllPlayer[auTourDe]);

	const PeD = document.querySelector("#piocheEtDefause");

	PeD.innerHTML = '';

	const btnPioche = document.createElement("button");
	const divPioche = document.createElement("div");
	const textPioche = document.createElement("h3");

	btnPioche.classList.add("pioche");
	divPioche.classList.add("card-pioche");

	textPioche.textContent = "Pioche";

	divPioche.appendChild(textPioche);
	btnPioche.appendChild(divPioche);

	PeD.appendChild(btnPioche);
	// 	btnPioche =	<button class="pioche"><div class="card-pioche"><h3>Pioche</h3></div></button>

	pioche = document.querySelector(".pioche");

	pioche.addEventListener("click", () => {
		AllPlayer[auTourDe].cardOF = addorset(null, false, 1, AllPlayer[auTourDe].cardOF);
		if (horlosens) {
			if (auTourDe + 1 < AllPlayer.length) {
				auTourDe = auTourDe + 1;
			} else {
				auTourDe = 0;
			}
		} else {
			if ((auTourDe - 1) > -1) {
				auTourDe = auTourDe - 1;
			} else {
				auTourDe = AllPlayer.length - 1;
			}
		}
		boom(AllPlayer[auTourDe].name);
		boom(null, "tu a piocher la carte " + AllPlayer[horlosens ? auTourDe - 1 == -1 ? AllPlayer.length - 1 : auTourDe - 1 : auTourDe + 1 > AllPlayer.length - 1 ? 0 : auTourDe + 1].cardOF[AllPlayer[horlosens ? auTourDe - 1 == -1 ? AllPlayer.length - 1 : auTourDe - 1 : auTourDe + 1 > AllPlayer.length - 1 ? 0 : auTourDe + 1].cardOF.length - 1].id);
		actulize();
	});

	let laCarteDefusseHtml = createCard(carteDeDefause, true);

	console.log(laCarteDefusseHtml, carteDeDefause);
	PeD.prepend(laCarteDefusseHtml);
	// $infoDeJ_num[i].textContent = "le joueur " + nomJ + " a " + NombreDeCarte + " cartes ."
}
// affiche les carte du joueur selectionner
function vueCardOf(P_Num = []) {
	const $activePlayer = document.querySelector("#tourDuJoueur");
	$activePlayer.innerHTML = '';
	let tab = [];
	P_Num.cardOF.sort()
	for (let i = 0; i < P_Num.cardOF.length; i++) {
		const card = createCard(P_Num.cardOF[i]);
		tab.push(card);
	}
	for (let i = 0; i < tab.length; i++) {
		$activePlayer.appendChild(tab[i]);
	}
}
// creer une carte grace a un object (Object={id: "blackAddFour", spe: true, color: "black"} ou {id: "blue0", spe: false, color: "blue"})
// !!!!!!!!!!!!!! faire addEvent pour la carte
function createCard(card, ForDefausse) {
	const cardDiv = document.createElement("button");
	const NameCard = document.createElement("h3");
	const NumCard = document.createElement("p");
	const NumCardRigth = document.createElement("p");

	cardDiv.classList.add("card");
	NumCardRigth.classList.add("right");

	cardDiv.append(NumCard, NameCard, NumCardRigth);

	if (card.spe && card.id.includes("black")) {
		if (card.id.includes("addfour")) {
			cardDiv.style.backgroundColor = "rgb(44, 44, 44)";
			NumCard.textContent = "+4";
			NumCardRigth.textContent = "+4";
			NameCard.textContent = "noir";
		} else {
			cardDiv.innerHTML = "";
			cardDiv.classList.remove("card");
			cardDiv.classList.add("CouleurChange");

			let divRed = document.createElement("div");
			let divBlue = document.createElement("div");
			let divYel = document.createElement("div");
			let divGreen = document.createElement("div");

			divRed.style.backgroundColor = "rgb(216, 52, 18)";
			divBlue.style.backgroundColor = "rgb(0, 121, 207)";
			divYel.style.backgroundColor = "rgb(251, 227, 10)";
			divGreen.style.backgroundColor = "rgb(36, 215, 27)";

			divRed.style.borderRadius = "16px 0px 0px 0px";
			divBlue.style.borderRadius = "0px 16px 0px 0px";
			divYel.style.borderRadius = "0px 0px 0px 16px";
			divGreen.style.borderRadius = "0px 0px 16px 0px";

			divRed.classList.add("couleurQuart");
			divBlue.classList.add("couleurQuart");
			divYel.classList.add("couleurQuart");
			divGreen.classList.add("couleurQuart");

			cardDiv.append(divRed, divBlue, divYel, divGreen);
		}
	} else {
		for (let i = 0; i < 10; i++) {
			if (card.id.includes(i)) {
				NumCard.textContent = i;
				NumCardRigth.textContent = i;
			}
		}
	}
	if (card.id.includes("blue")) {
		cardDiv.style.backgroundColor = "rgb(0, 121, 207)";
		NameCard.textContent = "Bleu";
		if (card.id.includes("Pastrn")) {
			NumCard.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
			NumCardRigth.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
		} else if (card.id.includes("CgeSns")) {
			NumCard.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
			NumCardRigth.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
		} else if (card.id.includes("Addtwo")) {
			NumCard.textContent = "+2";
			NumCardRigth.textContent = "+2";
			NameCard.textContent = "Bleu";
		}
	} else if (card.id.includes("green")) {
		cardDiv.style.backgroundColor = "rgb(36, 215, 27)";
		NameCard.textContent = "Vert";
		if (card.id.includes("Pastrn")) {
			NumCard.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
			NumCardRigth.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
		} else if (card.id.includes("CgeSns")) {
			NumCard.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
			NumCardRigth.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
		} else if (card.id.includes("Addtwo")) {
			NumCard.textContent = "+2";
			NumCardRigth.textContent = "+2";
		}
	} else if (card.id.includes("red")) {
		cardDiv.style.backgroundColor = "rgb(216, 52, 18)";
		NameCard.textContent = "Rouge";
		if (card.id.includes("Pastrn")) {
			NumCard.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
			NumCardRigth.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
		} else if (card.id.includes("CgeSns")) {
			NumCard.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
			NumCardRigth.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
		} else if (card.id.includes("Addtwo")) {
			NumCard.textContent = "+2";
			NumCardRigth.textContent = "+2";
			NameCard.textContent = "Rouge";

		}
	} else if (card.id.includes("yellow")) {
		cardDiv.style.backgroundColor = "rgb(251, 227, 10)";
		NameCard.textContent = "Jaune";
		if (card.id.includes("Pastrn")) {
			NumCard.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';
			NumCardRigth.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>';

		} else if (card.id.includes("CgeSns")) {
			NumCard.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
			NumCardRigth.innerHTML = '<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>';
		} else if (card.id.includes("Addtwo")) {
			NumCard.textContent = "+2";
			NumCardRigth.textContent = "+2";
			NameCard.textContent = "Jaune";
		}
	}

	if (ForDefausse) {
		cardDiv.classList.add("defause");
	} else {
		cardDiv.addEventListener("click", () => {
			if (verrifyCard(card, carteDeDefause)) {
				ALLcardVue = document.querySelectorAll(".card");
				for (let i = 0; i < ALLcardVue.length; i++) {
					ALLcardVue[i].classList.remove("peupas");
				}
				cardDiv.remove();
				deleteAcard(card.id, AllPlayer[auTourDe].cardOF);
				carteDeDefause = card;

				if (card.spe) {
					// ici fare en cas de carte a effet
				}

				if (horlosens) {
					if (auTourDe + 1 < AllPlayer.length) {
						auTourDe = auTourDe + 1;
					} else {
						auTourDe = 0;
					}
				} else {
					if ((auTourDe - 1) > -1) {
						auTourDe = auTourDe - 1;
					} else {
						auTourDe = AllPlayer.length - 1;
					}
				}
				actulize();
				boom(AllPlayer[auTourDe].name);
			} else {
				console.log("non compatible");
				cardDiv.classList.add("peupas");
			}
		});
	}

	return cardDiv;

	/*
		rgb(44, 44, 44)     black
		rgb(0, 121, 207)    blue
		rgb(36, 215, 27)    green
		rgb(216, 52, 18)    red
		rgb(251, 227, 10)   yellow
	
		<div class="card">
			<p>0</p>
			<h3>blue</h3>
			<p class="right">0</p>
		</div>
	*/
}
// verrifi si une carte1 peut etre poser sur une carte2 exmple : {id: "blue0", spe: false, color: blue} and {id: "red0", spe: false, color: red} return true car on peut posez la carte 1 sur la deuxieme
// si cart2.id == "black..." alors il faut mettre une couleur dans le troisieme paramettre
function verrifyCard(carte1, carte2, CAsk) {
	if (carte1 == carte2) return true;
	if (carte1.spe) {
		if (carte1.color == "black") {
			return true;
		} else if (carte1.color == carte2.color) {
			return true;
		} else {
			if (carte1.id.includes("addtwo") && carte2.id.includes("addtwo") || carte1.id.includes("Pastrn") && carte2.id.includes("Pastrn") || carte1.id.includes("CgeSns") && carte2.id.includes("CgeSns")) {
				return true;
			}
		}
	} else if (carte1.color == carte2.color) {
		return true;
	} else {
		for (let i = 0; i < 10; i++) {
			if (carte1.id.includes(i) && carte2.id.includes(i)) {
				return true;
			}
		}
	}
	if (carte1.color == CAsk) {
		return true
	}
	return false;
}

//		queryselector zone et autre
/*
let $ = document.querySelector("");
*/
// const $variable = htmlElement || const $values = [htmlElement, htmlElement]
const $body = document.querySelector("body"); // body: Balise html prenant en compte toute les balises visible (ou non) de la page web.
const $infotext = document.querySelector("#infotext"); // h3 info en direct sur la partie
const $setgame = document.querySelector("#setgame"); // form pour commencer une partie
const $start = document.querySelector("#start"); // boutton pour commencer le jeu
const $GameVue = document.querySelector("#GameVue"); // section vue du jeu
// let variable = value;
// let zone (not js value)
let $boom = document.querySelectorAll(".boom"); // BOOOOMM
let ALLcardVue = document.querySelectorAll(".card"); // toute les carte en html
let pioche = document.querySelector(".pioche"); // la pioche
// let zone (only js value)
let AllPlayer = [{ name: "", cardOF: [] }, { name: "", cardOF: [] }]; // tous les joueur
let auTourDe = 0; // j'ai besoin d'expliquer ?
let horlosens = true; // en gros ++ ou --
let carteDeDefause = {}; // carte dans la defausse
let colorASK = ""; // couleur demander dans le cas d'une carte noir posser

//		addeventlistenner zone

/*
.addEventListener("click", () => {});
*/
for (let i = 0; i < $boom.length; i++) {
	$boom[i].addEventListener("click", () => {
		$boom[i].remove()
	});
}

$start.addEventListener("click", (e) => {
	e.preventDefault();
	let data = new FormData($setgame);
	const NumberOfPalyer = data.get("nombreJoueur");
	if (NumberOfPalyer > 1) {
		let textInput = document.querySelector("#nombreJoueur");
		textInput.value = "";
		$GameVue.innerHTML = "";
		AllPlayer = addorset(NumberOfPalyer, true);
		GiveMeAname(1);
	}
	// c'est le tour de //. \ Le prochain c'est 
});

// test and debug zone

document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World");
	// AllPlayer = addorset(4, true);
	// console.log(AllPlayer, verrifyCard(AllPlayer[0].cardOF[5], AllPlayer[1].cardOF[4]));
	// console.log(verrifyCard({id: '', spe: true, color: 'black'}, {id: 'blackaddfour', spe: true, color: 'black'}, "yellow"));
});
// let AllPlayer = addorset(4, true);
// addorset(null, false, 2, AllPlayer[3]);
// deleteAcard("blue0", AllPlayer[3]);


/* comment zone

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
<svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M15.708 31.015l15.572-3.735-4.546-15.334-3.43 5.932-3.426-1.975 1.683-2.902-10.232-5.889 2.576-4.442-11.695 2.797 3.414 11.484 2.576-4.442 3.467 1.995-2.72 4.705 10.191 5.875-3.43 5.932z"></path></svg>

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
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M6115 12794 c-290 -21 -375 -29 -532 -50 -1734 -232 -3290 -1141 -4315 -2524 -576 -776 -987 -1725 -1163 -2683 -73 -399 -100 -704 -100 -1137 0 -362 9 -505 51 -817 187 -1406 829 -2715 1814 -3701 995 -996 2300 -1638 3713 -1826 312 -42 455 -51 817 -51 362 0 505 9 817 51 1732 231 3290 1142 4315 2524 576 776 987 1725 1163 2683 73 399 100 704 100 1137 0 362 -9 505 -51 817 -187 1406 -829 2715 -1814 3701 -1059 1060 -2457 1713 -3980 1857 -153 15 -718 28 -835 19z m690 -1364 c650 -60 1227 -220 1801 -499 539 -262 941 -548 1360 -966 402 -401 683 -792 943 -1315 358 -721 535 -1463 535 -2250 0 -434 -44 -788 -151 -1215 -126 -504 -345 -1021 -621 -1465 -60 -97 -215 -322 -261 -380 l-20 -25 -3536 3535 c-1944 1944 -3535 3538 -3535 3542 0 9 238 178 360 255 459 290 991 518 1505 646 337 84 624 127 1010 151 97 6 491 -3 610 -14z m-858 -5482 c1943 -1943 3533 -3536 3533 -3540 0 -9 -238 -178 -360 -255 -553 -349 -1198 -602 -1825 -717 -512 -93 -1019 -107 -1535 -40 -749 96 -1520 386 -2163 812 -288 190 -500 364 -763 627 -402 401 -683 792 -943 1315 -358 721 -535 1463 -535 2250 0 434 44 788 151 1215 140 560 396 1137 718 1614 89 133 176 251 184 251 3 0 1596 -1590 3538 -3532z" /></g></svg>

<div class="player">
	<h2><span id="NameOf">"1"</span> a <span id="NcardOf">1</span> carte<span id="MamanTesChiante"></span></h2>
</div>

<section id="otherPlayer"></section><section id="gameActive"><section id="piocheEtDefause"><div class="cadre"><button class="pioche"><div class="card-pioche"><h3>Pioche</h3></div></button></div><div class="cadre"><div class="card"><p>0</p><h3>blue</h3><p class="right">0</p></div></div></section><section id="tourDuJoueur"></section></section>

*/
