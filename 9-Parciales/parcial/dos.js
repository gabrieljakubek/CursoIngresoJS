function Mostrar()
{
    var imporprod = parseInt(prompt("Ingrese el importe del producto"));
    var imporfinal;
    imporfinal = imporprod * 1.21;
    document.getElementById("importeFinal").value = imporfinal;
}
