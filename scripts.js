// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    params.phone = urlParams.get('phone');
    params.price = urlParams.get('price');
    return params;
}

// Mostrar los datos del teléfono seleccionado
document.addEventListener('DOMContentLoaded', function () {
    const params = getQueryParams();
    const phoneImage = document.getElementById('phone-image');
    const phoneDetailsDiv = document.getElementById('phone-details');
    
    phoneImage.src = `https://raw.githubusercontent.com/imperiocell2023/Imperiocell_mx/main/${params.phone}.jpg`; // Imagen basada en nombre del teléfono
    
    phoneDetailsDiv.innerHTML = `
        <h2 style="font-size: 1.5em; color: #007bff;">${params.phone}</h2>
        <p style="font-size: 1em; margin: 7px 0; color: #28a745;"><strong>Precio: ${params.price}</strong></p>
    `;
});
