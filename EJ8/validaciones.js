function validar(form) {
    let sueldo = parseFloat(form.sueldo.value.trim());
    let antiguedad = parseFloat(form.años.value.trim());
    let utilidad = 0;

    // Validación de entradas
    if (isNaN(sueldo) || isNaN(antiguedad) || sueldo <= 0 || antiguedad < 0) {
        alert("Ingresa datos válidos");
        return false;
    }

    
    if (antiguedad < 1) {
        utilidad = sueldo * 0.05; 
    } else if (antiguedad < 2) {
        utilidad = sueldo * 0.07; 
    } else if (antiguedad < 5) {
        utilidad = sueldo * 0.10; 
    } else if (antiguedad < 10) {
        utilidad = sueldo * 0.15; 
    } else {
        utilidad = sueldo * 0.20; 
    }

    // 
    alert("Tu sueldo será: $" + (sueldo + utilidad));
    return true;
}
