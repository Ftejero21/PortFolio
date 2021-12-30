<?php

$destinatario = "fernandotejero@gmail.com";

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

if(mail($destinatario,$nombre,$email,$mensaje)){
    echo "email enviado";
}else{
    echo "Error";
}




?>