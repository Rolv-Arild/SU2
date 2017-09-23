/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function () {
    var questionT = $('#QTable');
    var dt = questionT.DataTable();

    questionT.DataTable({
        ajax: {
            dataSrc: ''
        },
        columns: [
            {data: 'Question'},
            {data: 'Duration'}
        ]
    });

    $('#saveQ').click(function () {
        var newDataArray = [
            {
                "Question": "" + $('#question').val(),
                "Duration": "" + $('#duration').val()
            }
        ];
        dt.clear();
        dt.rows.add(newDataArray);
        dt.draw();
    });
});