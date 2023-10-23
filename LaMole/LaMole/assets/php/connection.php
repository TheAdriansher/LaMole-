<?php
$db = mysqli_connect('localhost', 'root', 'admin', 'lamole');
if (!$db) {
    echo ("Error al conectar con la base");
}