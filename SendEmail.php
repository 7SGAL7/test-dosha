<?php
$para = "destinatario@example.com";
$asunto = "Resultado Dosha";
$mensaje = "Hola, este es el resultado de tu dosha: .";
$cabeceras = "From: remitente@example.com" . "\r\n" . phpversion();

if (mail($para, $asunto, $mensaje, $cabeceras)) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}
?>