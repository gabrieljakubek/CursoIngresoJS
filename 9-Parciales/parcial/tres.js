function Mostrar()
{
    var Largo = document.getElementById("alrgo").value;
    var Ancho = document.getElementById("ancho").value;
    var alambre;
    Largo = parseInt(Largo);
    Ancho = parseInt(Ancho);
    alambre = (2*Largo+2*Ancho)*3;
    alert("La cantidad de alambre necesarios es de: "+alambre+" m.");
}
