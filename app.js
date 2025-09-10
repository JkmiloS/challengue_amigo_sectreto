// Declarar una variable de tipo array para almacenar los nombres de los amigos
let amigos = [];
let amigosSorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    inputNombre.value = ""; // Limpiar el campo de entrada
    mostrarListaAmigos(); // Mostrar la lista actualizada de amigos
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Si ya se sortearon todos los amigos
    if (amigos.length === amigosSorteados.length) {
        alert("Ya se sortearon todos los amigos.");
        return;
    }

    let amigoSeleccionado;
    do {
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSeleccionado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSeleccionado)); // Asegurarse de no repetir

    // Agregar el amigo seleccionado a la lista de sorteados
    amigosSorteados.push(amigoSeleccionado);

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo seleccionado: ${amigoSeleccionado}</li>`;
}

