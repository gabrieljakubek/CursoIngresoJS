function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta;
	var num;
	respuesta=true;
	while (respuesta==true)
	{
		contador++;
		num=parseInt(prompt("Ingrese un número"));
		while (isNaN(num))
		{
			num=parseInt(prompt("Ingrese un número"));
		}
		acumulador=acumulador+num;
		respuesta=confirm("Desea seguir agregando números?");
	}	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN