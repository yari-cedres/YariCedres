
<?php

require("Cuenta.php");

class CuentaJoven extends Cuenta{

    private $bonificacion;
    public $edad;



    public function __construct($titular,$cantidad,$bonificacion,$edad)
    {

        $this->edad = $edad;
        $this->titular = $titular;
        $this->cantidad = $cantidad;
        $this->bonificacion = $bonificacion;
        
        
    }

    public function setBonificacion($bonificacion){

        $this->bonificacion = $bonificacion;
    
    }
    
    public function getBonificacion(){
    
        return $this->bonificacion;
    }

    public function esTitularValido(){

        if ( $this->edad >18 && $this->edad <25) {
            
            return true;
        }else {
            return false;
        }
    }


    public function mostrar(){


        $aux = $this->cantidad +(($this->bonificacion/100)* $this->cantidad);

        echo "titular: ". $this->titular. '<br>';
        echo "cuenta: ". $aux. "<br>";


}
}



?>