//Game Nummer 1
var a = 0;
var b = 0;
function gamer1(){
    let spin = document.getElementById("player");
    var players = document.getElementById("player").value;
    if(players > 1 || players > 99){
        console.log("Selected Game 1"); 
        random_number(players);
    }else{
        spin.innerText = "0";
        if(players == "0" || players == "1"){
            alert("Bitte geben sie minimal 2 Spieler an und maximal 99 Spieler!")
        }else{
            alert("Bitte geben sie eine Player anzahl in das weiße Kästchen an!")
        }
    }
}
async function  random_number(players) {
    let numbers = document.getElementById("numbers");
    let playerstitle = document.getElementById("playerstitle");
    let spinner = document.getElementById("spin_button");
    var spiner = document.getElementById("player");

    numbers.style.scale = "2";
    playerstitle.style.visibility = "Hidden";
    spiner.style.visibility = "Hidden";
    spinner.style.visibility = "Hidden";
    
    var min = 2;
    var max = players;
    var colore = 0;
    var min1 = 2;
    spiner.style.borderColor = "transparent";
    for(i = 0; i < 100; i++){
        var rdmplayer = Math.round(Math.random() * (max - min)) + min;
        numbers.innerText = rdmplayer;
        if(colore == 1){
           numbers.style.color = "#bc12dd";
           spiner.style.color = "#bc12dd";
           playerstitle.style.color = "#bc12dd";
           spinner.style.color = "#bc12dd";
           spinner.style.borderColor = "#bc12dd";
        }else if(colore == 2){
           numbers.style.color = "#dd124d";
           spiner.style.color = "#dd124d";
           playerstitle.style.color = "#dd124d";
           spinner.style.color = "#dd124d";
           spinner.style.borderColor = "#dd124d";
        }else if(colore == 3){
           numbers.style.color = "#12ddc3";
           spiner.style.color = "#12ddc3";
           playerstitle.style.color = "#12ddc3";
           spinner.style.color = "#12ddc3";
           spinner.style.borderColor = "#12ddc3";
        }else if(colore == 4){
           numbers.style.color = "#35dd12";
           spiner.style.color = "#35dd12";
           playerstitle.style.color = "#35dd12";
           spinner.style.color = "#35dd12";
           spinner.style.borderColor = "#35dd12";
        }else if(colore == 5){
           numbers.style.color = "#dddb12";
           spiner.style.color = "#dddb12";
           playerstitle.style.color = "#dddb12";
           spinner.style.color = "#dddb12";
           spinner.style.borderColor = "#dddb12";
        }else if(colore == 6){
           numbers.style.color = "#dd7f12";
           spiner.style.color = "#dd7f12";
           playerstitle.style.color = "#dd7f12";
           spinner.style.color = "#dd7f12";
           spinner.style.borderColor = "#dd7f12";
           colore = 0;
        }
        colore = colore + 1;
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 25)
    });
    let result = await promise;
    
   }
var max1 = rdmplayer
numbers.innerText = max1;
var challangemin = 1;
var challangemax = 13;
var minshot = 1;
var maxshot = 3;
var rdmchallange = Math.round(Math.random() * (challangemax - challangemin)) + challangemin;
var player2 = Math.round(Math.random() * (max1 - min1)) + min1;
var shotsnumber = Math.round(Math.random() * (maxshot - minshot)) + minshot;
if(shotsnumber == player2){
   var shotsnumber = Math.round(Math.random() * (maxshot - minshot)) + minshot;
}numbers.style.visibility = "Hidden";
numbers.style.scale = "1";
playerstitle.style.visibility = "Visible";
spiner.style.visibility = "Visible";
 if(rdmchallange == 1){
     alert("Spieler  " + rdmplayer + "  Verteile " + shotsnumber + " Shot's");
 }else if(rdmchallange == 2){
    alert("Spieler  " + rdmplayer + "  trinkst einen Shot mit der Nummer  " + player2);
 }else if(rdmchallange == 3){
    alert("Spieler  " + rdmplayer + "  Mache Armdrücken gegen Nummer  " + player2 + "der Verlierer Trinkt " + shotsnumber + "Shot's");
 }else if(rdmchallange == 4){
    alert("Spieler  " + rdmplayer + "  Mache einen Handstand. Wenn du es nicht schaffst, trinkst du " + shotsnumber + " Shot's");
 }else if(rdmchallange == 5 && b < 2){
    alert("Spieler  " + rdmplayer + "  Trink ein Wasser, du brauchst es wahrscheinlich");
    b++;
 }else if(rdmchallange == 6){
    alert("Spieler  " + rdmplayer + "  Wenn dein Name mit einem Vokal endet, trink zwei.");
 }else if(rdmchallange == 7){
    alert("Spieler  " + rdmplayer + "  Leere das Glas von der Nummer  " + player2);
 }else if(rdmchallange == 8){
    alert("Spieler  " + rdmplayer + "  Sing ein Lied oder trink.");
 }else if(rdmchallange == 9 && a < 2){
    alert("Spieler  " + rdmplayer + "  Mystery Shot, Deine Mitspieler mischen dir einen Shot aus beliebigen Getränken.");
    a++;
 }else if(rdmchallange == 10){
    alert("Spieler  " + rdmplayer + "  Du trinkst " + shotsnumber + " Shot's.");
 }else if(rdmchallange == 11){
    alert("Spieler  " + rdmplayer + "  Tausche dein Getränk mit der Person mit dem vollsten Glas");
 }else if(rdmchallange == 12){
    alert("Spieler  " + rdmplayer + "  verteile 2 Shots");
 }else if(rdmchallange == 13){
   alert("Spieler  " + rdmplayer + "  Tausche dein Getränk mit dem Speiler Nummer  " + player2);
 }
 spinner.style.visibility = "Visible";  
 numbers.style.visibility = "Visible"; 
}





