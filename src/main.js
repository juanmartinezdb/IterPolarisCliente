import { loadC, getC } from './fragments/js/jsonCRUD.js';

window.addEventListener("DOMContentLoaded", async () => {
  // Cargar plantillas y esperar a que se carguen
  await chargeTemplate("./fragments/html/navbar.html", ".mainnavbar");
  await chargeTemplate("./fragments/html/lateralConstellation.html", ".lateral");

  //Cargar el array de constelaciones
  await loadC();
  const c = getC();
  console.log(c);

  // correccion EL navbar
  document.querySelector(".navbar-brand").href = "index.html";

  //CONSTRUIR BARRA LATERAL y MARCAR
  const itemLateral = (constelation) => {
    let li = document.createElement("li");
    let enlace = document.createElement("a");
    li.appendChild(enlace);
    li.classList.add("list-group-item", "list-group-item-action");
    enlace.textContent = constelation.nombre;
    enlace.href = "/src/constellation/listConstellations.html?idC="+constelation.id;
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

});