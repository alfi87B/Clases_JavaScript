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
// Array para almacenar productos seleccionados
let productosElegidos = [];

// Funcion que producto desea comprar
function elegirProducto() {
    let mensaje = "Seleccione una categoría:\n";
    categorias.forEach((categoria, index) => {
        mensaje += `${index + 1} - ${categoria.nombre}\n`;
    });

    let eleccionCategoria = prompt(mensaje);
    eleccionCategoria = parseInt(eleccionCategoria);

    if (!isNaN(eleccionCategoria) && eleccionCategoria >= 1 && eleccionCategoria <= categorias.length) {
        const categoriaSeleccionada = categorias[eleccionCategoria - 1];
        mostrarProductos(categoriaSeleccionada);
    } else {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        elegirProducto();
    }
}

// Funcion productos
function mostrarProductos(categoria) {
    let mensaje = `Seleccione un producto de la categoría "${categoria.nombre}":\n`;
    categoria.productos.forEach((producto, index) => {
        mensaje += `${index + 1} - ${producto.nombre}\n`;
    });

    let eleccionProducto = prompt(mensaje);
    eleccionProducto = parseInt(eleccionProducto);

    if (!isNaN(eleccionProducto) && eleccionProducto >= 1 && eleccionProducto <= categoria.productos.length) {
        const productoSeleccionado = categoria.productos[eleccionProducto - 1];
        elegirTalle(productoSeleccionado);
    } else {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        mostrarProductos(categoria);
    }
}

// Funcion talle
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
        if (producto.talleUnico || eleccionTalle <= producto.talles.length) {
            const talleSeleccionado = producto.talleUnico ? "Único" : producto.talles[eleccionTalle - 1];
            alert(`Ha elegido el producto "${producto.nombre}" en talle ${talleSeleccionado}.`);

            // Almacenar la elección del cliente
            productosElegidos.push({
                nombre: producto.nombre,
                talle: talleSeleccionado,
                precio: producto.precio,
            });

            // Desea agregar algo mas
            const agregarMas = confirm("¿Desea agregar algo más?");
            if (!agregarMas) {
                // Si no desea agregar mas, mostramos los productos seleccionados y confirmamos la compra
                mostrarProductosElegidos();
            } else {
                // Si desea agregar mas, reiniciamos el proceso
                elegirProducto();
            }
        } else {
            // El usuario eligio la opción de no saber qué talle es
            alert("Recomendar talle aquí, si es necesario.");
            
            mostrarProductosElegidos();
        }
    } else {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        elegirTalle(producto);
    }
}

// Función para mostrar los productos elegidos y confirmar la compra
function mostrarProductosElegidos() {
    let mensaje = "Productos seleccionados:\n";
    let totalCompra = 0;

    productosElegidos.forEach(producto => {
        mensaje += `- ${producto.nombre} (${producto.talle}) - Precio: ${producto.precio}\n`;
        totalCompra += producto.precio;
    });

    mensaje += `\nTotal de la compra: ${totalCompra}`;

    alert(mensaje);

    // Confirmamos la compra
    const confirmarCompra = confirm("¿Desea confirmar la compra?");
    if (confirmarCompra) {
        alert("¡Gracias por su compra! Vuelva pronto.");
    } else {
        // Si no confirma la compra, reiniciamos el proceso
        productosElegidos = [];
        elegirProducto();
    }
}

// Iniciar el proceso preguntando qué producto desea comprar
elegirProducto();