function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');
    
    // Mostrar la sección seleccionada
    document.getElementById(seccionId).style.display = 'block';
}

// Función para la vista previa de imagen en la galería
function previewImage() {
    const file = document.getElementById('imageUpload').files[0];
    const preview = document.getElementById('imagePreview');
    const reader = new FileReader();

    reader.onload = function(e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Vista previa de la imagen">`;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
