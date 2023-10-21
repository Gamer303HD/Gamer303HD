var playerwahl = 1;
var field01 = document.getElementById("btn-1");
var field02 = document.getElementById("btn-2");
var field03 = document.getElementById("btn-3");
var field04 = document.getElementById("btn-4");
var field05 = document.getElementById("btn-5");
var field06 = document.getElementById("btn-6");
var field07 = document.getElementById("btn-7");
var field08 = document.getElementById("btn-8");
var field09 = document.getElementById("btn-9");


a = true;
b = true;
c = true;
d = true;
e = true;
f = true;
g = true;
h = true;
i = true;

function main(selected){

  

    switch (playerwahl){
        case 1:
            console.log("auswahl: " + playerwahl);
            player1(selected);
        case 2:
            console.log("auswahl: " + playerwahl);
        playerwahl++;
        if(playerwahl == 3){
            playerwahl = 1;
            player2(selected);
        }
    }
}







function player1(playerfield1){

    if(playerfield1 == 1 && a == true){
        field01.innerHTML = "X";
        a = false;

    }else if(playerfield1 == 2 && b == true ){
        field02.innerHTML = "X";
        b = false;

    }else if(playerfield1 == 3 && c == true){
        field03.innerHTML = "X";
        c = false;
        
    }else if(playerfield1 == 4 && d == true){
        field04.innerHTML = "X";
        d = false;
        
    }else if(playerfield1 == 5 && e == true){
        field05.innerHTML = "X";
        e = false;
        
    }else if(playerfield1 == 6 && f == true){
        field06.innerHTML = "X";
        f = false;
        
    }else if(playerfield1 == 7 && g == true){
        field07.innerHTML = "X";
        g = false;
        
    }else if(playerfield1 == 8 && h == true){
        field08.innerHTML = "X";
        h = false;

        
    }else if(playerfield1 == 9 && i == true){
        field09.innerHTML = "X";
        i = false;
        
    }else{
        playerwahl = 0;
    }
}



function player2(playerfield2){
    if(playerfield2 == 1 && a == true){
        field01.innerHTML = "O";
        a = false;

    }else if(playerfield2 == 2 && b == true ){
        field02.innerHTML = "O";
        b = false;

    }else if(playerfield2 == 3 && c == true){
        field03.innerHTML = "O";
        c = false;
        
    }else if(playerfield2 == 4 && d == true){
        field04.innerHTML = "O";
        d = false;
        
    }else if(playerfield2 == 5 && e == true){
        field05.innerHTML = "O";
        e = false;
        
    }else if(playerfield2 == 6 && f == true){
        field06.innerHTML = "O";
        f = false;
        
    }else if(playerfield2 == 7 && g == true){
        field07.innerHTML = "O";
        g = false;
        
    }else if(playerfield2 == 8 && h == true){
        field08.innerHTML = "O";
        h = false;

        
    }else if(playerfield2 == 9 && i == true){
        field09.innerHTML = "O";
        i = false;
        
    }else{
        playerwahl = 1;
    }
    
}