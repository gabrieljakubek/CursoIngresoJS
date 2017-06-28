function Mostrar()
{
//tomo la edad  
var age;
var Estadocivil = document.getElementById("estadoCivil").value;
 age= document.getElementById("edad").value;

 if(age <=13 && Estadocivil == "Soltero")
 {
      alert("Es muy pequeño para NO ser soltero");
 }

}//FIN DE LA FUNCIÓN