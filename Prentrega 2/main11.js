// Preguntar nombre al usuario
const nombreCliente = prompt("Ingrese su nombre:");

// Array de categorías con sus respectivos productos
const categorias = [
    {
        nombre: "Remeras",
        productos: [
        {
            nombre: "Cigüeña",
            color: "Negro",
            talles: ["S", "M", "L", "XL"],
            precio: 12000,
            tela: "Algodón",
            impresion: "Serigrafia",
            id: "RemCigu01"
        },
        {
            nombre: "MarsAttack",
            color: "Mostaza",
            talles: ["S", "M", "L", "XL"],
            precio: 11000,
            tela: "Algodón",
            impresion: "Serigrafia",
            id: "RemMars01"
        },
        {
            nombre: "Dragon",
            color: "Blanca",
            talles: ["S", "M", "L", "XL"],
            precio: 15000,
            tela: "Algodón",
            impresion: "DTF",
            id: "RemDrag01"
        },
        ]
    },
    {
        nombre: "Buzos",
        productos: [
        {
            nombre: "Cigüeña",
            color: "Rojo",
            talles: ["S", "M", "L", "XL"],
            precio: 20000,
            tela: "Algodón",
            impresion: "Serigrafia",
            id: "BuzCigu01"
        },
        {
            nombre: "Japon",
            color: "Negro",
            talles: ["S", "M", "L", "XL"],
            precio: 30000,
            tela: "Algodón",
            impresion: "Bordado",
            id: "BuzJap01"
        },
        {
            nombre: "ZPL",
            color: "Vatik",
            talles: ["S", "M", "L", "XL"],
            precio: 20000,
            tela: "Algodón",
            impresion: "Bordado",
            id: "BuzZpl01"
        },
        ]
    },
    {
        nombre: "Short de Baño",
        productos: [
        {
            nombre: "Marea",
            color: "Negro/Rojo",
            talles: ["S", "M", "L", "XL"],
            precio: 15000,
            tela: "Lycra",
            impresion: "Sublimación",
            id: "ShoMar01"
        },
        {
            nombre: "Retro",
            color: "Gris",
            talles: ["S", "M", "L", "XL"],
            precio: 18000,
            tela: "Lycra",
            impresion: "Sublimación",
            id: "ShoRet01"
        },
        {
            nombre: "Tattoo",
            color: "Azul",
            talles: ["S", "M", "L", "XL"],
            precio: 15000,
            tela: "Lycra",
            impresion: "Sublimación",
            id: "ShoTatt01"
        },
        ]
    },
    {
        nombre: "Gorras",
        productos: [
        {
            nombre: "Japon",
            color: "Negra",
            talleUnico: true,
            precio: 20000,
            modelo: "Trucker",
            impresion: "DTF",
            id: "CapJap01"
        },
        {
            nombre: "ZPL",
            color: "Negra",
            talleUnico: true,
            precio: 22000,
            modelo: "Visera plana",
            impresion: "Aplique Cuero",
            id: "CapZpl01"
        },
        {
            nombre: "To All",
            color: "Verde",
            talleUnico: true,
            precio: 20000,
            modelo: "Trucker",
            impresion: "Bordado",
            id: "CapAll01"
        },
        ]
    }
];
// Función para preguntar al usuario qué producto desea comprar
function elegirProducto() {
    let mensaje = "Seleccione una categoría:\n";
    categorias.forEach((categoria, index) => {
    mensaje += `${index + 1} - ${categoria.nombre}\n`;
    });

    let eleccionCategoria = prompt(mensaje);
    eleccionCategoria = parseInt(eleccionCategoria);

    if (!isNaN(eleccionCategoria) && eleccionCategoria >= 1 && eleccionCategoria <= categorias.length) {
      // El usuario seleccionó una categoría válida
        const categoriaSeleccionada = categorias[eleccionCategoria - 1];
        mostrarProductos(categoriaSeleccionada);
    } else {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        elegirProducto();
    }
}

  // Función para mostrar los productos de una categoría
function mostrarProductos(categoria) {
    let mensaje = `Seleccione un producto de la categoría "${categoria.nombre}":\n`;
    categoria.productos.forEach((producto, index) => {
    mensaje += `${index + 1} - ${producto.nombre}\n`;
    });

    let eleccionProducto = prompt(mensaje);
    eleccionProducto = parseInt(eleccionProducto);

    if (!isNaN(eleccionProducto) && eleccionProducto >= 1 && eleccionProducto <= categoria.productos.length) {
      // El usuario seleccionó un producto válido
    const productoSeleccionado = categoria.productos[eleccionProducto - 1];
    elegirTalle(productoSeleccionado);
    } else {
    alert("Selección no válida. Por favor, ingrese un número válido.");
    mostrarProductos(categoria);
    }
}

  // Función para elegir el talle del producto
function elegirTalle(producto) {
    let mensaje = "Seleccione un talle:\n";
    if (producto.talleUnico) {
    mensaje += "1 - Único\n";
    } else {
    producto.talles.forEach((talle, index) => {
        mensaje += `${index + 1} - ${talle}\n`;
    });
    }

    let eleccionTalle = prompt(mensaje);
    eleccionTalle = parseInt(eleccionTalle);

    if (!isNaN(eleccionTalle) && eleccionTalle >= 1 && eleccionTalle <= (producto.talleUnico ? 1 : producto.talles.length + 1)) {
      // El usuario seleccionó un talle válido
    if (producto.talleUnico || eleccionTalle <= producto.talles.length) {
        const talleSeleccionado = producto.talleUnico ? "Único" : producto.talles[eleccionTalle - 1];
        alert(`Ha elegido el producto "${producto.nombre}" en talle ${talleSeleccionado}.`);
    }
    } else {
    alert("Selección no válida. Por favor, ingrese un número válido.");
    elegirTalle(producto);
    }
}

// Función para manejar el flujo principal del programa
function manejarCompra() {
    let productosElegidos = [];

    do {
        elegirProducto();
        let respuesta = prompt("¿Quiere algo más? (SI/NO)").toLowerCase();

        if (respuesta !== "si" && respuesta !== "sí") {
            // El cliente ha terminado de agregar productos
            break;
        }
    } while (true);

    // Confirmar productos elegidos
    let confirmacion = prompt("Estos son los productos elegidos:\n\n" + productosElegidos.join("\n") + "\n\n¿Está todo OK? (SI/NO)").toLowerCase();

    if (confirmacion === "si" || confirmacion === "sí") {
        alert("¡Gracias por su compra! Vuelva pronto.");
    } else if (confirmacion === "no") {
        // El cliente quiere eliminar algo
        let productoEliminar = prompt("Ingrese el nombre del producto que desea eliminar:");

        // Verificar si el producto a eliminar está en la lista
        let indiceEliminar = productosElegidos.findIndex(producto => producto.toLowerCase() === productoEliminar.toLowerCase());

        if (indiceEliminar !== -1) {
            // Eliminar el producto
            productosElegidos.splice(indiceEliminar, 1);
            alert("Producto eliminado correctamente.");
        } else {
            alert("No se encontró el producto. Verifique el nombre e inténtelo nuevamente.");
        }

        // Volver a preguntar si quiere algo más
        manejarCompra();
    } else {
        // Respuesta no válida
        alert("Respuesta no válida. Por favor, ingrese 'SI' o 'NO'.");
        manejarCompra();
    }
}


