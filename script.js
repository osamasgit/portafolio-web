function repartirCartas() {
    let cartas = document.querySelectorAll('.carta');
    let container = document.querySelector('.cartas-container');
    
    if (!cartas.length || !container) {
        console.error("No se encontraron cartas o el contenedor.");
        return;
    }

    let containerWidth = container.offsetWidth;
    let spacing = 200; // Espacio entre cartas
    let centerOffset = (cartas.length - 1) * spacing / 2; // Para centrar las cartas

    cartas.forEach((carta, index) => {
        setTimeout(() => {
            let offsetX = index * spacing - centerOffset; // Ajustar la posición

            carta.style.opacity = "1";
            carta.style.transform = `translate(${offsetX}px, 0) rotate(0deg)`;
        }, 200 * index);
    });

    setTimeout(() => {
        cartas.forEach((carta) => {
            carta.classList.add('voltear');
        });
    }, cartas.length * 200 + 500); // Asegurar que todas se repartan antes de voltear
}

window.onload = repartirCartas; // Llamar a la función cuando cargue la página
