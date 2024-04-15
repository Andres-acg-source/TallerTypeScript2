import { series } from './data';

function mostrarSeries() {
    const contenedor = document.createElement('div');
    contenedor.classList.add('row');

    // Mostrar la lista de series
    series.forEach(serie => {
        const columna = document.createElement('div');
        columna.classList.add('col-md-6', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100', 'cursor-pointer');
        card.setAttribute('data-id', serie.id.toString());

        const imagen = document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src = serie.imageUrl;
        imagen.alt = serie.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = serie.name;

        const descripcion = document.createElement('p');
        descripcion.classList.add('card-text');
        descripcion.textContent = serie.description;

        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);

        card.appendChild(imagen);
        card.appendChild(cardBody);

        columna.appendChild(card);
        contenedor.appendChild(columna);
    });

    // Agregar la lista de series al documento
    document.getElementById('series-list')!.innerHTML = '';
    document.getElementById('series-list')!.appendChild(contenedor);
}

function mostrarDetalle(serieId: number) {
    const serieSeleccionada = series.find(serie => serie.id === serieId);

    if (serieSeleccionada) {
        const detalle = document.createElement('div');
        detalle.classList.add('card', 'w-100');

        const imagen = document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src = serieSeleccionada.imageUrl;
        imagen.alt = serieSeleccionada.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = serieSeleccionada.name;

        const descripcion = document.createElement('p');
        descripcion.classList.add('card-text');
        descripcion.textContent = serieSeleccionada.description;

        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);

        detalle.appendChild(imagen);
        detalle.appendChild(cardBody);

        document.getElementById('serie-detalle')!.innerHTML = '';
        document.getElementById('serie-detalle')!.appendChild(detalle);
    }
}

// Mostrar las series al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeries();
});

// Agregar el evento clic para mostrar el detalle de la serie
document.getElementById('series-list')!.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const serieId = parseInt(target.closest('.card')!.getAttribute('data-id')!);

    mostrarDetalle(serieId);
});
