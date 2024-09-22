function validar(form){
    let horas = form.horas.value.trim()

    let sueldo = form.sueldo.value.trim()

    let horasregulares=40

    let horasextramax=8

    let horasextras=0

    let pagototal=0

    if(horas > horasregulares){
        horasextras=horas-horasregulares

        if(horasextras <= horasextramax){
            pagototal=horasextras*(sueldo*2)
        }else{
            let horasExtrasPagadasDoble=horasextramax
            let  horasExtrasPagadasTriple=horasextras-horasextramax

            pagototal=(sueldo+(horasExtrasPagadasDoble*(sueldo*2)+ (horasExtrasPagadasTriple*(sueldo*3)))+"$")
        }

        alert("Tu sueldo va a ser: "+pagototal)

    }
    

    

}