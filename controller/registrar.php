<?php
require '../bd/conexion.php';

// Verificar si se han recibido los datos del formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capturar los datos del formulario
    $sql_id = "SELECT id FROM employees ORDER BY id DESC LIMIT 1;";
    $result = $conn->query($sql_id);

    if ($result->num_rows > 0) { 
        $row = $result->fetch_assoc();
        $id = $row['id'] + 1;
    }else{
        $id = 1;
    }

    $nombre = strtoupper($conn->real_escape_string($_POST['name']));
    $lastname = strtoupper($conn->real_escape_string($_POST['lastname']));

    // Preparar la consulta SQL para insertar los datos
    $sql = "INSERT INTO employees(Name, Email) VALUES ('$nombre', '$correo')";

    $conn->query($sql)
}

$conn->close();
?>