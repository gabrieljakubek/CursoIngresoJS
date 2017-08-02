//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var impor;
	var contdia = 1;
	var impormay = 0;
	var impormin = 0;
	var inicio = true;
	while(inicio==true)
	{
		impor= parseInt(prompt("Ingrese el importe del día "+contdia));
		while(isNaN(impor))
			{
				impor= parseInt(prompt("Ingrese el importe del día "+contdia));
			}
			while(impor<=0)
				{
					impor= parseInt(prompt("Ingrese el importe del día "+contdia));
				}
				impormay = impor;
				impormin = impor;
				contdia++;
				inicio=false;

	}
	while (contdia<8)
		{
			impor= parseInt(prompt("Ingrese el importe del día "+contdia));
			while(isNaN(impor))
			{
				impor= parseInt(prompt("Ingrese el importe del día "+contdia));
			}
			while(impor<=0)
				{
					impor= parseInt(prompt("Ingrese el importe del día "+contdia));
				}
				if (impormay<impor)
					{
						impormay=impor;
					}
				if (impormin>impor)
					{
						impormin=impor;
					}	
			contdia++;		
		}
	alert("El importe Mayor es de: $"+impormay);
	alert("El importe menor es de: $"+impormin);	
}

