function Mostrar()
{
    var cont = prompt("Ingrese la cantidad de numeros a contar");
    var contdivisores=0
    for(i=1;i<=cont;i++)
    {
        if (cont%i==0)
        {
            alert("Es divisible por: "+i);
            contdivisores++;
        }
    }
    alert("La cantidad de divisores es de: "+contdivisores);
}//FIN DE LA FUNCIÓN