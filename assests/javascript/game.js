$(document).ready(function game() {
    var possiblenum = [1, 5, 10, 12]
    var img = ["../unit-4-game/assests/images/blue-gem.png", "../unit-4-game/assests/images/green-gem.png", "../unit-4-game/assests/images/pink-gem.png", "../unit-4-game/assests/images/rock.jpg"]
    var wins = 0;
    var loss = 0;
    var targetnum = [Math.floor(Math.random() * 120)];
    var score = 0;

   
   
    function reset() {
    targetnum = [Math.floor(Math.random() * 120)];
    $("#Randomnumber").text("Number to Guess: " + targetnum);
    score = 0;
}

$("#Randomnumber").text("Number to Guess: " + targetnum);

    for (var i = 0; i < possiblenum.length; i++) {
        var crystalimg = $("<img>");
        crystalimg.addClass("crystal-image");
        crystalimg.attr("src", img[i]);
        crystalimg.attr("id", "col-lg-3");
        crystalimg.attr("data-crystalvalue", possiblenum[i]);
        $("#images").append(crystalimg);
    }
    $(".crystal-image").on("click", function () {
        var crystalvalue = parseInt($(this).attr("data-crystalvalue"));
        var newScore = parseInt(score += crystalvalue);
        $("#score").text("Current Score: " + newScore);

        if (newScore === targetnum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (newScore > targetnum) {
            loss++;
            $("#loss").text("Losses: " + loss);
            reset();
        }
    })
})



