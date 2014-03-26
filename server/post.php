<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>PHPMailer - sendmail test</title>
</head>
<body>
<?php

require 'class.phpmailer.php';

$fullname = 'Unknown';
$nominee_name = "Unknown";
$category = 'Not declared';

$fullname = $_POST['fullname'];
$fullname = htmlspecialchars($fullname);

$nominee_name = $_POST['nominee_name'];
$nominee_name = htmlspecialchars($nominee_name);

$category = $_POST['category'];
$category = htmlspecialchars($category);

//Create a new PHPMailer instance
$mail = new PHPMailer();

// Set mail to be HTML format
$mail->IsHTML(true); 

// Set PHPMailer to use the sendmail transport
$mail->IsSendmail();

//Set who the message is to be sent from
$mail->SetFrom('myquestions@moledesign.biz', 'myQuestions');

//Set an alternative reply-to address
$mail->AddReplyTo('morgan@moledesign.biz','Morgan Leecy');

//Set who the message is to be sent to
$mail->AddAddress('morgan@moledesign.net', 'Morgan Leecy');

//Set the subject line
$mail->Subject = $fullname.' sent in their survey results';

//Replace the plain text body with one created manually

$message = '';

foreach ($_POST as $key => $value)
    $message .= 'Field '.htmlspecialchars($key).' = '.htmlspecialchars($value).'<br>';

$mail->Body = $message;


//Send the message, check for errors
if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>
</body>
</html>
