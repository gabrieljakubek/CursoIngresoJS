function Mostrar()
{
	//declarar contadores y variables	
	var num;
	var contadorcero=0;
	var contadorposi=0;
	var contadornega=0;
	var respuesta=true;
	var sumaposi=0;
	var sumanega=0;
	var promeposi;
	var promenega;
	var contadorpar;
	var diferenciaposinega;
	while(respuesta==true)
	{
		num=parseInt(prompt("Ingrese un número"));
		while (isNaN(num))
		{
			num=parseInt(prompt("Ingrese un número"));
		}
			if(num<0)
			{
				contadornega++;
				sumanega+=num;
			}
			else if(num>0)
			{
				contadorposi++;
				sumaposi+=num;
			}
			else
			{
				contadorcero++;
			}
			if(num%2==0)
			{
				contadorpar++;
			}

		respuesta=confirm("Desea continuar?");
	}
	promenega=sumanega/contadornega;
	promeposi=sumaposi/contadorposi;
	diferenciaposinega=sumaposi-sumanega;
	document.write("La suma de los negativos es de: "+sumanega+"</br>");
	document.write("La suma de los positivos es de: "+sumaposi+"</br>");
	document.write("La cantidad de negativos es de: "+contadornega+"</br>");
	document.write("La cantidad de positivos es de: "+contadorposi+"</br>");
	document.write("La cantidad de ceros es de: "+contadorcero+"</br>");
	document.write("La cantidad de números pares es de: "+contadorpar+"</br>");
	document.write("El promedio de negativos es de: "+promenega+"</br>");
	document.write("El promedio de positivos es de: "+promeposi+"</br>");
	document.write("La diferencia entre positivos y negativos es de: "+diferenciaposinega+"</br>");
}//FIN DE LA FUNCIÓN