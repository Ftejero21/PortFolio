<?php

$destinatario = 'fernandotejero566@gmail.com';

$nombre = &_POST['nombre'];
$email = &_POST['email'];
$mensaje = &_POST['mensaje'];


$header = "Enviado Desde El PortFolio";
$mensajeCompleto = $mensaje . " /nAtentamente: " . $nombre;

 mail($destinatario,$nombre,$email,$mensajeCompleto,$header);
 echo "<script> alert('Mensaje enviado Exitosamente') </script>";
 
?>