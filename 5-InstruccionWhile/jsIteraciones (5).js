function Mostrar()
{

var sexo = prompt("Ingrese F ó M .");

	while (sexo != "F".toLowerCase() || sexo != "M".toLowerCase())
	{
		sexo=prompt("Ingrese F o M");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN