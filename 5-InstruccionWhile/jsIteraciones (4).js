function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 9.");
	while (numero<0 || numero>10)
	{
		numero=prompt("ingrese un número entre 0 y 9.");
	}
}//FIN DE LA FUNCIÓN