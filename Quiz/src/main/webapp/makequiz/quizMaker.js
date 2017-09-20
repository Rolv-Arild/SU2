/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function () {
    $('#QTable').DataTable({
        ajax: {
            url: 'rest/Questions',
            dataSrc: ''
        },
        columns: [
            { data: 'nr'},
            { data: 'spørsmål'},
            { data: 'navn'}
        ]
    });

    $('#save').click(function () {
        $.ajax({
            url: 'rest/kunder',
            type: 'PUT',
            data: JSON.stringify({
                id: $("#id").val(),
                navn: $("#changeName").val()
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(result) {
                $('#myTable').DataTable().ajax.reload();
            }
        })
    });
});