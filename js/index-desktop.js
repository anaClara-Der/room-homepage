const derecha = document.querySelector(".boton-right");
const izquierda = document.querySelector(".boton-left");
let imagenes = document.querySelectorAll(".imagenes-desktop");
let contador = 0;
 
izquierda.addEventListener("click", function(){
    cambioImagenes(1);
});

derecha.addEventListener("click", function(){
    cambioImagenes(2);
});

function cambioImagenes (n) {
    if(n == 2){
        if(contador == 0){
           contador = 1;
        }else{
            contador = 2;
        }
    }
    if(n == 1){
        if(contador == 2){
            contador = 1;
        }else{
            contador = 0;
        }
    }
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].style.display = "none";
}  
imagenes[contador].style.display = "flex"
}