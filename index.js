//Archivo principal que deberá ser ejecutado para interactuar con la aplicación.
//En este archivo se deberán importar las operaciones que creen y lean las citas de atención en la veterinaria.

console.log("Veterinaria Js 🐶");

//Creación de archivos es posible con un módulo llamado File System (fs) usando el método writeFilessync.

const fs = require("fs");
const citas = [
  {
    nombre: "Benito",
    edad: "1 año",
    animal: "perro",
    color: "blanco",
    enfermedad: "otitis",
  },
  {
    nombre: "Julieta",
    edad: "6 años",
    animal: "perro",
    color: "amarillo",
    enfermedad: "Moquillo",
  },
];
fs.writeFileSync("citas.json", JSON.stringify(citas));

//Importar y exportar módulos en Node Js.

const fs = require("fs");
const { saludar, darLasGracias } = require("./modales.js");
saludar("Pablo");
darLasGracias("Carolina");

//Utilizar argumentos escritos por línea de comandos.

const fs = require("fs");
const { saludar, darLasGracias } = require("./modales.js");
const argumentos = process.argv.slice(2);
const nombreParaSaludar = argumentos[0];
const nombreParaAgradecer = argumentos[1];
saludar(nombreParaSaludar);
darLasGracias(nombreParaAgradecer);
