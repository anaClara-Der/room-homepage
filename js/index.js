//Menú
const menuAbrir = document.querySelector(".movil-menu");
const menuCerrar = document.querySelector("#movil-menu-abierto");
const cerrar = document.querySelector(".movil-cerrar-menu");
//Imágenes
const botonIzquierda = document.querySelector(".button-left");
const botonDerecha = document.querySelector(".button-right");
let img = document.querySelectorAll(".imagenes");
let cont = 0;

//Menu
menuAbrir.addEventListener("click", function(){
    menuAbrir.style.display = "none";
    menuCerrar.style.display = "flex";
})
cerrar.addEventListener("click", function(){
    menuCerrar.style.display = "none";
    menuAbrir.style.display ="flex";
})
//imágenes
botonIzquierda.addEventListener("click", function(){
    cambioImag (1)
 })
botonDerecha.addEventListener("click", function(){
    cambioImag (2);
})

//funciones
function cambioImag (n) {
    if(n == 2){
        if(cont == 0){
            cont = 1;
        }else{
            cont = 2;
        }
    }
    if(n == 1){
        if(cont == 2){
            cont = 1;   
        }else{
            cont = 0;
        }
    }
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
        
    }
    img[cont].style.display = "flex";
}
