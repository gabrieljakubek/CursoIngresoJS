//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Importe = parseInt(prompt("Ingrese el importe del producto"));
	var Importefinal;
	Importefinal=Importe*1.21;
	document.getElementById("importe").value=Importefinal;
}

