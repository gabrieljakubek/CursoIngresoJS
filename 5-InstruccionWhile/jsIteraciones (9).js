function Mostrar()
{
	// declarar variables
	var max;
	var min;
	var num;
	var respuesta=true;
	var primera =true;
	while(respuesta!=false)
	{
		num=prompt("Ingrese un número");
		while(isNaN(num))
		{
			num=prompt("Ingrese un número");
		}
		if(primera==true)
		{
			max=num;
			min=num;
			primera=false;
		}
		else if(num<min)
		{
			min=num;
		}
		else if(num>max)
		{
			max=num;
		}
		respuesta=confirm("Desea continuar?");
	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;
}//FIN DE LA FUNCIÓN