<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto CaliDatos - variables</title>
    </head>
<body>
<?php
session_start();
    $us = $_SESSION["usuario"]; //se valida que se haya creado la variable de sesión
    if ($us == ""){
    header("Location:index.php"); //si la variable no se ha creado se redirige a index.php
}
?>
<h1>PROYECTO CALI DATOS</h1>
<h2>Selecciona la variable</h2>
<table border="2px">
    <tr><th>VARIABLE</th><th>DESCRIPCION</th><th>ENLACE</th></tr>
    <tr><td>NODO</td><td>Nodo es una variable ...</td
    ><td><a href="temperatura.php">IR A NODOS</a></td></tr>
    <tr><td>HUMEDAD</td><td>La humedad es una variable ...</td><td><a
    href="humedad.php">IR A HUMEDAD</a></td></tr>
</table>
<a href="logout.php">Cerrar Sesion</a>
</body>
</html>