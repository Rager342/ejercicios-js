function validar(form){
    let precio=parseFloat(form.producto.value.trim());
    let descuento=precio*0.15
    let pagar=precio-descuento

    if(isNaN(precio) || precio<=0 || form.producto.value.trim()==""){
        alert("Ingresa un precio valido")
    }else{
        alert("El Total a pagar con el descuento del 15% es: "+pagar)
    }
    
}