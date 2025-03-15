document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    // Guardar los datos en LocalStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);

    console.log(localStorage.getItem('nombre'));
    console.log(localStorage.getItem('email'));

    // Redirigir a la página de agradecimiento
    window.location.href = "testdoshas.html";
});

