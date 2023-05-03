
function Computador(marca, modelo, precio, imagen){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen= imagen;
}

var assus = new Computador('Assus', 'Laptop 15', 349990, 'assus.jpg');
var lenovo = new Computador('Lenovo', 'Ideapad', 419990, 'lenovo.jpg');

document.getElementById("comprarDos").addEventListener("click", function() {
    assus.marca = "lenovo";
    assus.modelo = "Ideapad";
    assus.precio = 419990;
    assus.imagen = "assets/img/lenovo.jpg";
    document.getElementById("imagen").src =  assus.imagen;
    document.querySelector(".card-title").textContent = assus.marca + " " + assus.modelo;
    document.querySelector(".card-text").textContent = "$" + assus.precio;
  });