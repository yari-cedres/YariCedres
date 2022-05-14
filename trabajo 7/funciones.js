//fetch ('texto.txt')
//.then(data => data.text())
//.then(data =>{
//  console.log(data)
//})
function resul() {

  
 
fetch('https://randomuser.me/api/')
.then(res=>res.json())
.then( res=> { 
  document.getElementById("nom").innerHTML = res.results[0].name.first 
  document.getElementById("ape").innerHTML = res.results[0].name.last 
  document.getElementById("sex").innerHTML = res.results[0].gender
  document.getElementById("eda").innerHTML = res.results[0].dob.age
  document.getElementById("email").innerHTML = res.results[0].email
  document.getElementById("imagen").setAttribute('src',res.results[0].picture.large)
  
} ) 

  
}