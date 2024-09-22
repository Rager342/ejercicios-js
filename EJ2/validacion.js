function validar(form){
let cantidad=parseFloat(form.sueldo.value.trim());
let ventas=3
let comision=cantidad*0.10
let comisiones=comision*ventas
let total=cantidad+comisiones

if(cantidad<0 || isNaN(cantidad)|| sueldo===" "){
    alert("Ingresa una cantidad valida")
    return false;
}else{
    alert("Tu sueldo es: "+cantidad+"$, tu cantidad de ventas fue: "+ventas
        +", tu comision es: "+comision+"$"+", tu total de comisiones es: "+comisiones+"$"+
        ", tu sueldo total va a ser de: "+total+"$"
    )
}

return true;


}