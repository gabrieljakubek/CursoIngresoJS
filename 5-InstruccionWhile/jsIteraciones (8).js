function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta;
	var num;
	respuesta=true;
	while(respuesta==true)
	{
		num=parseInt(prompt("Ingrese un número"));
		if(num>=0)
		{
			positivo=positivo+num;
		}
		else
		{
			negativo=negativo*num;
		}
		respuesta=confirm("Desea agregar más números?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN