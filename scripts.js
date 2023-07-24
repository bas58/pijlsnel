var blokje = document.querySelector("#blokje");
var antwoord = prompt("Is het dag of nacht");
var getal = 15;
var lettertype = ("Comic Sans MS");

if (antwoord == "dag") {
    blokje.style.backgroundColor = "green";
} else {
    blokje.style.backgroundColor = "blue";
}

blokje.style.fontFamily = lettertype;
blokje.style.margin = "15 px";
blokje.innerHTML = "Hallo Dartvrienden";
