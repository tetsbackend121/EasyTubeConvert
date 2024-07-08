document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    enviarDatos();
});

async function enviarDatos() {
    document.getElementById('resultado').innerHTML = `Convirtiendo...`;
    const link = document.getElementById('linkInput').value;
    const resolution = "360";
    const format = document.getElementById('formatSelect').value;

    const datos = {
        link: link,
        resolution: format === 'MP3' ? null : resolution,
        format: format
    };

    const urlgoat = "https://todosefueverdad101.onrender.com/uploadLink";

    try {
        const response = await fetch(urlgoat, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            throw new Error('Error al enviar los datos al servidor.');
        }

        const data = await response.json();
        const poatan = `${data.ip}/uploadLink`;

        const response2 = await fetch(poatan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response2.ok) {
            throw new Error('Error al enviar los datos al servidor.');
        }

        const resultado = await response2.json();
        const linkk = data.ip + "/"+ resultado.blob_url
        console.log(resultado.blob_url);
        document.getElementById('resultado').innerHTML = `<a href="${linkk}">Descargar el archivo</a>`;
    } catch (error) {
        console.log('Error:', error);
        document.getElementById('resultado').innerHTML = `No se pudo convertir intentalo de nuevo.`;
    }
}

// Inicializa el estado de resolución basado en la selección actual de formato
document.addEventListener('DOMContentLoaded', toggleResolution);

function toggleResolution() {
    const format = document.getElementById('formatSelect').value;
    const resolutionContainer = document.getElementById('resolutionContainer');

}
