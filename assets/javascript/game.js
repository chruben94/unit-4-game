//formulate a random number between 19 - 120

$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    randomNumber = parseInt(randomNumber);
    $("#randomNumber").append(randomNumber);

//give the crystals random number values between 1 - 12
// create "score" variable
var score = 0
var wins = 0
var losses = 0

function winner() {
    wins++;
    $("#wins").text("Wins: " + wins);
    $("#currentScore").html(0);
}
function loser() {
    losses++;
    $("#losses").text("Losses: " + losses);
    $("#currentScore").html(0);
}
//need to create a restart function 
var crystal1 = $(".firstCrystal");
var crystal1Number = Math.floor(Math.random() * 12) + 1;
console.log(crystal1Number);
//create onclick function
$(crystal1).on("click", function () {
crystal1Number = parseInt(crystal1Number);
score += crystal1Number; 
$("#currentScore").html(score);
if (score === randomNumber) {
    winner()
    restart()
}
else if (score >= randomNumber) {
    loser()
    restart()
}
})

var crystal2 = $(".secondCrystal");
var crystal2Number = Math.floor(Math.random() * 12) + 1;
console.log(crystal2Number);
$(crystal2).on("click", function () {
    crystal2Number = parseInt(crystal2Number);
    score += crystal2Number; 
    $("#currentScore").html(score);
    if (score === randomNumber) {
        winner()
        restart()
    }
    else if (score >= randomNumber) {
        loser()
        restart()
    }
    })

var crystal3 = $(".thirdCrystal");
var crystal3Number = Math.floor(Math.random() * 12) + 1;
console.log(crystal3Number);
$(crystal3).on("click", function () {
    crystal3Number = parseInt(crystal3Number);
    score += crystal3Number; 
    $("#currentScore").html(score);
    if (score === randomNumber) {
        winner()
        restart()
    }
    else if (score >= randomNumber) {
        loser()
        restart()
    }
    })

var crystal4 = $(".fourthCrystal");
var crystal4Number = Math.floor(Math.random() * 12) + 1;
console.log(crystal4Number);
$(crystal4).on("click", function () {
    crystal4Number = parseInt(crystal4Number);
    score += crystal4Number; 
    $("#currentScore").html(score);
    if (score === randomNumber) {
        winner()
        restart()
    }
    else if (score >= randomNumber) {
        loser()
        restart()
    }
    })
});
 




