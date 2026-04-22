let Allcard = {
    red: { num: ["red0", "red1", "red2", "red3", "red4", "red5", "red6", "red7", "red8", "red9"], spe: ["redPastrn", "redCgeSns", "redAddtwo"] },
    green: { num: ["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9"], spe: ["greenPastrn", "greenCgeSns", "greenAddtwo"] },
    blue: { num: ["blue0", "blue1", "blue2", "blue3", "blue4", "blue5", "blue6", "blue7", "blue8", "blue9"], spe: ["bluePastrn", "blueCgeSns", "blueAddtwo"] },
    yellow: { num: ["yellow0", "yellow1", "yellow2", "yellow3", "yellow4", "yellow5", "yellow6", "yellow7", "yellow8", "yellow9"], spe: ["yellowPastrn", "yellowCgeSns", "yellowAddtwo"] },
    black: ["blackaddfour", "blackchangeColor"]
};

function setGame(NumberOfPlayer = Number) {
    if (NumberOfPlayer < 2) { console.log("pas assez de joueur"); return "error" };
    let newSetForAllPlayer = [];
    let cardsOfOnePlayer = [];
    for (let i = 0; i < NumberOfPlayer; i++) {
        cardsOfOnePlayer = [];
        for (let y = 0; y < 7; y++) {
            let random = Math.floor(Math.random() * 14);
            if (random <= 3) {
                // red
                random = Math.floor(Math.random() * 5);
                if (random <= 3) {
                    //  num
                    cardsOfOnePlayer.push(selectCard("red", "num"));
                } else {
                    //  spe
                    cardsOfOnePlayer.push(selectCard("red", "spe"));
                }
            } else if (random >= 4 && random <= 6) {
                //  blue
                random = Math.floor(Math.random() * 5);
                if (random <= 3) {
                    //  num
                    cardsOfOnePlayer.push(selectCard("blue", "num"));
                } else {
                    //  spe
                    cardsOfOnePlayer.push(selectCard("blue", "spe"));
                }
            } else if (random >= 7 && random <= 9) {
                //  yellow
                random = Math.floor(Math.random() * 5);
                if (random <= 3) {
                    //  num
                    cardsOfOnePlayer.push(selectCard("yellow", "num"));
                } else {
                    //  spe
                    cardsOfOnePlayer.push(selectCard("yellow", "spe"));
                }
            } else if (random >= 10 && random <= 12) {
                //  green
                random = Math.floor(Math.random() * 5);
                if (random <= 3) {
                    //  num
                    cardsOfOnePlayer.push(selectCard("green", "num"));
                } else {
                    //  spe
                    cardsOfOnePlayer.push(selectCard("green", "spe"));
                }
            } else {
                random = Math.floor(Math.random() * 2);
                cardsOfOnePlayer.push(Allcard.black[random]);
            }
        }
        newSetForAllPlayer.push(cardsOfOnePlayer);
    }
    return newSetForAllPlayer;
}

function selectCard(colors = String, type = String) {
    let select = Math.floor(Math.random() * Allcard[colors][type].length);
    return Allcard[colors][type][select];
}

/*    id attendue => "red0" "blue6" "blackaddfour" ....   */
function createObject(id = "") {
    let newobject = {};
    if (id.includes("red")) {
        // for red
    } else if (id.includes("blue")) {
        // for blue
    } else if (id.includes("regreend")) {
        // for green
    } else if (id.includes("yellow")) {
        // for yellow
    } else {
        // for black
    }
    return newobject;
    /*
        EXEMPLE D'OBJECT QUE RENVOIE CETTE FONCTION
        {
            id: "red0",
            img: "cards/red/rednum0.png",
            spe: false,
        }
        {
            id: "blueCgeSns",
            img: "cards/blue/blueChangerSense.png",
            spe: true,
        }
    */
}

// test and debug zone

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World");
});

createObject("blue6")