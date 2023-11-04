var game1 = document.getElementById("partygame1");
var game2 = document.getElementById("partygame2");
var game3 = document.getElementById("partygame3");

game1.style.display = "none";
game2.style.display = "none";
game3.style.display = "none";




function schließeFenster() {

    let game1 = document.getElementById("partygame1");
    let game2 = document.getElementById("partygame2");
    let game3 = document.getElementById("partygame3");
    


    var close = document.getElementById("nummernfenster");
    var eingabeElement = document.getElementById("eingabe");
    var eingabeWert = parseInt(eingabeElement.value);
    
    if (eingabeWert >= 2 && eingabeWert <= 99) {
        close.style.display = "none";
        game1.style.display = "block";
        game2.style.display = "block";
        game3.style.display = "block";
    } else {
        alert("Bitte gib eine Nummer zwischen 2 und 99 ein.");
    }

}