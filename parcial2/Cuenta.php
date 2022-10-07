<?php



class Cuenta {
private $titular;

private $cantidad;


public function __construct($titular,$cantidad)
{

    $this->titular = $titular;
    $this->cantidad = $cantidad;


    
    
}

public function setTitular($titular){

    $this->titular = $titular;

}

public function getTitular(){

    return $this->titular;
}
public function setCantidad($cantidad){

    $this->cantidad = $cantidad;

}

public function getCantidad(){

    return $this->cantidad;
}


public function mostrar() {
    echo "titular: ". $this->titular. '<br>';
    echo "cuenta: ". $this->cantidad. '<br>';
    }


    public function ingresar($cantidad){
 
        if ($cantidad > 0) {
           $this->cantidad = $this->cantidad + $cantidad;;
        }
    
    }



    public function retirar($cantidad){
 
        
           $this->cantidad = $this->cantidad - $cantidad;;
        
    
    }
}

$cuenta = new Cuenta('yari',100); 


$cuenta -> setCantidad(20);

echo $cuenta -> getCantidad(); 




?>