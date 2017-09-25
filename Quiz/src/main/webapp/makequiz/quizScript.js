/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function () {
    var questions = [];

    $('#saveQ').click(function () {
        var question = {
            question: $('#question').val(),
            duration: $('#duration').val(),
            options: [$('#answer1').val(), $('#answer2').val(), $('#answer3').val(), $('#answer4').val()]
        };
        questions.push(question);
        $('#QTable').append(
            "<tr>"+
            "<td>" + $('#question').val() + "</td>"+
            "<td>" + $('#duration').val() + "</td>"+
            "</tr>"
        );
        $('#question').val("");
        $('#duration').val("");
        $('#answer1').val("");
        $('#answer2').val("");
        $('#answer3').val("");
        $('#answer4').val("");
    });


    $("#save").click(function () {
        $.ajax({
            url: 'rest/quizzes',
            type: 'POST',
            data: JSON.stringify({
                name: $('#name').val(),
                starttime: new Date($('#startT').val()),
                questions: questions
            }),
            contentType: 'application/json',
            dataType: 'json'
        });
        window.location.href = '../Quiz';
    });
});