// 
let btnMostrar = document.getElementById("btnMostrar");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

// document Es el punto de inicio para acceder a los elementos del HTML
// document hace referencia a la pagina en la que esta corriendo/ejecutando el script

// document.getElementById()
let encabezado1 = document.getElementById("encabezado1"); // Estamos accediendo a la etiqueta h1 con el id "encabezado1"
// Si el encabezado esta mal, lo marca como null y null no tiene propiedades, por lo que no puede ser modificado.
// EL PROBLEMA DE ESTE ERROR ES LA REFERENCIA Y NO SE ENCUENTRA EN LA LÍNEA QUE MARCA LA CONSOLA.  

let encabezado2 = document.getElementById("encabezado2");

// encabezado1.innerText = "Ejercicio DOM"; // El innerText es una propiedad de la etiqueta del texto que esta almacenando, propiedad de escritura (edición) y lectura
// encabezado1.innerHTML = "<em>Ejercicio</em> DOM"; // 
// console.log(encabezado1.innerText); 
// console.log(encabezado1.innerHTML);

let contador = 0;
function modifica(){
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;
}

// let encabezado2 = document.getElementById("encabezado2");
// encabezado2.innerText = "DOM Exercise";
//console.log(encabezado2.innerText);


// document.getElementsByTagName() Trae todas las etiquetas
let listas = document.getElementsByTagName("ul"); // Regresa una colección de HTML que esta viva, que esta modificandose 
console.log(listas.length);
// console.log(listas[0]);
console.log(listas.item(1));

// document.getElementsByClassName()
let elementos = document.getElementsByClassName("list-group-item"); // Va por todos los que esten en la CLASE, no importa donde esten
console.log(elementos.length);
console.log(elementos.item(2));

// document.querySelector()
let otroElemento = document.querySelector("ul>li"); // Trae la PRIMERA coincidencia que coincide con el selector
console.log("Otro elemento", otroElemento); 

// document.querySelectorAll()
let otrosElementos = document.querySelectorAll("ul>li"); // Trae la TODAS las coincidencias
console.log(otrosElementos.length); 
// console.log("Otros elementos", otrosElementos); 

// Contador de eventos
btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); // No hagas lo que haces por defecto
    // console.log("boton btnMostrar presionado");

    // Crear elementos en document (contenido y clase)
    let element = document.createElement("li"); // Crea un elemento vacio en el arbol del document
    element.innerText = "Another item"; // Crea un <li>Anothe item</li>
    element.classList.add("list-group-item"); // Agrega la clase y "el formato" que viene con esta <li>
    
    // Posición del elemento creado al agregarlo
    // Se respeta la instrucción del ulitmo comando si se aplica A UN MISMO ELEMENTO
    // .before Inserta el elemento antes de la lista
    listas.item(0).before(element); // Al estar antes de la lista, no se le aplica el "formato" de la clase <ul>
    // .prepend Inserta el elemento al principio de la lista
    // listas.item(0).prepend(element); // Al crearse dentro de la clase <li> si se le aplica "el formato" de la clase

    let element2 = element.cloneNode(true); // .cloneNode realiza la copia del nodo, como el comando git clone 
    // .append Inserta el elemento al final de la lista
    // listas.item(0).append(element2); // Al crearse dentro de la clase <li> si se le aplica "el formato" de la clase
    // .after Inserta el elemento despues de la lista
    listas.item(0).after(element2); // Al despues de la lista, no se le aplica el "formato" de la clase <ul>

    // .insertAdjacentElement - Agrega un elemento previamente creado ("posicion", elemento a agregar)
    // .prepend Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("afterbegin", element); 
    // .append Inserta el elemento al final de la lista
    // listas.item(1).insertAdjacentElement("beforeend", element2);

    // .insertAdjacentHTML - Agrega un elemento creandolo en `HTML`
    listas.item(1).insertAdjacentHTML("beforebegin", 
        `<li class="list-group-item">Before Begin item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterbegin", 
        `<li class="list-group-item">After Begin item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterend", 
        `<li class="list-group-item">After End item</li>`);
    
    listas.item(1).insertAdjacentHTML("beforeend", 
        `<li class="list-group-item">Before End item</li>`);
}); // Agrega escuchador de eventos

// load - Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina");
});

function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}

txtRFC.addEventListener("blur", txtToUpper); // Reduce el número de línas al crear una función general
txtCURP.addEventListener("blur", txtToUpper); // Son los mismos eventos que el codigo comentado

// blur - Cuando se sale del campo, cuando se cambia del campo donde estoy escribiendo 
// txtRFC.addEventListener("blur", function(event){
//     event.preventDefault(); // No hagas lo que haces por defecto
//     // txtRFC.value = txtRFC.value.toUpperCase(); // Cambia el texto a mayusculas 
// });

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault(); // No hagas lo que haces por defecto
//     txtCURP.value = txtCURP.value.toUpperCase(); // Cambia el texto a mayusculas 
// });

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.replace(/\s+/g, '').slice(0,10); // Ayuda a limitar la cantidad de caracteres que deben ser ingresados
    // .trim() - Elimina los espacio en blanco al principio y al final, no afecta los espacios blancos intermedios
    // .replace(/\s+/g, '') - Elimina todos los espacios en blanco sin importar su posición

})