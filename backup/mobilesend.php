<?php

if(isset($_POST['email_from'])) {
// EDIT THE 2 LINES BELOW AS REQUIRED
$email_to = "alexakustov@gmail.com";
$email_subject = "Mais um apoiante ISCTE-IUL!";
function died($error) {
// your error code can go here
echo "We are very sorry, but there were error(s) found with the form your submitted. ";
echo "These errors appear below.<br /><br />";
echo $error."<br /><br />";
echo "Please go back and fix these errors.<br /><br />";
die();
}

// validation expected data exists
if(
!isset($_POST['email_from']) || !isset($_POST['nome']) || !isset($_POST['nif']) || !isset($_POST['relacao-iscte']) || !isset($_POST['valor']) ||
        !isset($_POST['codpostal'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }


$email_from = $_POST['email_from'];
$nome = $_POST['nome'];
$nif = $_POST['nif']; 
$morada = $_POST['morada']; // 
$localidade = $_POST['localidade']; //
$codpostal = $_POST['codpostal']; // 
$relacao = $_POST['relacao-iscte'];
$valor = $_POST['valor'];




$error_message = "";
$email_exp = "^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$";
if(!eregi($email_exp,$email_from)) {
$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
}
if(strlen($error_message) > 0) {
died($error_message);
}
$email_message = "Detalhes.\n\n";

$email_message .= "Email: ".($email_from)."\n".$nome."\n".$nif."\n".$morada."\n".$localide."\n".$codpostal."\n".$relacao."\n".$valor;
// create email headers

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers) or die("erro");

?>

Obrigado, vamos entrar em contacto em breve.<br />
Voltar a pagina inicial. 
<?php
}
?>