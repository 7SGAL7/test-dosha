<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'bd/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $para = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL); // Sanitizar email
    $asunto = "Tu Resultado Dosha - Centro Ayurveda";

    // Recibir los resultados de los doshas desde el formulario (ajusta los nombres de los campos si es necesario)
    $resultado_vata = $_POST["vata"] ?? "No disponible";
    $resultado_pitta = $_POST["pitta"] ?? "No disponible";
    $resultado_kapha = $_POST["kapha"] ?? "No disponible";
    $nombre = strtoupper($conn->real_escape_string($_POST['nombre']));
    $correo = strtoupper($conn->real_escape_string($_POST['email']));

    // Determinar el mensaje basado en los resultados
    if ($resultado_vata > $resultado_pitta && $resultado_vata > $resultado_kapha) {
        $mensaje_dosha = "<h2>Tu dosha predominante es <strong>Vata</strong></h2>
        <p>Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad.</p>";
        $predominante = "Vata";
    } elseif ($resultado_pitta > $resultado_vata && $resultado_pitta > $resultado_kapha) {
        $mensaje_dosha = "<h2>Tu dosha predominante es <strong>Pitta</strong></h2>
        <p>Eres decidido, competitivo y apasionado, pero puedes ser propenso al estrés.</p>";
        $predominante = "Pitta";
    } elseif ($resultado_kapha > $resultado_vata && $resultado_kapha > $resultado_pitta) {
        $mensaje_dosha = "<h2>Tu dosha predominante es <strong>Kapha</strong></h2>
        <p>Eres tranquilo, compasivo y estable, pero puedes ser propenso a la pereza.</p>";
        $predominante = "Kapha";
    } else {
        $mensaje_dosha = "<h2>Tienes un equilibrio entre los doshas</h2>
        <p>Parece que tienes características de más de un dosha. Esto significa que tienes una personalidad versátil.</p>";
        $predominante = "Versatil";
    }

    // Cuerpo del correo en formato HTML
    $mensaje = "
    <html>
    <head>
        <title>Resultado de tu Dosha</title>
    </head>
    <body>
        <h1>Resultados de tu Dosha</h1>
        $mensaje_dosha
        <p><strong>Vata:</strong> $resultado_vata</p>
        <p><strong>Pitta:</strong> $resultado_pitta</p>
        <p><strong>Kapha:</strong> $resultado_kapha</p>
        <br>
        <br>
        <p>Gracias por realizar la prueba en <strong>Centro Ayurveda</strong>. Para más información, visita nuestra página web.</p>

        <a href='https://centroayurveda.mx/'>Visita el sitio</a>
    </body>
    </html>";

    // Configurar cabeceras para enviar el correo en formato HTML
    $cabeceras = "MIME-Version: 1.0" . "\r\n";
    $cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $cabeceras .= "From: doshas@centroayurveda.mx" . "\r\n";
    $cabeceras .= "Reply-To: doshas@centroayurveda.mx" . "\r\n";
    
    // Validar email antes de enviar
    if (filter_var($para, FILTER_VALIDATE_EMAIL)) {
        EnviarCorreo($asunto,$mensaje,$para);
        if (true) {
            $para_ = filter_var("centroayurvedamex@gmail.com", FILTER_SANITIZE_EMAIL);
            $asunto_ = "El Resultado Dosha de " . $_POST['nombre'];
            $mensaje_ = "
            <html>
            <head>
                <title>Resultado de " . $_POST['nombre'] . "</title>
            </head>
            <body>
                <h1>Resultados</h1>
                $mensaje_dosha
                <p><strong>Vata:</strong> $resultado_vata</p>
                <p><strong>Pitta:</strong> $resultado_pitta</p>
                <p><strong>Kapha:</strong> $resultado_kapha</p>
                <p> email: " . $para . " </p>
            </body>
            </html>";

            EnviarCorreo($asunto_,$mensaje_,$para_);
            if(true){
                // Preparar la consulta SQL para insertar los datos
                $sql = "INSERT INTO usuarios(Name, Email, Dosha, Vatta, Pitta, Kapha) VALUES ('$nombre', '$correo', '$predominante', '$resultado_vata', '$resultado_pitta', '$resultado_kapha')";
                $conn->query($sql);
            }
            //mail($para, $asunto, $mensaje, $cabeceras)
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

function EnviarCorreo($subject, $body, $destinatario) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostingerW.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'doshas@centroayurveda.mx';
        $mail->Password = '8vK$*!pH0';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom('doshas@centroayurveda.mx', 'centroayurveda');
        $mail->addAddress($destinatario);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = strip_tags($body);
        $mail->CharSet = 'UTF-8';

        $mail->send();
    } catch (Exception $e) {
        echo "No se pudo enviar el mensaje. Error: {$mail->ErrorInfo}";
    }
}





?>
