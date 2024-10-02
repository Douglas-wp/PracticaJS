var productos = [
    { nombre: "Jugo de pera", precio: 0.50 },
    { nombre: "bigcola lata", precio: 0.75 },
    { nombre: "Coca-cola lata", precio: 0.80 },
    { nombre: "Arroz libra", precio: 1.20 },
    { nombre: "Jabon Dove", precio: 0.25 },
    { nombre: "Cafe Nescafe caja", precio: 3.25 },
    { nombre: " Redbull", precio: 0.15 },
    { nombre: "Arroz precocido libra", precio: 0.30 },
    { nombre: "Galleta kellogs", precio: 0.10 },
    { nombre: "Aceite Orisol", precio: 1.90 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html +=     "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}