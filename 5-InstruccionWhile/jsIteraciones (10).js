function Mostrar()
{
	//declarar contadores y variables	
	var num;
	var contadorcero=0;
	var contadorposi=0;
	var contadornega=0;
	var num;
	var posi=0;
	var nega=0;
	var respuesta=true;
	var sumaposi=0;
	var sumanega=0;
	var promeposi;
	var promenega;
	var par;
	while(respuesta==true)
	{
		num=parseInt(prompt("Ingrese un número"));
		while (isNaN(num))
		{
			num=parseInt(prompt("Ingrese un número"));
		}
		
		if(num<0)
		{
			nega=num;
			contadornegativos++;
		}
		else if(num>0)
		{
			posis=num;
			contadorpositivos++;
		}
		else
		{
			contadorcero++;
		}
		
		respuesta=confirm("Desea continuar?");
	}
	document.write()
}//FIN DE LA FUNCIÓN