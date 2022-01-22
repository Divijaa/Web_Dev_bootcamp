var randomNumber1 = Math.floor(Math.random() *6) +1; //numbers in renage 1-6

var randomDiceNo = "dice" + randomNumber1 +".png";//dice1.png - dice6.png

var imageSource = "images/" +randomDiceNo; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);


//for player 2
var randomnumber2 = Math.floor(Math.random() *6) +1;
var randomImageSOurce2 = "images/dice" + randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSOurce2);

if(randomNumber1 > randomnumber2)
{
    document.querySelectorAll('h1').innerHTML = "Player 1 Wins!";
}
else if(randomnumber2 > randomNumber1)
{
    document.querySelectorAll('h1').innerHTML = "Player 2 Wins!";
}
else
{
    document.querySelectorAll('h1').innerHTML = "It's a draw!";
}