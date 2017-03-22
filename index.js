$(document).ready(function() {
    $("button").click(function () {
        var guessNumber = $("input").val();
        var secretNumber = 12;
        if  (guessNumber < secretNumber) {
            $("#appendReaction").empty().append("Fool! That is too low!")
        } else if (guessNumber > secretNumber) {
             $("#appendReaction").empty().append("Idiot! That is too high!")
        } else {
            $("#appendReaction").empty().append("FINALLY YOU ARE CORRECT!");
        }
    });
});