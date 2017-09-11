<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    String brukernavn = request.getParameter("brukernavn");
    String passord = request.getParameter("passord");
    boolean loginOk = brukernavn != null && brukernavn.equals("hei") &&
            passord != null && passord.equals("hei");
%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
<%= loginOk?"Du er innlogget":"Feil brukernavn eller passord" %>
</body>
</html>