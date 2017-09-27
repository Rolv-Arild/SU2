/**
 * Created by Rolv-Arild on 27.09.2017.
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
    var nick = getUrlParameter('nick');

   $.getJSON("/Quiz/rest/quizzes/" + getUrlParameter("quizId"), function (data) {
       var secondsleft = Math.floor((new Date(data.starttime) - new Date()) / 1000);
       var id = data.quizId;

       $('#waiting').text("Waiting for " + data.name);
       $('#secondsLeft').text(secondsleft + " seconds left");

       if (secondsleft > 0) {
           console.log(secondsleft*1000);
           var i = secondsleft;
           setInterval(function () {
               $('#secondsLeft').text((--i) + " seconds left");
           }, 1000);

           setTimeout(function () {
               window.location.href = "/Quiz/playquiz/quiz.html?quizId=" + id + "&qIndex=0&nick=" + nick;
           }, secondsleft*1000)
       }
       else {
           // check if quiz is ongoing
           var questions = data.questions;
           for (var j = 0; j < questions.length; j++) {
               if (secondsleft + questions[j].duration > data.starttime) {
                   window.location.href = "/Quiz/playquiz/quiz.html?quizId=" + id + "&qIndex=" + j + "&nick=" + nick;
                   return;
               }
           }
           // go to results
           alert("Sorry, quiz is already finished, taking you to results");
           window.location.href = "/Quiz/scoreboard/scoreboard.html?quizId=" + id;
       }
   });
});