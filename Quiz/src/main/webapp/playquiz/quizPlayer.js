/**
 * Created by Rolv-Arild on 26.09.2017.
 */

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

$(document).ready(function () {

    var quizID = getUrlParameter('quizId');
    var qIndex = parseInt(getUrlParameter('qIndex'));
    if (qIndex === -1) return;
    var nick = getUrlParameter('nick');

    var qStart;

    $.getJSON("/Quiz/rest/quizzes/" + quizID, function (data) {
        var quiz = data;
        var questions = data.questions;

        if (qIndex < 0);
        else if (qIndex < questions.length) {
            var currentQ = questions[qIndex];
            var i = currentQ.duration;
            $('#timer').text(i);
            setInterval(function () {
                $('#timer').text(--i);
            }, 1000);
            setTimeout(function () {
                window.location.href = window.location.href.replace("qIndex=" + qIndex, "qIndex=" + (qIndex+1));
            }, currentQ.duration*1000);
        } else {
            window.location.href = "/Quiz/scoreboard/scoreboard.html?quizId=" + quizID;
        }
    });
});