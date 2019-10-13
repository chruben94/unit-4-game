//formulate a random number between 19 - 120

$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    randomNumber = parseInt(randomNumber);
    $("#randomNumber").append(randomNumber);

//give the crystals random number values between 1 - 12

var crystal1 = $(".firstCrystal");
var crystal1Number = Math.floor(Math.random() * 12) + 1;
console.log(crystal1Number);

});
 




