var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "./images/" + randomImage1; 
var randomImageSource2 = "./images/" + randomImage2; 

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);