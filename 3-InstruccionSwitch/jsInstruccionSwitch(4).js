function Mostrar()
{
//tomo la edad  
var Mes = document.getElementById('mes').value;
switch (Mes)
{
    case "Febrero":
    alert("Tiene 28 días");
    break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("Tiene 31 días");
    break;
    default:
    alert("Tiene 30 días");
    break;
}
/*if (Mes == "Febrero")
{
    alert("Tiene 28 días");
}
else if (Mes == "Abril" || Mes == "Junio" || Mes == "Septiembre" || Mes == "Noviembre")
{
    alert("Tiene 31 días");
}
else
{
    alert("Tiene 30 días");
}*/
}//FIN DE LA FUNCIÓN