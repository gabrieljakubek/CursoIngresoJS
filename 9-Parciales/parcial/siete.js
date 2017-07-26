function Mostrar()
{
    var nota;
    var sexo;
    var inicio=true;
    var notabaja;
    var contalumnos=0;
    var notaacum=0;
    var notapromedio;
    var contvarones=0;
    while(inicio==true)
    {
        nota=parseInt(prompt("Ingrese la nota del alumno"));
        while (isNaN(nota)|| nota<0 && nota>10)
        {
            nota=parseInt(prompt("Ingrese la nota del alumno"));
        }
        sexo = prompt("Ingrese el sexo de el alumno");
        if(sexo == "m"&&nota>=6)
        {
            contvarones++
        }
        notabaja=nota;
        contalumnos++;
        notaacum = notaacum+nota
        inicio=false
    }
    while(contalumnos<100)
    {
        nota=parseInt(prompt("Ingrese la nota del alumno"));
        while (isNaN(nota)|| nota<0 && nota>10)
        {
            nota=parseInt(prompt("Ingrese la nota del alumno"));
        }
        sexo = prompt("Ingrese el sexo de el alumno");
        while (sexo!=m||sexo!=f)
        {
            sexo = prompt("Ingrese el sexo de el alumno");
        }
        if(sexo == "m"&&nota>=6)
        {
            contvarones++
        }
        if (notabaja>nota)
        {
            notabaja=nota;
        }
        contalumnos++;
        notaacum = notaacum+nota
    }
    notapromedio=notaacum/contalumnos;
    alert("El promedio es de: "+notapromedio);
    alert("La nota mas baja es de: "+notabaja);
    alert("La cantidad de varones que su nota ha sido mayor o igual a 6 es de: "+contvarones);
}
