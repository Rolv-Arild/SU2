/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function () {
    var questionT = $('#QTable')

    questionT.DataTable({
        ajax: {
            url: 'rest/questions',
            dataSrc: ''
        },
        columns: [
            { data: 'id'},
            { data: 'question'},
            { data: 'answerIndex'}
        ]
    });

    setInterval(function () {
        questionT.DataTable().ajax.reload();
    },
    1000);

    // $('#save').click(function () {
    //     $.ajax({
    //         url: 'rest/kunder',
    //         type: 'PUT',
    //         data: JSON.stringify({
    //             id: $("#id").val(),
    //             navn: $("#changeName").val()
    //         }),
    //         contentType: 'application/json; charset=utf-8',
    //         dataType: 'json',
    //         success: function(result) {
    //             $('#myTable').DataTable().ajax.reload();
    //         }
    //     })
    // });
});