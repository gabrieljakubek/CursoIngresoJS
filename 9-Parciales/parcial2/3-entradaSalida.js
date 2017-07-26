//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Ancho = parseInt(document.getElementById("ancho").value);
	var Largo = parseInt(document.getElementById("largo").value);
	var Alambre;
	Alambre = (2*Largo+2*Ancho)*6;
	alert("La cantidad de alambre es de: "+Alambre+" m.");
}