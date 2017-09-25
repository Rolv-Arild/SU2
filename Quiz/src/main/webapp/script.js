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
            {data: 'name'},
            {data: 'starttime'}
        ]
    });

    setInterval(function () {
        quizT.DataTable().ajax.reload();
    },
    1000);

    $('#newQuiz').click(function () {
        document.location.href = "QuizMaker";
    });


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

    // $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').focus()
    // });
});