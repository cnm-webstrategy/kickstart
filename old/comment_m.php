<html>
<head>

<?php

/*  

while(list($key,$value)= each($HTTP_POST_VARS)){
	echo("key = " . $key."<BR>");
    echo("value = " . $value."<BR>");
}
*/


//send an email from the server

//get the variables from the <input>'s and <textareas>'s off the forms that submit to this page

$fromname = $firstname;
$fromemail = $email;
$subject = "Contact Form: $firstname $lastname ";

$message = "<br><b>Frist Name:</b> ".$firstname;
$message .= "<br><b>Last Name:</b> ".$lastname;
$message .= " <br><br> <b>Email Address:</b> ".$email;
$message .= " <br><br> <b>Phone Number:</b> ".$phone;
$message .= " <br><br> <b>mailing:</b> ".$address;
$message .= " <br><br> <b>Comments:</b> ".$comments;


//This is the first person who is going to receive the email
$sendtoname = "Basil Steele";
$sendtoemail = "bsteele@basilsteele.com";


//Email header stuff
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: $fromname <$fromemail>\r\n";
$headers .= "To: $sendtoname <$sendtoemail>\r\n";
$headers .= "Reply-To: <$fromemail>\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-MSMail-Priority: Normal\r\n";
$headers .= "X-Mailer: Created by ecoms.com";


//this next line creates and sends the email
mail($sendtoemail, $subject, $message, $headers);


?>


<META NAME="Author" CONTENT="Basil Steele">
<META NAME="Keywords"CONTENT="Basil, Basil Steele, Steele, Basil Steele II, 3D, 3D design, 3D Graphics, 3D Studio Max, BJS Produtions, Photography, Digital, Digital Photography, BJS Productions, Graphic Design, Motion Graphics, Motion, Albuquerque, New Mexcio, Albuquerque New Mexcio, HD Comics, Comic book, Borderline, Portraits, Computer, Graphics, Computer Graphics, star wars, Photoshop, Art, Adobe, Photoshop CS, Designing , freelance">
<META NAME="Description" CONTENT="Basil Steele - photographer &amp; Graphic Designer">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<META HTTP-EQUIV="imagetoolbar" CONTENT="no">
<link rel="shortcut icon" href="bas.ico" >
<link href="../ddsmoothmenu.css" rel="stylesheet" type="text/css">

<style type="text/css">
<!--
body {
	background-color: #262626;
}
-->
</style></head>









<body>
<table width="800" height="400" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><p align="center" class="pagec2"><strong>Thank 
      You!</strong></p>
    <p align="center" ><span class="pagec2">Your Message has been sent</span></p></td>
  </tr>
</table>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-15828946-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>