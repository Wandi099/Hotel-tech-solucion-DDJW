function mostrarMensaje() {
  alert(
    "Bienvenido a HOTEL TECH SOLUCION DDJW, tu aliado en gestión y administración hotelera.",
  );
}

const themeToggle = document.getElementById("themeToggle");
const btnTop = document.getElementById("btnTop");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Modo claro";
  } else {
    themeToggle.textContent = "Modo oscuro";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
