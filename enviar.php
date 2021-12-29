<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];



if(mail('fernandotejero566@gmail.com',$nombre,$email,$mensaje)){
    echo "Email enviado";
}else{
    echo "Error";
}

?>