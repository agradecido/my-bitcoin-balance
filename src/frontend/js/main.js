document.addEventListener('DOMContentLoaded', (event) => {
    const fechaHoy = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = fechaHoy;
});
