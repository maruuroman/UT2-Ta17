document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("incrementar");
    const texto = document.getElementById("texto");
  
    boton.addEventListener("click", function() {
        let numeroActual = parseInt(texto.textContent);
        numeroActual += 1;
        texto.textContent = numeroActual;
    });
  });
  