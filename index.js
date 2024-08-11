var randomnumber1 = Math.floor((Math.random())* 6) + 1 ;
var randomImage1 = "dice" + randomnumber1 + ".png";
var randomImageSource1 = "./images/"+ randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomNumber2 = Math.floor((Math.random())*6) +1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/"+ randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomnumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins ! 🚩";
}
else if (randomNumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩";
}

else
{
    document.querySelector("h1").innerHTML = "It's a TIE ! ⛳️";
}