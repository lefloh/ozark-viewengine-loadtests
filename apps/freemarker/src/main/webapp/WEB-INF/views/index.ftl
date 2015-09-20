<!doctype html>
<html>
<head>
  <title>Freemarker Example</title>
</head>
<body>
  <p id="uuid">${uuid!''}</p>
  <p id="name">${name}</p>
  <p id="email">${email}</p>
  <ul id="friends">
    <#list friends as friend>
      <li>${friend}</li>
    </#list>
  </ul>
  <#list lorems as lorem>
    <p>${lorem}</p>
  </#list>
</body>
</html>