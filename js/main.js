// 
let btnMostrar = document.getElementById("btnMostrar");

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
    console.log("boton btnMostrar presionado");
}); // Agrega escuchador de eventos
