function Mostrar()
{
    var importedia;
    var contdia=1;
    var importemay=0;
    var importemen=0;
    var inicio=true;
    while(inicio==true)
    {
        importedia =parseInt(prompt("Ingrese el importe de el día"+contdia));
        while(importedia<0)
		{
		    importedia =parseInt(prompt("Ingrese el importe de el día"+contdia));
		}
        importemay=importedia;
        importemen=importedia;
        contdia++;
        inicio=false;
    }    
    while(contdia<25)
    {
        importedia =parseInt(prompt("Ingrese el importe de el día"+contdia));
        while(importedia<0)
		{
		    importedia =parseInt(prompt("Ingrese el importe de el día"+contdia));
		}
        if (importemay<importedia)
        {
            importemay=importedia;
        }
        if (importemen>importedia)
        {
            importemen=importedia;
        }
        contdia++
    }
    document.write("El mayor importe fue de: $"+importemay+"</br></br>");
    document.write("El menor importe fue de: $"+importemen+"</br></br>");
}
