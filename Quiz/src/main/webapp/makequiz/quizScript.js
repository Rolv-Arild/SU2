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
    });


    $("#save").click(function () {
        $.ajax({
            url: 'rest/quizzes',
            type: 'POST',
            data: JSON.stringify({
                name: $('#name').val(),
                starttime: $('#startT').val(),
                questions: questions
            }),
            contentType: 'application/json',
            dataType: 'json'
        });
        window.location.href = '../Quiz';
    });
});