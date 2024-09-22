function validar(form){
    let cantidad=parseFloat(form.dni.value.trim());
    let operacion=cantidad*0.02
    let total=cantidad+operacion
    
    if(cantidad<0 || isNaN(cantidad)){
        alert("Ingresa una cantidad valida")
        return false;
    }else{
       
        alert("Usted invirtio: "+cantidad+"$"+" y su ganancia es de: "+operacion
            +"$"+" dando un total de: "+total+"$"
         )
    }
    
    return true;
    
    
    }

    