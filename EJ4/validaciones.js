function validar(form){
    let calificacion1=parseFloat(form.parcial1.value.trim());
    let calificacion2=parseFloat(form.parcial2.value.trim());
    let calificacion3=parseFloat(form.parcial3.value.trim());
    let examenF=parseFloat(form.examenf.value.trim());
    let trabajo=parseFloat(form.trabajof.value.trim());

    if(calificacion1<0 || isNaN(calificacion1) || form.calificacion1.value.trim()==""){
        alert("La calificacion 1 no es valida")
        return false;
    }else if(calificacion2<0 || isNaN(calificacion2) || form.calificacion2.value.trim()==""){
        alert("La calificacion 2 no es valida")
        return false;
    }else if(calificacion3<0 || isNaN(calificacion3) || form.calificacion3.value.trim()==""){
        alert("La calificacion 3 no es valida")
        return false;
    }else if(examenF<0 || isNaN(examenF) || form.examenf.value.trim()==""){
        alert("La calificacion del examen final no es valida")
        return false;
    }else if(trabajo<0 || isNaN(trabajo) || form.trabajof.value.trim()==""){
        alert("La calificacion del trabajo final no es valida")
        return false;
    }

    let promedio=(calificacion1+calificacion2+calificacion3)/3
    let calificacionF=(promedio*0.55)+(examenF*0.30)+(trabajo*0.15)

    alert("Tu calificacion final sera: "+calificacionF)

}

    


