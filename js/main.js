const productos = [
    {nombre: "Giftcard A", precio: 2000},
    {nombre: "Curso de automaquillaje", precio: 5000},
    {nombre: "Giftcard B", precio: 2500},
    {nombre: "Limpieza de cutis", precio: 4000},
    {nombre: "Lifting de pestañas", precio: 4500},
    {nombre: "Laminado de cejas", precio: 3500},
];

let carrito = [];

let seleccion = prompt("Hola! ¿Desea comprar algún producto?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese su respuesta por si o no")
    seleccion = prompt("Hola! Comprará algo? Ingrese si o no")
};

while(seleccion != "no"){
    let producto = prompt("Escoje un producto por favor")
    let precio = 0

    if(producto == "Giftcard A" || producto == "Curso de automaquillaje" || producto == "Giftcard B" || producto == "Limpieza de cutis" || producto == "Lifting de pestañas" || producto == "Laminado de cejas"){
        switch(producto) {
            case "Giftcard A":
                precio = 2000;
                break;
            case "Curso de automaquillaje":
                precio = 5000;
                break;
            case "Giftcard B":
                    precio = 2500;
                    break;
            case "Limpieza de cutis":
                precio = 4000;
                break;
            case "Lifting de pestañas":
                precio = 4500;
                break;
            case "Laminado de cejas":
                precio = 3500;
                break;    
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuántas unidades quiere llevar?"))
    
    carrito.push({producto, unidades, precio})
    alert(carrito)
    } else {
        alert("No tenemos ese producto en nuestra tienda")
    }

    seleccion = prompt("Quiere seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por la compra! Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

alert(`El total a pagar es: ${total}`);