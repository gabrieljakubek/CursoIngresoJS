/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre = prompt();
	document.getElementById("elNombre").value = nombre;
	console.log ("elNombre")
}

