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

//Create a new PHPMailer instance
$mail = new PHPMailer();

// Set mail to be HTML format
$mail->IsHTML(true); 

// Set PHPMailer to use the sendmail transport
$mail->IsSendmail();

//Set who the message is to be sent from
$mail->SetFrom('donotreply@gwtrains.co.uk', $fullname. ' (RT Surveys)');

//Set an alternative reply-to address
$mail->AddReplyTo('vicky.cropper@firstgroup.com','Vicky Cropper');

//Set who the message is to be sent to
$mail->AddAddress('morgan.leecy@firstgroup.com', 'Morgan Leecy');

//Set the subject line
$mail->Subject = $fullname.' sent in their survey results for The 2014 Managers Conference';

//Replace the plain text body with one created manually

$message = '<table style="width:90%; border-width: 1px;">';


foreach ($_POST as $key => $value)
    $message .= '<tr><td style="width:30%; border-style:solid; border-color:#333; border-width: 1px;">'.htmlspecialchars($key).'</td><td>'.htmlspecialchars($value).'</td></tr>';

$message .= '</table>';
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
