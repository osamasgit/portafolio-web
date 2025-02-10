function repartirCartas() {
    let cartas = document.querySelectorAll('.carta');

    cartas.forEach((carta, index) => {
        setTimeout(() => {
            let spacing = 200; // Espacio entre cartas
            let centerOffset = (cartas.length - 1) * spacing / 2; // Centrar las cartas
            let offsetX = index * spacing - centerOffset; // Ajustar la posición

            carta.style.opacity = "1";
            carta.style.transform = `translate(${offsetX}px, 0) rotate(0deg)`;
        }, 200 * index);
    });

    setTimeout(() => {
        cartas.forEach((carta) => {
            carta.classList.add('voltear');
        });
    }, 800);
}

// 👉 Detectamos cuando la sección es visible
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            repartirCartas();
            observer.disconnect(); // Desactiva el observador para que no se repita
        }
    });
}, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

// 👉 Aplicamos el observador a la sección de cartas
observer.observe(document.querySelector('.cartas-container'));
