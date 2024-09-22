function validarFormulario(form) {
    let esValido = true;

    
    if (!form.nombre.value.trim()) {
        alert("El nombre es obligatorio.");
        esValido = false;
    }

    
    if (!validarEmail(form.email.value.trim())) {
        alert("Por favor, introduce un email válido.");
        esValido = false;
    }

    
    if (form.comentarios.value.length > 50) {
        alert("Los comentarios no deben exceder los 50 caracteres.");
        esValido = false;
    }

    
    if (!validarPassword(form.password.value.trim())) {
        alert("La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula, una letra minúscula y un dígito.");
        esValido = false;
    }

    return esValido;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
}


document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('blur', function() {
        
        if (element.name === "nombre" && !element.value.trim()) {
            alert("El nombre es obligatorio.");
        }
        
        if (element.name === "email" && !validarEmail(element.value.trim())) {
            alert("Por favor, introduce un email válido.");
        }
        
        if (element.name === "comentarios" && element.value.length > 50) {
            alert("Los comentarios no deben exceder los 50 caracteres.");
        }
        
        if (element.name === "password") {
            if (!validarPassword(element.value.trim())) {
                alert("La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula, una letra minúscula y un dígito.");
            } else {
                
                
            }
        }
    });
});
