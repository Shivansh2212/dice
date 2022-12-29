// alert("working");
var randomno1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomno1+".png";

var randomimagesrc="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesrc);

var randomno2=Math.floor(Math.random()*6)+1;

var randomimagesrc2="images/dice"+randomno2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesrc2);

if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="Player 1 WiNs!";
}
else if(randomno2>randomno1){
    document.querySelector("h1").innerHTML="Player 2 WiNs!";
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}