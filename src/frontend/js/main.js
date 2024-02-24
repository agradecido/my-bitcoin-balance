document.addEventListener('DOMContentLoaded', (event) => {
    const fechaHoy = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = fechaHoy;
});

document.addEventListener('htmx:afterOnLoad', function(event) {
    console.log('htmx:afterOnLoad: ' + event.detail.elt.id)
    if (event.detail.elt.id === 'bitcoin-price') {
        // Asumiendo que la respuesta es un JSON con la estructura { "EUR": precio }
        const data = JSON.parse(event.detail.elt.innerText);
        const price = data.EUR.price; // Ajusta esta línea según la estructura exacta de tu JSON
        event.detail.elt.innerText = `€${price}`;
    }
});