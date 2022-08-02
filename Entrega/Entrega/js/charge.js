let clave;
let tareaCargada;
let porHacerList = document.getElementById("porHacerList");
const datosCurso = document.getElementById("datosCurso");

fetch("./datos/data.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0].proyecto);
        item = document.createElement("p");
        item.innerHTML= "Proyecto "+data[0].proyecto;
        datosCurso.append(item);
        item = document.createElement("p");
        item.innerHTML= "Lenguajes utilizados:";
        datosCurso.append(item);
        let ull = document.createElement("ul");
        item = document.createElement("li");
        item.innerHTML= data[1].lenguaje;
        ull.append(item);
        item = document.createElement("li");
        item.innerHTML= data[2].lenguaje;
        ull.append(item);
        item = document.createElement("li");
        item.innerHTML= data[3].lenguaje;
        ull.append(item);
        datosCurso.append(ull);
    })

for(let i=localStorage.length-1; i>=0; i--){
    clave = localStorage.key(i);
    tareaCargada = JSON.parse(localStorage.getItem(clave));
    nuevaTareaPorHacer(tareaCargada, clave);
}

function nuevaTareaPorHacer(tarea, clave){
    item = document.createElement("li");
    item.setAttribute("id",clave);
    item.innerHTML= tarea.nombre;
    porHacerList.append(item);
}