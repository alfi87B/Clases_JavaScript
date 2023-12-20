// Declarar variables al principio
let nombreCliente = prompt("Hola! Ingresa tu nombre");
let productosSeleccionados = [];

let categorias = [
    {
        producto: "Remeras",
        modelos: [
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
        producto: "Buzos",
        modelos: [
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
        producto: "Short de Baño",
        modelos: [
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
        producto: "Gorras",
        modelos: [
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
    },
];

// Función para mostrar el menú de categorías
function mostrarMenuCategorias(categorias) {
    let mensaje = "Seleccione un tipo de producto:\n";
    categorias.forEach((categoria, index) => {
        mensaje += `${index + 1} - ${categoria.producto}\n`;
    });

    let eleccionCategoria = prompt(mensaje);
    eleccionCategoria = parseInt(eleccionCategoria);

    if (isNaN(eleccionCategoria) || eleccionCategoria < 1 || eleccionCategoria > categorias.length) {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        return mostrarMenuCategorias(categorias);
    }

    return categorias[eleccionCategoria - 1];
}

// Función para mostrar los modelos de una categoría
function mostrarModelos(categoria) {
    let seleccionValida = false;

    while (!seleccionValida) {
        let mensaje = `Seleccione un modelo de ${categoria.producto}:\n`;
        categoria.modelos.forEach((modelo, index) => {
            mensaje += `${index + 1} - ${modelo.nombre}\n`;
        });

        let eleccionModelo = prompt(mensaje);
        eleccionModelo = parseInt(eleccionModelo);

        if (!isNaN(eleccionModelo) && eleccionModelo >= 1 && eleccionModelo <= categoria.modelos.length) {
            alert(`Seleccionaste: ${categoria.modelos[eleccionModelo - 1].nombre}`);
            seleccionValida = true;
            return categoria.modelos[eleccionModelo - 1];
        } else {
            alert("Selección no válida. Por favor, ingrese un número válido.");
        }
    }

    // Esto debería ser innecesario gracias al return anterior, pero lo dejamos por claridad
    return null;
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
        mensaje += `${producto.talles.length + 1} - No sé qué talle soy\n`;
    }

    let eleccionTalle = prompt(mensaje);
    eleccionTalle = parseInt(eleccionTalle);

    if (!isNaN(eleccionTalle) && eleccionTalle >= 1 && eleccionTalle <= (producto.talleUnico ? 1 : producto.talles.length + 1)) {
        // El cliente selecciono un talle
        if (producto.talleUnico || eleccionTalle <= producto.talles.length) {
            const talleSeleccionado = producto.talleUnico ? "Único" : producto.talles[eleccionTalle - 1].toLowerCase();
            alert(`Ha elegido el producto "${producto.nombre}" en talle ${talleSeleccionado}.`);
            
            // Preguntamos si desea agregar algo más
            function main() {
                let deseaAgregarOtro = true;
            
                while (deseaAgregarOtro) {
                    const categoriaSeleccionada = mostrarMenuCategorias(categorias);
                    const productoSeleccionado = mostrarModelos(categoriaSeleccionada);
                    const talleSeleccionado = elegirTalle(productoSeleccionado);
            
                    // Aquí puedes almacenar la información del producto seleccionado en un array
                    const productoActual = {
                        nombre: productoSeleccionado.nombre,
                        talle: talleSeleccionado,
                        precio: productoSeleccionado.precio
                    };
            
                    productosSeleccionados.push(productoActual);
            
                    // Preguntar si desea agregar otro producto
                    deseaAgregarOtro = confirm("¿Desea agregar otro producto?");
                }
            
                // Mostrar productos seleccionados
                const confirmacionCompra = confirmarProductos(productosSeleccionados);
            
                if (confirmacionCompra) {
                    alert("¡Gracias por su compra. Vuelva pronto!");
                } else {
                    alert("Lo sentimos. Esperamos que vuelva.");
                }
            }
        } else {
            // El usuario eligió la opción de no saber qué talle es
            recomendarTalle(producto);
        }
    } else {
        alert("Selección no válida. Por favor, ingrese un número válido.");
        elegirTalle(producto);
    }
}

// Llamada a la función principal
main();






// if (producto.talleUnico || eleccionTalle <= producto.talles.length) {
//     const talleSeleccionado = producto.talleUnico ? "Único" : producto.talles[eleccionTalle - 1].toLowerCase();
//     alert(`Ha elegido el producto "${producto.nombre}" en talle ${talleSeleccionado}.`);

//     // Preguntamos si desea agregar algo más
//     const agregarMas = confirm("¿Desea agregar algo más?");
//     if (agregarMas) {
//         // Si desea agregar más, reiniciamos el proceso
//         elegirProducto();
//     } else {
//         // Si no desea agregar más, mostramos los productos seleccionados
//         const confirmarCompra = confirmarProductos(productosSeleccionados);
//         if (confirmarCompra) {
//             // Si confirma la compra
//             alert("¡Gracias por su compra! Vuelva pronto.");
//             break; // Salir del bucle
//         } else {
//             // Si no confirma la compra, permite seguir agregando productos
//             continue;
//         }
//     }
// }