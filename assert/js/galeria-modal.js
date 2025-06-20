document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img-ampliada");
    const cerrar = document.querySelector(".cerrar");
    const imagenes = document.querySelectorAll(".galeria__img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
        modal.style.display = "none";
        }
    });
});
