window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {
            labels: {
                placeholder: "Buscar...",
                searchTitle: "Buscar en la tabla",
                perPage: "entradas por página",
                noRows: "No se encontraron entradas",
                info: "Mostrando {start} a {end} de {rows} entradas"
            }
        });
    }
});
