<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>PHPMailer - sendmail test</title>
</head>
<body>
<?php

require 'class.phpmailer.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();

// Set mail to be HTML format
$mail->IsHTML(true); 

// Set PHPMailer to use the sendmail transport
$mail->IsSendmail();

//Set who the message is to be sent from
$mail->SetFrom('fgw-it@firstgroup.com', 'myQuestions');

//Set an alternative reply-to address
$mail->AddReplyTo('vicky.cropper@firstgroup.com','Vicky Cropper');

//Set who the message is to be sent to
$mail->AddAddress('vicky.cropper@firstgroup.com', 'Vicky Cropper');

//Set the subject line
$mail->Subject = 'myQuestions - Questionaire Submitted';

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
