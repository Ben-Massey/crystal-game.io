$(document).ready(function () {

    var targetNumber = "";
    var score = parseInt(0);
    var gemArray = [];
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;

    var wins = 0;
    var loss = 0;

    function reset() {
        targetNumber = Math.floor(Math.random() * 120) + 1;
        score = parseInt(0);
        gemArray = [];
        gem1 = 0;
        gem2 = 0;
        gem3 = 0;
        gem4 = 0;
        $('#number-to-guess').html(targetNumber);
        $('#scoreCounter').html(score);
        gameStart();
    }

    function gameStart() {
        targetNumber = Math.floor(Math.random() * 120) + 1;
        $('#number-to-guess').html(targetNumber);
        for (let i = 0; i < 4; i++) {
            var numberIsInArray = false;
            var rand = generateRandomNumb(1, 21);
            for (var j = 0; j < gemArray.length; j++) {
                if (rand === gemArray[j]) {
                    numberIsInArray = true;
                    i--;
                }
            }

            if (!numberIsInArray) {
                gemArray.push(rand);
            }
            function generateRandomNumb(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
        }
        gem1 = gemArray[0];
        gem2 = gemArray[1];
        gem3 = gemArray[2];
        gem4 = gemArray[3];
    }
        gem1 = $('#img1').val();
        gem2 = $('#img2').val();
        gem3 = $('#img3').val();
        gem4 = $('#img4').val();

        $("#img1").on("click", function () {

            var crystalValue = gem1;
            crystalValue = parseInt(crystalValue);
            score += crystalValue;
            $('#scoreCounter').html(score);
            if (score === targetNumber) {
                alert("You win!");
                wins++;
                $('#winCounter').html(wins);
                reset();
            }

            else if (score >= targetNumber) {
                alert("You lose!!");
                loss++;
                $('#lossCounter').html(loss);
                reset();
            }
        });

        $("#img2").on("click", function () {

            var crystalValue = gem2;
            crystalValue = parseInt(crystalValue);
            score += crystalValue;
            $('#scoreCounter').html(score);
            if (score === targetNumber) {
                alert("You win!");
                wins++;
                $('#winCounter').html(wins);
                reset();
            }

            else if (score >= targetNumber) {
                alert("You lose!!");
                loss++;
                $('#lossCounter').html(loss);
                reset();
            }
        });

        $("#img3").on("click", function () {

            var crystalValue = gem3;
            crystalValue = parseInt(crystalValue);
            score += crystalValue;
            $('#scoreCounter').html(score);
            if (score === targetNumber) {
                alert("You win!");
                wins++;
                $('#winCounter').html(wins);
                reset();
            }

            else if (score >= targetNumber) {
                alert("You lose!!");
                loss++;
                $('#lossCounter').html(loss);
                reset();
            }
        });

        $("#img4").on("click", function () {

            var crystalValue = gem4;
            crystalValue = parseInt(crystalValue);
            score += crystalValue;
            $('#scoreCounter').html(score);
            if (score === targetNumber) {
                alert("You win!");
                wins++;
                $('#winCounter').html(wins);
                reset();
            }

            else if (score >= targetNumber) {
                alert("You lose!!");
                loss++;
                $('#lossCounter').html(loss);
                reset();
            }
        });
    gameStart();

});