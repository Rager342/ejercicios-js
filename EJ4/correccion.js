function validar(form) {
    let calificacion1 = parseFloat(form.parcial1.value.trim());
    let calificacion2 = parseFloat(form.parcial2.value.trim());
    let calificacion3 = parseFloat(form.parcial3.value.trim());
    let examenF = parseFloat(form.examenf.value.trim());
    let trabajo = parseFloat(form.trabajof.value.trim());

    
    if (isNaN(calificacion1) || calificacion1 < 0) {
        alert("La calificación 1 no es válida");
        return false;
    } else if (isNaN(calificacion2) || calificacion2 < 0) {
        alert("La calificación 2 no es válida");
        return false;
    } else if (isNaN(calificacion3) || calificacion3 < 0) {
        alert("La calificación 3 no es válida");
        return false;
    } else if (isNaN(examenF) || examenF < 0) {
        alert("La calificación del examen final no es válida");
        return false;
    } else if (isNaN(trabajo) || trabajo < 0) {
        alert("La calificación del trabajo final no es válida");
        return false;
    }


    let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
    let calificacionF = (promedio * 0.55) + (examenF * 0.30) + (trabajo * 0.15);

    
    alert("Tu calificación final es: " + calificacionF.toFixed(2));
    return true; 
}
