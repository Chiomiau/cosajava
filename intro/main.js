let boton = document.getElementById("saludo");
let saludo = document.getElementById("texto-saludo");

function accionSaludar (b,s) {
    b.addEventListener("click", ()=>{
        s.innerHTML = "HOLA SOY UN SALUDO DESDE JS"
    });
}

//USAR RECETA Y ECHARLE LOS INGREDIENTES==================
accionSaludar(boton,saludo);