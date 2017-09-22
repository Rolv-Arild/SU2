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

        <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
        <script src="makequiz/quizMaker.js" type="application/javascript"></script>
        <link rel="stylesheet" type="text/css" href="http://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
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
                    <tr><th>Id</th><th>Question</th><th>Answer</th></tr>
                </thead>
            </table>
            <br>

            <button class="btn btn-default" id="save">Save</button>
        </div>
    </body >
</html>
