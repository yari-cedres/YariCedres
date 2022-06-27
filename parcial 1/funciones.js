let socio1 = {
  apellido: "parra",
  nombre: "javier",
  edad: 41,
  facturas: 1,
  dni: 1,
};
let socio2 = {
  apellido: "silveyra",
  nombre: "gonzalo",
  edad: 20,
  facturas: 5,
  dni: 2,
};
let socio3 = {
  apellido: "martin",
  nombre: "fernandez",
  edad: 23,
  facturas: 3,
  dni: 3,
};
let socio4 = {
  apellido: "agustin",
  nombre: "carabllo",
  edad: 34,
  facturas: 20,
  dni: 4,
};
let socio5 = {
  apellido: "federico",
  nombre: "sola",
  edad: 27,
  facturas: 7,
  dni: 5,
};
// se necesita buscar por el dni si el socio existe en caso de no existir mostrar en rojo 'no existe'
// si existe evaluar lo siguente
// si tiene menos de 3 facturas mostrar en verde
// mas de 3 y menos de 6 mostrar en amarillo
// mas de 6 mostrar en rojo
// en todos los casos mostrar nombre y cantidad de facturas

function per() {


let dni_entrante = document.getElementById("DNI").value;
  let arraySocios = [socio1, socio2, socio3, socio4, socio5];

  let existe = arraySocios.find( result => result.dni== dni_entrante )

  if (existe == undefined) {
    let no = "cliente no encontrado";
    document.getElementById("resultado").style.color = "black";
    document.getElementById("resultado").innerHTML = no;
    document.getElementById("cuadrado").style.backgroundColor = "red";

  } else{
    var datos = `nombre:${existe.nombre} <br>
          apellido:${existe.apellido} <br>
          facturas: ${existe.facturas} <br>
          edad: ${existe.edad}`;
        document.getElementById("resultado").innerHTML = datos;
  
        if (existe.facturas > 3) {
          document.getElementById("cuadrado").style.backgroundColor = "yellow";
          if (existe.facturas > 5) {
            document.getElementById("cuadrado").style.backgroundColor = "red";
          }
        } else {
          document.getElementById("cuadrado").style.backgroundColor = "green";
        }



  }






  /* let existe = arraySocios.some(vuelta => vuelta.dni == dni_entrante)

  

 if (existe == false) {

    
  } else{
    arraySocios.forEach((element) => {
      if (dni_entrante == element.dni) {
        var datos = `nombre:${element.nombre} <br>
          apellido:${element.apellido} <br>
          facturas: ${element.facturas} <br>
          edad: ${element.edad}`;
        document.getElementById("resultado").innerHTML = datos;
  
        if (element.facturas > 3) {
          document.getElementById("cuadrado").style.backgroundColor = "yellow";
          if (element.facturas > 5) {
            document.getElementById("cuadrado").style.backgroundColor = "red";
          }
        } else {
          document.getElementById("cuadrado").style.backgroundColor = "green";
        }
      }
    });


    
  }
  */
}
