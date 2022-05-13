let superh ={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "capitan america",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "aironman",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "subzero",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  //console.log(superh.members[1].name)
  //console.log(superh.members[2].powers[0])

  //for(let i=0;i<superh.members.length;i++){

    //for(let b=0;b<superh.members[i].powers.length;b++){
      //  if (superh.members[i].age>35){
    //        console.log(superh.members[i].powers[b])
    //    }
       
  //  }
    
//}
  
//for(const key in superh.members){
//    const element = superh.members[key]
//    console.log(element.powers)

//}

function superhero(){
    for(let i=0;i<superh.members.length;i++){
     
        if (superh.members[i].age>100){
            let result = superh.members[i].name
             document.getElementById("res").innerHTML = result
        }

    }
}
function reset(){
    document.getElementById("res").innerText = ""
}