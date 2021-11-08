<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto CaliDatos</title>
    </head>
<body>
<?php
if(isset($_POST["submit"])){ //se verifica si el usuario presiono el boton de submit
    $login=$_POST["login"]; //se recogen las variables ingresadas por el usuario
    $pass=$_POST["pass"];
    if($login == "admin" && $pass == "1234"){ //se valida el login y password
    session_start(); //se inicia la sesion y se crea la variable de sesion
    $_SESSION["usuario"]=$login;
    header("Location:variables.php"); //se redirige a la pagina variables.php
    }
    else{
    session_start(); //si las credenciales no son correctas se deja vacia la variable de sesion
    $_SESSION["usuario"]="";
    header("Location:index.php"); //se queda en la misma página
    }
}
else { // si no se ha presionado el boton de submit se muestra el formulario
    ?>
    <h1>PROYECTO CALI DATOS</h1>
    <form action="index.php" method="post">
        Login: <input type="text" name="login"><br>
        Password: <input type="password" name="pass"><br>
        <input type="submit" value="ENVIAR" name="submit">
    </form>
    <?php
    }
?>
</body>
</html>