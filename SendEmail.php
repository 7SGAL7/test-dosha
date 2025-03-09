<?php
$para = "destinatario@example.com";
$asunto = "Asunto del correo";
$mensaje = "Hola, este es un correo de prueba desde PHP.";
$cabeceras = "From: remitente@example.com" . "\r\n" .
             "Reply-To: remitente@example.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

if (mail($para, $asunto, $mensaje, $cabeceras)) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}
?>