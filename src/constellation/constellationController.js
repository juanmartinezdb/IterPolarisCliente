import { loadC, getC, loadS, getS } from '/src/fragments/js/jsonCRUD.js';

window.addEventListener("DOMContentLoaded", async () => {
    // Cargar plantillas y esperar a que se carguen
    await chargeTemplate("../fragments/html/navbar.html", ".mainnavbar");
    await chargeTemplate("../fragments/html/lateralConstellation.html", ".lateral");

    //Cargar el array de constelaciones
    await loadC();
    await loadS();
    const c = getC();
    const s = getS();
    console.log(c);

    //CONSTRUIR BARRA LATERAL y MARCAR
    const itemLateral = (constelation) => {
        let li = document.createElement("li");
        let enlace = document.createElement("a");
        li.appendChild(enlace);
        li.classList.add("list-group-item", "list-group-item-action");
        enlace.textContent = constelation.nombre;
        enlace.href = "listConstellations.html?idC=" + constelation.id;
        li.dataset.id = constelation.id;
        document.querySelector("." + constelation.galaxia).appendChild(li);

        // Añadir event listener aquí
        li.addEventListener('click', () => {
            // Remover clase 'active' de todos los items
            const listaItems = document.querySelectorAll('.list-group-item');
            listaItems.forEach(i => i.classList.remove('active'));

            li.classList.add('active');
            launchConstellation(li.dataset.id);
        });
    }
    c.forEach(constellation => {
        itemLateral(constellation);
    });

    //PINTAR CONSTELACION 
    const displayConstellation = (conste) => {
        if (document.querySelector(".nombre")) {
            document.querySelector(".nombre").textContent = conste.nombre;
        }
        if (document.querySelector(".imagen")) {
            document.querySelector(".imagen").src = conste.imagen;
        }
        if (document.querySelector(".activa")) {
            document.querySelector(".activa").textContent = (conste.activa ? "Activa" : "Pausada");
        }
        if (document.querySelector(".galaxia")) {
            document.querySelector(".galaxia").textContent = conste.galaxia;
        }
        if (document.querySelector(".descripcion")) {
            document.querySelector(".descripcion").textContent = conste.descripcion;
        }
        if (document.querySelectorAll('.habito, .tarea, .recurso')) {
            document.querySelectorAll('.habito, .tarea, .recurso').forEach(ul => ul.innerHTML = '');
        }



        const starHijas = s.filter(s => s.idConstelacion == conste.id);
        console.log(starHijas);

        if (starHijas) {
            starHijas.forEach(estrella => {
                if (document.querySelector("." + estrella.tipo)) {
                    const ul = document.querySelector("." + estrella.tipo);

                    const li = document.createElement("li");
                    const enlace = document.createElement("a");
                    ul.appendChild(li);
                    li.appendChild(enlace);
                    enlace.textContent = estrella.nombre;
                    enlace.href = "/src/star/listStars.html?id=" + estrella.id + "&idC=" + estrella.idConstelacion;
                }


            });
        }


    }
    const parametrosURL = new URLSearchParams(window.location.search);
    const idC = parametrosURL.get("idC");
    const conste = c.find(c => c.id == idC);
    if (conste) {
        displayConstellation(conste);
    }
    //BOTONES
    const dirigirEdit = (idC) => {

    }
    if (document.querySelector(".edit")) {
        document.querySelector(".edit").addEventListener("click", () => {
            window.location.href = "editConstellation.html?idC=" + idC;
        });
    }
});
