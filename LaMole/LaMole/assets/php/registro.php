<?php
include './connection.php';

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$numero = $_POST['numero'];


$query = "INSERT INTO lamole (nombre, apellido, correo, numero) VALUES ('$nombre', '$apellido', '$correo', '$numero');";
$request = mysqli_query($db, $query);
if ($request) {
    header('Location: ../index.html');
} else {
    echo ("Error");
} 


header('Location: ../../index.html');
