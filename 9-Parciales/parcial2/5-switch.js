//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes = prompt("Ingrese el mes:");
	var minusmes = mes.toLowerCase();
	switch(minusmes)
	{
		case "enero":
		case "febrero":
		alert("Veranito!!!!!");
		break;
		case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "diciembre":
		alert("Extraño el verano!!!");
		break;
		default:
		alert("No ingreso un mes!!!");
		break;
	}
}