<?php

require('Persona.php');
require("CuentaJoven.php");
$persona = new Persona("yari",21,545564);




$persona -> mostrar();


echo "es mayor de edad: ";


echo $persona -> esMayorDeEdad() ? "true":"false" ;

echo '<br>';


echo'------- <br>';


$cuentaJoven = new CuentaJoven('yari',100,10,21);





$cuentaJoven-> mostrar() ;


echo "El titular es vaido: " ;
echo  $cuentaJoven -> esTitularValido() ? "true":"false";
echo "<br>";
?>