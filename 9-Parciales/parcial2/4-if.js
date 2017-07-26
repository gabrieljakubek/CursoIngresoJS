//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numuno = parseInt(prompt("Ingrese un número"));
	var numdos = parseInt(prompt("Ingrese un número"));
	var resultado;
	if (numuno==numdos)
	{
		resultado=numuno*numdos;
	}
	else if (numuno>numdos)
	{
		resultado=numuno-numdos;
	}
	else
	{
		resultado=numuno+numdos;
	}
	document.write("El resultado es: "+resultado);
}

