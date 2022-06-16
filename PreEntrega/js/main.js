class Tarea{
    constructor(nombre){
        this.nombre = nombre;
        this.estado = 0;
    }
    setEstado(newEstado){
        this.estado = newEstado;
    }
}

const tareas = [];
const paraMostrar = [];
let elemento;
do{
    elemento = prompt("ingrese una tarea");
    if(elemento!=null){
        tareas.push(new Tarea(elemento));
        alert("se ha registrado una nueva tarea, tiene "+tareas.length+" tareas por hacer.");
    }
}while(elemento!=null);

alert("las tareas Ingresada fueron: "+tareas.length)
for(let i=0; i<tareas.length; i++){
    alert((i+1)+" "+tareas[i].nombre+"\n");
}
