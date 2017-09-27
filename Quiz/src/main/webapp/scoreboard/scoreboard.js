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

    var quizId = getUrlParameter("quizId");

    $.getJSON("/Quiz/rest/quizzes/" + quizId, function (data) {
        $('#quizName').text(data.name);
    });

    $('#scoreB').DataTable({
        ajax: {
            url: '/Quiz/rest/quizzes/' + quizId,
            dataSrc: ''
        },
        columns: [
            {data: 'players.username'},
            {data: 'players.score'},
            {data: 'name', visible: false}
        ]
    });

    setInterval(function () {
       $('#scoreB').DataTable().ajax.reload();
    }, 1000);
});