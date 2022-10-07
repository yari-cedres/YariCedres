
var ID = null;

function RickandMorty() {
  var datos

  ID = document.getElementById("ID").value


  if (ID>826 || ID<1 ) {

    document.getElementById("1").style.color = 'red'
   
    datos = 'ingrese un valor entre 1 y 826';
    
    document.getElementById("1").innerHTML = datos;

    
    
    return
    
  }

    fetch("https://rickandmortyapi.com/api/character/"+ID)
    .then((res)=>res.json())
    .then((res)=>{
      
      document.getElementById("esconder").setAttribute("hidden",'');
      document.getElementById("guardar").removeAttribute("hidden");

      datos = ` <p style="text-align:center">
      ID:${res.id} <br>
      nombre:${res.name} <br>
      estado:${res.status} <br>
      especie:${res.species} <br>
      tipo:${res.type} <br>
      sexo:${res.gender} <br>
      origen:${res.origin.name} <br>
      ubicacion:${res.location.name}<br> 
       foto:</p>`;

      document.getElementById("imagen").src = res.image;

      document.getElementById("1").style.color = 'black';

      document.getElementById("1").innerHTML = datos;
        

      document.getElementById('Num').value = res.id;

      document.getElementById('Nom').value = res.name;
      document.getElementById('estado').value = res.status;
      document.getElementById('especie').value = res.species;
      document.getElementById('tipo').value = res.type;
      document.getElementById('sexo').value = res.gender;
      document.getElementById('origen').value = res.origin.name;
      document.getElementById('ubicacion').value = res.location.name;
     } )
  }
      

