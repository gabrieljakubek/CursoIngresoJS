function Mostrar()
{
//tomo la edad  
var age;
var Estadocivil = document.getElementById("estadoCivil").value;
 age= document.getElementById("edad").value;

 if(age >=18 && Estadocivil == "Soltero")
 {
      alert("Es soltero y no es menor");
 }

}//FIN DE LA FUNCIÓN