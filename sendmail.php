<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $errors = [];

    if (empty($name)) {
        $errors[] = "Name is required";
    }
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    if (empty($subject)) {
        $errors[] = "Subject is required";
    }
    if (empty($message)) {
        $errors[] = "Message is required";
    }


    if (!empty($errors)) {
        echo "Please fix the errors:<br>";
        foreach ($errors as $error) {
            echo "- $error <br>";
        }
        exit;
    }

    $mail = new PHPMailer(true);

    try {
 
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'portfolio@swarupkst.com'; 
        $mail->Password   = '?Xn!Ln+8Pp>'; 
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;


        $mail->setFrom('portfolio@swarupkst.com', 'Website Contact');
        $mail->addAddress('swarupkst@gmail.com'); 

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form: $subject";
        $mail->Body    = "
            <b>Name:</b> $name <br>
            <b>Email:</b> $email <br>
            <b>Subject:</b> $subject <br>
            <b>Message:</b> $message
        ";

        $mail->send();
        echo "✅ Message sent successfully!";
    } catch (Exception $e) {
        echo "❌ Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
