var randomNum1 = Math.ceil(Math.random() * 6)
var randomNum2 = Math.ceil(Math.random() * 6)
console.log(randomNum1)
var player1Dice = "/images/dice"+randomNum1+".png"
var player2Dice = "/images/dice"+randomNum2+".png"

document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

if(randomNum1 > randomNum2)
    document.querySelector(".container h1").textContent = "Player1 Wins 🚩"
else if(randomNum1 < randomNum2)
    document.querySelector(".container h1").textContent = "Player2 Wins 🚩"
else
    document.querySelector(".container h1").textContent = "Draw"

