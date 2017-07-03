function Mostrar()
{
//tomo la edad  
var Mes = document.getElementById('mes').value;
switch (Mes)
{
    case "Febrero":
    alert("Este mes no tiene más de 29");
    break;
    default:
    alert("Este mes tiene 30 o más días");
    break;
}
/*if(Mes == "Febrero")
{
    alert("Este mes no tiene más de 29");
}
else
{
   alert("Este mes tiene 30 o más días"); 
}*/
}//FIN DE LA FUNCIÓN