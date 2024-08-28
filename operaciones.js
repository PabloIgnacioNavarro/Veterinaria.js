//En este archivo se deberán crear 2 funciones para:
//Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:

`
 1. Nombre del animal
 2. Edad
 3. Tipo de animal
 4. Color del animal
 5. Enfermedad
 `;

//Leer: Mostrar por consola todas las citas registradas.
//Para la lectura de archivos es posible usando el método readFileSync.
// UTF8 se ocupa por defecto puesto que esta es la codificación de caracteres para nuestro idioma.

const fs = require("fs");
const citas = fs.readFileSync("citas.json", "utf8");
const citasEnJavasScript = JSON.parse(citas);
citasEnJavasScript.forEach((citas) => {
  console.log(citas);
});
