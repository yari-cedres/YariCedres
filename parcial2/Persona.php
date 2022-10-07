<?php


class Persona {

private $nombre ;

private $edad ;

private $DNI ;

public function __construct($nombre,$edad,$DNI)
{

    $this->nombre = $nombre;
    $this->edad = $edad;
    $this->DNI = $DNI;
    
}

public function setNombre($nombre){

    $this->nombre = $nombre;

}

public function getNombre(){

    return $this->nombre;
}

public function setEdad($edad){

    $this->edad = $edad;

}

public function getEdad(){

    return $this->edad;
}

public function setDNI($DNI){

    $this->DNI = $DNI;

}

public function getDNI(){

    return $this->DNI;
}

 
public function mostrar() {

echo "nombre: ". $this->nombre. '<br>';
echo "Edad: ". $this->edad. '<br>';
echo "DNI: ". $this->DNI. '<br>';

    

}


public function esMayorDeEdad(){

if ( $this->edad >= 18 ) {

    return true;


}else {
    return false;
}



}


}




?>