function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var num;
	respuesta=true;
	while (respuesta==true)
	{
		num=parseInt(prompt("Ingrese un número"));
		acumulador=acumulador+num;
		contador++;
		respuesta=confirm("Desea seguir agregando números?");
	}	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN