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
!isset($_POST['email_from']) || !isset($_POST['nome']) || !isset($_POST['nif']) || !isset($_POST['relacao-iscte']) || !isset($_POST['valor']) || !isset($_POST['numero']) || !isset($_POST['codpostal'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }


$email_from = $_POST['email_from'];
$nome = $_POST['nome'];
$nif = $_POST['nif']; 
$morada = $_POST['morada'];
$localidade = $_POST['localidade']; //
$codpostal = $_POST['codpostal']; // 
$relacao = $_POST['relacao-iscte'];
$valor = $_POST['valor'];
$numero = $_POST['numero'];

$error_message = "";
$email_exp = "^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$";
if(!eregi($email_exp,$email_from)) {
$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
}
if(strlen($error_message) > 0) {
died($error_message);
}

$email_message = "Email: ".($email_from)."\nNome:".$nome."\nNIF: ".$nif."\nMorada: ".$morada." - ".$localide." - ".$codpostal."\nRelação com ISCTE: ".$relacao."\n Valor pago: ".$valor."\n Peça Numero".$numero;

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers) or die("erro");
?>

<h3>Obrigado por ter adquirido a peça <?php echo $numero; ?>, vamos entrar em contacto em breve.</h3>

 
<meta http-equiv="Refresh" content="3; url=http://muralsolidario.iscte-iul.pt/" />

<?php
}
?>