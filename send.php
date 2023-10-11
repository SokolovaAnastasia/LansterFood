<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$text = $_POST['text'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$email = urldecode($email);
$tel = urldecode($tel);
$text = urldecode($text);

$fio = trim($fio);
$email = trim($email);
$tel = trim($tel);
$text = trim($text);

if (mail("totoshamycat@gmail.com", "Заявка с сайта",
"ФИО:  ".$fio.".

E-mail:  ".$email.".

Телефон:  ".$tel.".

Сообщение:  ".$text ,
"From: $email \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>

