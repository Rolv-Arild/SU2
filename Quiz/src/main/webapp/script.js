/**
 * Created by Rolv-Arild on 19.09.2017.
 */

$(document).ready(function() {
    var quizT = $("#quizTable");
    var selected = [];

    quizT.DataTable({
        ajax: {
            url: 'rest/quizzes',
            dataSrc: ''
        },
        columns: [
            {data: 'name'},
            {data: 'starttime', render: function (data) {
                var date = new Date(data);
                return date.toLocaleString();
            }},
            {data: 'quizId', visible: false}
        ],
        "rowCallback": function( row, data ) {
            if ( $.inArray(data.DT_RowId, selected) !== -1 ) {
                $(row).addClass('selected');
            }
        }
    });

    setInterval(function () {
        quizT.DataTable().ajax.reload();
    },
    30000);

    $('#newQuiz').click(function () {
        document.location.href = "QuizMaker";
    });


    $('#quizTable tbody').on('click', 'tr', function () {
        var row = $(this).closest('tr');
        var data = quizT.dataTable().fnGetData(row).quizId;
        // TODO show modal for joining
    });
});