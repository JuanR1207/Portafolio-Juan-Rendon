/* -----------------------------------------
   Scroll suave y cierre del menú al hacer clic
--------------------------------------------*/
const links = document.querySelectorAll(".menu a");
const menu = document.querySelector(".menu");
const btnHamburguesa = document.querySelector(".hamburguesa");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        // Scroll suave
        target.scrollIntoView({ behavior: "smooth" });

        // Cerrar menú hamburguesa después del scroll
        setTimeout(() => {
            menu.classList.remove("activo");
            btnHamburguesa.classList.remove("activa");
        }, 400); // tiempo perfecto para que no corte el scroll
    });
});


/* -----------------------------------------
   Mensaje al enviar formulario
--------------------------------------------*/
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function () {
    alert("¡Tu mensaje ha sido enviado!");
});


/* -----------------------------------------
   Menú hamburguesa
--------------------------------------------*/
btnHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("activo");
    btnHamburguesa.classList.toggle("activa");
});


/* -----------------------------------------
   Animación repetible de barras de intereses
--------------------------------------------*/
const skills = document.querySelectorAll(".skill");

function animarBarras() {
    skills.forEach(skill => {
        const porcentaje = skill.dataset.porcentaje;
        const posicion = skill.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight - 100;

        if (posicion < alturaPantalla && posicion > 0) {
            skill.style.width = porcentaje + "%"; // animación
        } else {
            skill.style.width = "0%"; // reinicio
        }
    });
}

window.addEventListener("scroll", animarBarras);
window.addEventListener("load", animarBarras);
