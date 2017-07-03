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
}//FIN DE LA FUNCIÓN