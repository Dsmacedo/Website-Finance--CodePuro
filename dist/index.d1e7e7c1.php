<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST)) {
    // Recolher os dados do formulário
    $nome = isset($_POST["nome"]) ? $_POST["nome"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $assunto = isset($_POST["assunto"]) ? $_POST["assunto"] : '';
    $mensagem = isset($_POST["message"]) ? $_POST["message"] : '';

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'escolatecnocursos.com.br';
        $mail->SMTPAuth = true;
        $mail->Username = 'emailsite@escolatecnocursos.com.br';
        $mail->Password = '#Tecno2024@';
        $mail->SMTPSecure = 'ssl'; // tls ou ssl
        $mail->Port = 465; // a porta pode variar, verifique com seu provedor de e-mail

        // Configurações do e-mail
        $mail->setFrom($email, $nome);
        
        // Determinar o email de destino com base no assunto
        switch ($assunto) {
            case "comercial":
                $mail->addAddress('solange@escolatecnocursos.com.br');
                break;
            case "financeiro":
                $mail->addAddress('solange@escolatecnocursos.com.br');
                break;
            case "suporte":
                $mail->addAddress('suporte@escolatecnocursos.com.br');
                break;
            case "trabalhe_conosco":
                $mail->addAddress('naiane.tomaz@escolatecnocursos.com.br');
                break;
            default:
                // Se nenhum assunto válido for selecionado, redirecionar para uma página de erro ou retornar uma mensagem de erro
                echo "Por favor, selecione um assunto válido.";
                exit;
        }
        
        $mail->Subject = 'Contato do Formulário - ' . $assunto;
        $mail->Body = "Nome: $nome\nEmail: $email\nAssunto: $assunto\nMensagem:\n$mensagem";

        // Enviar e-mail
        $mail->send();
        
        // Redirecionar após o envio bem-sucedido
        header('Location: index.html');
        exit();
    } catch (Exception $e) {
        // Exceção ocorreu durante o envio do e-mail
        echo 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo;
    }
}
?>
<script>alert("E-MAIL ENVIADO COM SUCESSO, RESPONDEREMOS EM BREVE, OBRIGADO!!!")</script>
