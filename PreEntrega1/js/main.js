class Tarea{
    constructor(nombre){
        this.nombre = nombre;
        this.estado = 0;
    }
    setEstado(newEstado){
        this.estado = newEstado;
    }
    upEstado(){
        this.estado = this.estado++;
    }
    downEstado(){
        this.estado = this.estado--;
    }
}

const tareas = [];
let elemento;
do{
    elemento = prompt("ingrese una tarea");
    if(elemento!=null){
        tareas.push(new Tarea(elemento));
        alert("se ha registrado una nueva tarea, tiene "+tareas.length+" tareas por hacer.");
    }
}while(elemento!=null);
