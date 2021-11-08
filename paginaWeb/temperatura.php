<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto CaliDatos - temperatura</title>
    </head>
<body>
<?php
session_start();
$us = $_SESSION["usuario"];
if ($us == ""){
    header("Location:index.php");
}
?>
<h1>PROYECTO FIOT</h1>
<h2>Datos de nodos</h2>
<table border="2px">
<tr><th>CALLE</th><th>SLOT</th><th>ESTADO</th><th>FECHAHORA</th></tr>
<?php

$url_rest="localhost:3000/nodos"; //se define la url del servidor

$curl=curl_init($url_rest); //se da inicio al curl y se fijanlas opciones
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$respuesta = curl_exec($curl); //se ejecuta curl
if ($respuesta === false){
    curl_close();
    die ("Error");
}
curl_close($curl);
$resp = json_decode($respuesta);//se convierte el json en un arreglo
$tam = count($resp);


for ($i=0; $i<$tam; $i++){
    $j = $resp[$i];
    $id = $j -> id_Calle; //se obtiene cada dato del json
    $sl = $j -> slot;
    $est = $j -> estado;
    $fh = $j -> fechaHora;
    echo "<tr><td>$id</td><td>$sl</td><td>$est</td><td>$fh </td></tr>";
}
?>
</table>
<a href="variables.php">Volver</a><br>
<a href="logout.php">Cerrar Sesion</a>
</body>
</html>