function Mostrar()
{
    var preg = 0;
    for(i=0;;i++)
    {
        if (preg!=9)
        {
            alert(i);
            preg=prompt("Ingrese 9 para finalizar");
        }
        else
        {
            break;
        }
    }
}//FIN DE LA FUNCIÓN