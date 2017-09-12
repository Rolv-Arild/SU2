$(document).ready(function() {
    $.get("Oving5/thepath/", function(data){
        $("#myid").html(data);
    });
});