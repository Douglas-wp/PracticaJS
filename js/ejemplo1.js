var frutas = ["Manzanas, uvas, fresas, piñas, naranjas, sandias"];


for (var i = 0; i < frutas.length; i++) {

 document.getElementById("listafrutas").innerHTML += "<li>" + frutas(i) + "</li>";
}

// Objetos
var persona = { nombre: "Juan", telefono: "12345678" };

// Array de objetos
var contactos = [
    { nombre: "Juan", telefono: "12344678" },
    { nombre: "Carmen", telefono: "87654341" },
];

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {

    let li = "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    document.getElementById("listasContactos").innerHTML += li;
}

