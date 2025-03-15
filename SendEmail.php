
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $para = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL); // Sanitizar el email
    $asunto = "Resultado Dosha";
    $mensaje = "Hola, este es el resultado de tu dosha.";
    $cabeceras = "From: doshas@centroayurveda.mx" . "\r\n" . "Reply-To: doshas@centroayurveda.mx" . "\r\n" . "X-Mailer: PHP/" . phpversion();

    echo "<script>console.log('Email recibido: " . $_POST["email"] . "');</script>";


    if (filter_var($para, FILTER_VALIDATE_EMAIL)) {
        if (mail($para, $asunto, $mensaje, $cabeceras)) {
            echo "Correo enviado correctamente.";
        } else {
            echo "Error al enviar el correo.";
        }
    } else {
        echo "Dirección de correo no válida.";
    }
} else {
    echo "Método no permitido.";
}
?>
