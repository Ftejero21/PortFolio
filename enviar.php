<?php

$destinatario = "fernandotejero@gmail.com";

$nombre = $_GET['nombre'];
$email = $_GET['email'];
$mensaje = $_GET['mensaje'];

if(mail($destinatario,$nombre,$email,$mensaje)){
    echo "email enviado";
}else{
    echo "Error";
}




?>