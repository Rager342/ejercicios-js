function validar(form){
    let año1 = form.año1.value.trim()

    let año2= form.año2.value.trim()

    if(isNaN(año1) || año1<1924){
        alert("Tu año de nacimiento no es valido")
        return false;
    }else if(isNaN(año2) || año2<1924){
        alert("El año actual no es valido")
        return false;
    }

    let edad=año2-año1
    alert("Tu edad es: "+edad)
}