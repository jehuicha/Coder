class Tarea{
    constructor(name,state, id){
        this.nombre = name;
        this.estado = state;
        this.key = id;
    }
    setEstado(newEstado){
        this.estado = newEstado;
    }
}