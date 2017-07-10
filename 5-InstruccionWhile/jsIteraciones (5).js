function Mostrar()
{
	var sexo = prompt("Ingrese F ó M");

	while (sexo!="F"&& sexo!= "M")
	{
		sexo=prompt("Reingrese F o M");
	}
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN