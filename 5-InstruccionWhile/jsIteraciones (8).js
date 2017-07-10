function Mostrar()
{
	var acumuladorsuma=0;
	var acumuladormulti=1;
	var respuesta;
	var num;
	respuesta=true;
	while(respuesta==true)
	{
		num=parseInt(prompt("Ingrese un número"));
		if(num>=0)
		{
			acumuladorsuma+=num;
		}
		else
		{
			acumuladormulti*=num;
		}
		respuesta=confirm("Desea agregar más números?");
	}
document.getElementById('suma').value=acumuladorsuma;
document.getElementById('producto').value=acumuladormulti;

}//FIN DE LA FUNCIÓN