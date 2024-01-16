import cron from "node-cron";

import actualizarFotoPerfil from "./functions/actualizarFotoPerfil.js";
import actualizarFotoPerfilForzado from "./functions/actualizarFotoPerfilForzado.js";
import actualizarNombre from "./functions/actualizarNombre.js";
import conseguirEstadisticas from "./functions/conseguirEstadisticas.js"

cron.schedule("*/7 * * * *", () => {
  console.log("Actualizando fotos de perfil.")
  actualizarFotoPerfil();
});

cron.schedule("0 7 * * *", () => {
  actualizarFotoPerfilForzado();
});

cron.schedule("*/3 * * * *", () => {
  actualizarNombre();
});

cron.schedule("*/2 * * * * *", () => {
  //console.log("hey")
  //conseguirEstadisticas();
});