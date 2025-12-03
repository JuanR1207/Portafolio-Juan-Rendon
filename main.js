//* ---- Scroll suave al hacer clic en el menú/*
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// ---- Mensaje al enviar el formulario ----
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.");

    formulario.reset();
});

// ---- Menú hamburguesa ----
const btnHamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

btnHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("activo");
    btnHamburguesa.classList.toggle("activa");
});

// ---- Animación repetible de barras de intereses ----
const skills = document.querySelectorAll(".skill");

function animarBarras() {
    skills.forEach(skill => {
        const porcentaje = skill.dataset.porcentaje;
        const posicion = skill.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight - 100;

        if (posicion < alturaPantalla && posicion > 0) {
            // Activa animación
            skill.style.width = porcentaje + "%";
        } else {
            // Reinicia animación
            skill.style.width = "0%";
        }
    });
}

window.addEventListener("scroll", animarBarras);
window.addEventListener("load", animarBarras);
