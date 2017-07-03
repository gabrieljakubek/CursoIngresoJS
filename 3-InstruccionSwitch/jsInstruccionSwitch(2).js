function Mostrar()
{
//tomo la edad  
var Mes = document.getElementById('mes').value;
switch (Mes)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Junio":
    alert("Falta para el invierno.");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break;
    default:
    alert("Ya pasamos el frio, ahora calor!!!.");
    break;
}
/*if (Mes == "Septiembe" || Mes == "Octubre" || Mes == "Noviembre" || Mes == "Diciembre")
{
    alert("Ya pasamos el frio, ahora calor!!!.");
}
else if (Mes == "Julio" || Mes == "Agosto")
{
    alert("Abrigate que hace frio.");
}
else
{
    alert("Falta para el invierno.");
}*/
}//FIN DE LA FUNCIÓN