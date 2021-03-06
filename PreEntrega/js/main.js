const tareas = [];
let elemento;
let item;

let index = 0;
for(let i=localStorage.length-1; i>=0; i--){
    clave = localStorage.key(i);
    tareaCargada = JSON.parse(localStorage.getItem(clave));
    tareas.push(tareaCargada);
}
console.log("tareas",tareas);

index = localStorage.length>0 ? parseInt(clave,10) + 1 : 0;

function enterInput(e){
    if(e.key == "Enter")
        cargarTarea();
}

function cargarTarea(){
    elemento = inputTarea.value;
    if(elemento!=null && elemento.length>0){
        index = index +1;
        item = document.createElement("li");
        tareas.push(new Tarea(elemento, 0, index));
        localStorage.setItem(index, JSON.stringify(tareas[tareas.length-1]))
        item.innerHTML= elemento;
        item.setAttribute("id",index);
        ul.append(item);
        inputTarea.value = "";
    }
}

function withSweetAlert(e){
    swal({
        title: "Desea Borrar la siguiente tarea",
        text: e.target.innerText,
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then((value)=>{
        value? eliminarTarea(e): null;
      })
}

function eliminarTarea(e){
    console.log("Texto clickeado",e.target.innerText);
    console.log("id del texto clickeado",e.target.id,"       tareas.length",tareas.length);
    for(let i = 0; i<tareas.length; i++){
        console.log("for i:",i,"     tareas[i].key == e.target.id",tareas[i].key," == ",e.target.id,"\n-*-*-* tareas[i]",tareas[i]);
        if(tareas[i].key == e.target.id){
            console.log("if i:",i,"   id:",e.target.id);
            let toRemove = document.getElementById(e.target.id);
            localStorage.removeItem(e.target.id);
            tareas.splice(i, 1);
            toRemove.remove();
            break;
        }
    }
}