let clave;
let tareaCargada;
let ul = document.getElementById("porHacerList");
let inputBoton = document.getElementById("botonInput");
let inputTarea = document.getElementById("inputTarea");

inputBoton.addEventListener("click",cargarTarea);
inputTarea.addEventListener("keypress",enterInput);
ul.addEventListener("click", withSweetAlert);
for(let i=localStorage.length-1; i>=0; i--){
    clave = localStorage.key(i);
    tareaCargada = JSON.parse(localStorage.getItem(clave));
    item = document.createElement("li");
    item.setAttribute("id",clave);
    item.innerHTML= tareaCargada.nombre;
    ul.append(item);
}