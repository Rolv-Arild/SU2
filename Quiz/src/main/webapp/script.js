/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function() {
    var quizT = $("#quizTable");

    quizT.DataTable({
        ajax: {
            url: 'rest/quizzes',
            dataSrc: ''
        },
        columns: [
            {data: 'id'},
            {data: 'name'}
        ]
    });

    setInterval(function () {
        quizT.DataTable().ajax.reload();
    },
    1000);

    // $("#delete").click(function () {
    //     $.ajax({
    //         url: 'rest/quizzes/' + $("#deleteId").val(),
    //         type: 'DELETE',
    //         data: JSON.stringify({
    //             id: $("#deleteId").val(),
    //         }),
    //         contentType: 'application/json; charset=utf-8',
    //         dataType: 'json',
    //         success: function (result) {
    //             $('#myTable').DataTable().ajax.reload();
    //         }
    //     });
    // });

    $("#newQuiz").click(function () {
        window.location.href = "QuizMaker";
        // $.ajax({
        //     url: 'rest/quizzes',
        //     type: 'POST',
        //     data: JSON.stringify({
        //         id: $("#newId").val(),
        //         navn: $("#newName").val(),
        //     }),
        //     contentType: 'application/json; charset=utf-8',
        //     dataType: 'json',
        //     success: function (result) {
        //         $('#myTable').DataTable().ajax.reload();
        //     }
        // });
    });
});