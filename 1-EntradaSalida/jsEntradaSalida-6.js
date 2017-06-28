/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numerouno = document.getElementById("numeroUno").value;
    var numerodos = document.getElementById("numeroDos").value;
    var resultado;
    numerouno = parseInt (numerouno);
    numerodos = parseInt (numerodos);
    resultado = numerouno + numerodos;
    alert("La suma es "+resultado);
}

