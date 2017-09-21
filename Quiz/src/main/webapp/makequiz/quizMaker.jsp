<%--
  Created by IntelliJ IDEA.
  User: Rolv-Arild
  Date: 19.09.2017
  Time: 12.34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html>
    <head>
        <title>Make a quiz</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="http://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
        <script src="quizMaker.js" type="application/javascript"></script>
    </head>
    <body>
        <div class="container">
            <h1>Make a quiz</h1>

            <label for="navn">Quiz name:</label>
            <input id="navn" type="text">
            <br><br><br>

            <button class="btn btn-default" id="addQ">Add a question</button>
            <label for="question">Question:</label>
            <input id="question" type="text">
            <br><br>

            <table id="QTable" class="display compact">
                <thead>
                    <tr><th>Nr</th><th>Question</th><th>Answer</th></tr>
                </thead>
            </table>
            <br>

            <button class="btn btn-default" id="save">Save</button>

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
        </div>
    </body >
</html>
