var game1 = document.getElementById("partygame1");
var game2 = document.getElementById("partygame2");
var game3 = document.getElementById("partygame3");

var eingabeElement = document.getElementById("eingabe");
var close = document.getElementById("nummernfenster");


game1.style.display = "none";
game2.style.display = "none";
game3.style.display = "none";



//window.localStorage.setItem("playerCounterKey", 0);


// Retrieve the stored value from local storage using the correct key
let playerkey = window.localStorage.getItem("playerCounterKey");

if(playerkey >= 2 && playerkey <= 99){
    close.style.display = "none";
    game1.style.display = "block";
    game2.style.display = "block";
    game3.style.display = "block";
}else{
    close.style.display = "block";
    game1.style.display = "none";
    game2.style.display = "none";
    game3.style.display = "none";
}

function resetsaves(){
    window.localStorage.setItem("playerCounterKey", 0);
    location.reload();
}


function schließeFenster(cookies) {
    let game1 = document.getElementById("partygame1");
    let game2 = document.getElementById("partygame2");
    let game3 = document.getElementById("partygame3");
    var close = document.getElementById("nummernfenster");
    var eingabeElement = document.getElementById("eingabe");
    var eingabeWert = parseInt(eingabeElement.value);
    var playercounter = document.getElementById("eingabe").value;
    window.localStorage.setItem("playerCounterKey", playercounter);

    savebrowser();


    if (eingabeWert >= 2 && eingabeWert <= 99) {
        close.style.display = "none";
        game1.style.display = "block";
        game2.style.display = "block";
        game3.style.display = "block";
    } else {
        alert("Bitte gib eine Nummer zwischen 2 und 99 ein.");
    }
}
function savebrowser(){
    console.log("saved");

}