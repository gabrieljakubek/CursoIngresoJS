/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
{
    var largo;
    var ancho;
    var resultado;
function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    resultado = (2*largo+2*ancho)*3;
    alert("La cantidad de alambre es de "+resultado+" m.");
}
function Circulo () 
{
	var radio;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    resultado =(Math.PI*radio*radio)*3;
    alert("La cantidad de alambre es de "+resultado+" m.");
}
function Materiales () 
{
	var cemento;
    var cal;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value; 
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cemento = (largo*ancho) * 2;
    cal = (largo*ancho) * 3;
    alert("Se nesecitan "+cemento+" de cemento y "+cal+(" de cal"));
}
}