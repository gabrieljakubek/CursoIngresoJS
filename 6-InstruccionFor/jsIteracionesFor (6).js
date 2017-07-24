function Mostrar()
{
    var cont = prompt("Ingrese la cantidad de numeros a contar");
    var contpar=0
    for(i=1;i<=cont;i++)
    {
        if (i%2==0)
        {
            alert("Es divisible por: "+i);
            contpar++;
        }
    }
    alert("La cantidad de divisores es de: "+contpar);
}//FIN DE LA FUNCIÓN