/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	var num;
    var contpar=0;
    var contimpar=0;
    var contdivisibles=0;
}
function NumerosPares() 
{
    num = document.getElementById("numero").value;
    if(num<1)
    {
        alert("Ingrese un número positivo");
    }
    else
    {
        for(i=1;i<num;i++)
        {
            if(i%2==0)
            {
                contpar++;
            }
        }
    }
    alert("La cantidad de úmeros pares es de: "+contpar);
}
function NumerosImpares() 
{
    num = document.getElementById("numero").value;
    if(num<1)
    {
        alert("Ingrese un número positivo");
    }
    else
    {
        for(i=1;i<num;i++)
        {
            if(i%2!=0)
            {
                contimpar++;
            }
        }
    }
    alert("La cantidad de úmeros pares es de: "+contimpar);
}
function NumerosDivisibles() 
{
    num = document.getElementById("numero").value;
    if(num<1)
    {
        alert("Ingrese un número positivo");
    }
    else
    {
        for(i=100;i<=100;i++)
        {
            if(num%i==0)
            {
                contdivisibles++;
            }
        }
    }
    alert("La cantidad de úmeros pares es de: "+contdivisibles);
}
function VerificarPrimo() 
{
    num = document.getElementById("numero").value;
    if(num<1)
    {
        alert("Ingrese un número positivo");
    }
    else
    {
        for(i=2;i<num;i++)
        {
            if(num%i==0&&num!=2)
            {
                alert("El número no es primo");
                break;
            }
            else
            {
                alert("El número es primo");
            }
        }
    }
}
function NumerosPrimos() 
{
    num = document.getElementById("numero").value;
    if(num<1)
    {
        alert("Ingrese un número positivo");
    }
    else
    {
    }
}
