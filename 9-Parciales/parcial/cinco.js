function Mostrar()
{
    var dia = prompt("Ingrese un día dela semana");
    var diamin = dia.toLowerCase()
    switch(diamin)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("A trabajar!!!");
        break;
        case "sabado":
        case "domingo":
        alert("Es fin de semana");
        break;
    }
}
