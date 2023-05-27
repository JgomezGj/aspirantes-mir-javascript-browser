function agregarTarea() {
    const nuevaTarea = document.getElementById("nueva-tarea");
    const lista = document.getElementById("lista");

    if (nuevaTarea.value !== "") {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.style.textDecoration = this.checked ? "line-through" : "none";
        });
        const textNode = document.createTextNode(nuevaTarea.value);
        
        li.appendChild(checkbox);
        li.appendChild(textNode);
        lista.appendChild(li);
        nuevaTarea.value = "";
}
}
function deleteAllDone() {
    const lista = document.getElementById("lista");
    const tarea = lista.getElementsByTagName("li");
    for (const i = tarea.length - 1; i >= 0; i--) {
        const checkbox = tarea[i].getElementsByTagName("input")[0];
        if (checkbox.checked) {
            tarea[i].remove();
        }
    }
}