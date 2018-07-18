<?php

require_once('PHPMailer/class.phpmailer.php');
$mail = new PHPMailer();
$mail->IsSMTP();   // set mailer to use SMTP
$mail->Host = "";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "";  // SMTP username
$mail->Password = ""; // SMTP password                                                    
$mail->Port="";                                                                                  
$mail->SMTPSecure = "ssl";

$name=stripslashes($_POST['name']);                                                                         
$email=stripslashes($_POST['email']);                                                                       
$mail->From =  $email ;                                                         
$mail->FromName = "ENQUIRY";

$mail->AddAddress('nangananjanad@gmail.com');                                                                   
$mail->Subject = "CONTACT DETAILS";                                             


error_log($name,$email,$phone, $comments);


$body = '<p>Greetings,</p>';   
$body .= '<p>You have received the following enquiry.</p>';   
$body .= '<p>Name : '.$name .' </p>';   
$body .= '<p>Email : '. $email .' </p>';
$body .= '<p>Phone : '. $phone .' </p>';
$body .= '<p>Comments : '. $comments .' </p>'; 


$mail->MsgHTML($body);
$mail->IsHTML(true);

if($mail->Send())
  {
    echo 'success';
  }
else
  {
    echo 'error';
    error_log("Mailer Error: " . $mail->ErrorInfo);  
}


?>