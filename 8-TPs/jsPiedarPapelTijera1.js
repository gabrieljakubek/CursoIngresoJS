/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionusuario;
function comenzar()
{
    eleccionMaquina = Math.random () * (4 - 1) + 1;

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
    {
        case 1:
        "Empate";
        break;
        case 2:
        "Perdió";
        break;
        case 3:
        "Ganó"
    }

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN