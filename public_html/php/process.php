<DOCTYPE !html>
<html lang="en">
<body style="background-color:cyan; color:"black; text-align:center; font-family: "Courier New",Arial;">
<?php
$NAME= $_POST["name"];
$EMAIL=$_POST["email"];
$TELEPHONE=$_POST["telephone"];

echo "<p>Welcome <strong>".$_POST["name"]."</strong>";
echo "<p>I will contact you at: <bold>".$_POST["email"]."</bold><br>Telephone Number:".$_POST["telephone"]."<br><br>Bye";
?>
</body>
</html>
