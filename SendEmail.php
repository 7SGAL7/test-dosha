
<?php
$para = $_POST["email"]; // Tomar el email del formulario
$asunto = "Resultado Dosha";
$mensaje = "Hola, este es el resultado de tu dosha: .";
$cabeceras = "From:  doshas@centroayurveda.mx" . "\r\n" . phpversion();
if (mail($para, $asunto, $mensaje, $cabeceras)) {
    header("Location: ResultadoDoshas.html"); 
    exit();
} else {
    header("Location: Ingreso.html"); 
    exit();
}
?>