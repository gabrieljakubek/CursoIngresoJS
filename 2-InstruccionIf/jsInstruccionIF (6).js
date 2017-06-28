function Mostrar()
{
//tomo la edad  
var age;

 age= document.getElementById("edad").value;

 if(age <= 13 )
 {
      alert("Usted es menor de edad");
 }
 else
 {
     if(age >13 && age <=17)
     {
         alert("Usted es adolecente");
     }
     else
     {
         alert("Usted es mayor de edad")
     }
 }

}//FIN DE LA FUNCIÓN