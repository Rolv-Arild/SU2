<%--
  Created by IntelliJ IDEA.
  User: Rolv-Arild
  Date: 30.08.2017
  Time: 09.17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Dato</title>
</head>
<body>
<p><%out.println(new java.util.Date()); %></p>
    <%--skrevet ut på sidekilden fordi jsp utfører javakommandoen
    før den gjør om til html (som er det sidekilden viser)--%>
<p><script>document.write(new Date());</script></p>
</body>
</html>
