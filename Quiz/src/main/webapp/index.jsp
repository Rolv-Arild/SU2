<%--
  Created by IntelliJ IDEA.
  User: Rolv-Arild
  Date: 19.09.2017
  Time: 10.31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Quiz</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="http://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
        <script src="script.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="container">
            <h1>Quiz</h1><br>
            <table id="quizTable" class="table">
                <thead>
                    <tr><th>ID</th><th>Name</th></tr>
                </thead>
            </table>
        </div>
        <br>

        <button class="btn btn-default" id="newQuiz">New Quiz</button>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
</html>