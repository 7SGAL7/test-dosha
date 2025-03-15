
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $para = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL); // Sanitizar el email
    $asunto = "Tu Resultado Dosha - Centro Ayurveda";

    // Recibir los resultados de los doshas desde el formulario (ajusta los nombres de los campos si es necesario)
    $resultado_vata = $_POST["vata"] ?? "No disponible";
    $resultado_pitta = $_POST["pitta"] ?? "No disponible";
    $resultado_kapha = $_POST["kapha"] ?? "No disponible";
    $mensaje = "
    <html>
    <head>
        <title>Resultado de tu Dosha</title>
    </head>
    <body>
        <h1>Resultados de tu Dosha</h1>
        <p><strong>Vata:</strong> $resultado_vata</p>
        <p><strong>Pitta:</strong> $resultado_pitta</p>
        <p><strong>Kapha:</strong> $resultado_kapha</p>
        <br>
        <p>Gracias por realizar la prueba en <strong>Centro Ayurveda</strong>. Para más información, visita nuestra página web.</p>
    </body>
    </html>";
    
    $cabeceras = "MIME-Version: 1.0" . "\r\n";
    $cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $cabeceras .= "From: doshas@centroayurveda.mx" . "\r\n";
    $cabeceras .= "Reply-To: doshas@centroayurveda.mx" . "\r\n";
    $cabeceras = "From: doshas@centroayurveda.mx" . "\r\n" . "Reply-To: doshas@centroayurveda.mx" . "\r\n" . "X-Mailer: PHP/" . phpversion();

    echo "<script>console.log('Email recibido: " . $_POST["email"] . "');</script>";


    if (filter_var($para, FILTER_VALIDATE_EMAIL)) {
        if (mail($para, $asunto, $mensaje, $cabeceras)) {
            header("Location: ResultadoDoshas.html");
            exit;
        } else {
            header("Location: Ingreso.html");
            exit; 
        }
    } else {
        header("Location: Ingreso.html");   
        exit; 
    }
} else {
    header("Location: Ingreso.html");
    exit; 
}
?>
