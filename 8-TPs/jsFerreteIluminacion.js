/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cantlamp;
var marcas;
var preciolamp=35;
var ingresosbrutos=0;
var preciocondesc;
var importefinal;
function CalcularPrecio () 
{
 	cantlamp=document.getElementById("Cantidad").value;
    marcas=document.getElementById("Marca").value;
    if(cantlamp>=6)
    {
        preciocondesc=preciolamp*0.50;
    }
    else if(cantlamp==5&&marcas=="ArgentinaLuz")
    {
        preciocondesc=preciolamp*0.60;
    }
    else if(cantlamp==5)
    {
        preciocondesc=preciolamp*0.70;
    }
    else if(cantlamp==4 && ( marcas=="ArgentinaLuz" || marcas=="FelipeLamparas"))
    {
        preciocondesc=preciolamp*0.75;
    }
    else if(cantlamp==4)
    {
        preciocondesc=preciolamp*0.80;
    }
    else if(cantlamp==3&&marcas=="ArgentinaLuz")
    {
        preciocondesc=preciolamp*0.85;
    }
    else if (cantlamp==3&&marcas=="FelipeLamparas")
    {
        preciocondesc=preciolamp*0.90;
    }
    else if(cantlamp==3)
    {
        preciocondesc=preciolamp*0.95;
    }
    else
    {
        preciocondesc=preciolamp;
    }
    importefinal=preciocondesc*cantlamp
    if (importefinal>120)
    {
        ingresosbrutos=importefinal*0.10;
        importefinal=preciocondesc*cantlamp+ingresosbrutos;
        alert("Usted pago $"+ingresosbrutos+" de IIBB");
    }
    document.getElementById("precioDescuento").value=importefinal
}
