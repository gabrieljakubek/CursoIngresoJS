function Mostrar()
{
    var num = prompt("Ingrese un número");
    var contprimo=0
   /* for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            contprimo++;
        }
    }
    if (contprimo==2)
    {
        alert("Es un número primo");
    }
    else
    {
        alert("No es un número primo");
    }*/
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            alert("El número no es primo");
            break;
        }
        else
        {
            alert("El número es primo");
        }
    }
}//FIN DE LA FUNCIÓN