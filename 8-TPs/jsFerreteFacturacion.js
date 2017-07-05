/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
{
 var preciouno;
 var preciodos;
 var preciotres;
 var resultado;   
function Sumar () 
{
	preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);
    resultado = preciouno+preciodos+preciotres;
    alert("La suma total es de $"+resultado);
}
function Promedio () 
{
	preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);
    resultado =((preciouno+preciodos+preciotres)/3);
    alert("El promedio es de $"+resultado);
}
function PrecioFinal () 
{
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value;
    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);
    resultado = (preciouno+preciodos+preciotres)*1.21;
    alert("El precio final es de $"+resultado);
}
}