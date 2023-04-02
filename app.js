// elemento por id

const btnAgregar = document.getElementById("btnAgregar");
const nuevaTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");


// evento de click + funcion
btnAgregar.addEventListener("click", function() {

  //ver si el string esta vacio
  if (nuevaTarea.value == "") {
      alert('Ingrese una tarea por favor')
    }
    else {
    const tarea = nuevaTarea.value; // Asigno el valor en el campo "nuevaTarea" a tarea
    const agregarTarea = document.createElement("li"); //Creo nuevo elemento "li" con la nueva tarea
    agregarTarea.innerText = tarea; //asigno el valor
    
    // Boton eliminar
    const bntEliminar = document.createElement("button");
    bntEliminar.id = "btnEliminar" // le asigno id
    bntEliminar.innerText = "Eliminar";

    //funcion eliminar
    bntEliminar.addEventListener("click", function() {
      listaTareas.removeChild(agregarTarea);
    });

    agregarTarea.appendChild(bntEliminar);
    
    // Boton completar
    const btnCompletar = document.createElement("button");
    btnCompletar.id = "btnCompletar" // le asigno id
    btnCompletar.innerText = "Completado";

    //funcion completar
    btnCompletar.addEventListener("click", function() {
      agregarTarea.classList.toggle("completado"); // asigno la clase a completado
    });

    agregarTarea.appendChild(btnCompletar); //agregar boton completar a la lista
    
    listaTareas.appendChild(agregarTarea); //agregar tarea a la lista

    nuevaTarea.value = "";//reseteo el valor

  }

});