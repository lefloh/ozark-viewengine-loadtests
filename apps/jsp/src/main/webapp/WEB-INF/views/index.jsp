<%@ page contentType="text/html;charset=utf-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
  <title>JSP Example</title>
</head>
<body>
  <p id="uuid">${uuid}</p>
  <p id="name">${name}</p>
  <p id="email">${email}</p>
  <ul id="friends">
    <c:forEach var="friend" items="${friends}">
      <li>${friend}</li>
    </c:forEach>
  </ul>
  <c:forEach var="lorem" items="${lorems}">
    <p>${lorem}</p>
  </c:forEach>
</body>
</html>
