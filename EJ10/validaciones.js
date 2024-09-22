document.getElementById('sanitizeButton').addEventListener('click', function() {
    const htmlString = document.getElementById('inputHtml').value;

    const sanitizedString = htmlString.replace(/<script.*?>.*?<\/script>/gs, '');
    
    document.getElementById('outputHtml').innerHTML = sanitizedString || 'No se encontraron etiquetas <script>.';
});
