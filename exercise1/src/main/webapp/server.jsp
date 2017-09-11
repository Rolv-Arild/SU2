<%--
  Created by IntelliJ IDEA.
  User: Rolv-Arild
  Date: 30.08.2017
  Time: 09.23
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    String fornavn = request.getParameter("fornavn");
    String etternavn = request.getParameter("etternavn");
    String interesse = request.getParameter("interesse");
%>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Server</title>
</head>
<body>
<%="Hei, " + fornavn + " " + etternavn + "!"%>
<h2><%="Informasjon om " + interesse + ":"%></h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fuga id impedit ipsum. Amet aspernatur, debitis doloribus est, ex iure iusto mollitia nemo nesciunt nostrum omnis saepe soluta sunt tempore!</p>
</body>
</html>
