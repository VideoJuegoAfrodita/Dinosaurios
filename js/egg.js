import { DINOSAURS } from "./data/dinosaurs";
import { parkState } from "./state";
import { renderPark} from ".render.js";
import { updateStats} from "./stats.js";

export function initEgg() {
    const eggBtn = document.getElementById("egg-btn");

    eggBtn.addEventListener("click", ()=> {

        //maximo 6 dinosaurios
        if (parkState.dinos.length >= 6) {
            alert("⚠️El parque ya tiene 6 dinosaurios");
            return;
        }

        //seleccion aleatoria
        const baseDino =
            DINOSAURS[Math.floor(Math.random() * DINOSAURS.length)];
        
        //creacion del dinosaurio
        const newDino = {
            id: crypto.randomUUID(),
            nombre: baseDino.especie,
            especie: baseDino.especie,
            energia: 30,
            estado: "tranquilo",
            evolucion: 1,
            elemento: baseDino.elemento,
            habitat: baseDino.habitat,
            dieta: baseDino.dieta,
            img: baseDino.img
        };

        parkState.dinos.push(newDino);

        renderPark();
        updateStats();
    });
}