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

    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
    <script src="quizMaker.js" type="application/javascript"></script>
</head>
    <body>

        <h1>Make a quiz</h1>

        <label for="navn">Quiz name:</label>
        <input id="navn" type="text">
        <br><br><br>

        <button id="addQ">Add a question</button>
        <label for="question">Question:</label>
        <input id="question" type="text">
        <br><br>

        <table id="QTable" class="display compact">
            <thead>
                <tr><th>Nr</th><th>Question</th><th>Answer</th></tr>
            </thead>
        </table>
        <br>

        <button id="save">Save</button>

    </body >
</html>
