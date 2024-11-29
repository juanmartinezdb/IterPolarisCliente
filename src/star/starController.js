import { loadC, getC, loadS, getS } from '../fragments/js/jsonCRUD.js';

window.addEventListener("DOMContentLoaded", async () => {
  // Cargar plantillas y esperar a que se carguen
  await chargeTemplate("../fragments/html/navbar.html", ".mainnavbar");
  await chargeTemplate("../fragments/html/lateralStars.html", ".lateral");

  //Cargar el array de constelaciones
  await loadC();
  await loadS();
  const c = getC();
  const s = getS();
  console.log(c);

  //CONSTRUIR BARRA LATERAL y MARCAR
  const itemLateral = (estrella) => {
    let li = document.createElement("li");
    let enlace = document.createElement("a");
    li.appendChild(enlace);
    li.classList.add("list-group-item", "list-group-item-action");
    enlace.textContent = estrella.nombre;
    enlace.href =  "/src/star/listStars.html?id="+estrella.id+"&idC="+estrella.idConstelacion;
    li.dataset.id = estrella.id;
    console.log(estrellas);
    
    document.querySelector("." + estrella.tipo).appendChild(li);

    // Añadir event listener aquí
    li.addEventListener('click', () => {
      // Remover clase 'active' de todos los items
      const listaItems = document.querySelectorAll('.list-group-item');
      listaItems.forEach(i => i.classList.remove('active'));

      li.classList.add('active');
      launchConstellation(li.dataset.id);
    });
  }


  //PINTAR Estrella 
  const displayStar = (estrella, conste) => {
if (document.querySelector(".constelacion")){
    document.querySelectorAll(".constelacion").forEach(c=> c.textContent= conste.nombre); 

}
if (document.querySelector(".imagen")){
    document.querySelector(".imagen").src = conste.imagen;

}
if (document.querySelector(".nombre")){
    document.querySelector(".nombre").textContent = estrella.nombre;

}
if (document.querySelector(".activa")){
    document.querySelector(".activa").textContent = (estrella.activa?"Activa":"Pausada");

}
if (document.querySelector(".descripcion")){
    document.querySelector(".descripcion").textContent = conste.descripcion;

}
if (document.querySelector(".frecuencia")){
    //frecuencia
    if (estrella.frecuencia!=null){
        document.querySelector(".frecuencia").innerHTML="<b>Frecuencia:</b>"+(estrella.frecuencia?"diario":"semanal");
    }

}
if (document.querySelector(".fechalimite")){
    //fechaLimite
    if (estrella.fechaLimite) {
        document.querySelector(".fechalimite").innerHTML=`<b>Fecha limite:</b> ${estrella.fechaLimite} <i class="bi bi-clock"></i>`
        
        
    }

}
if (document.querySelector(".energia")){
    //energia
    if (estrella.energia) {
        const flimite = document.querySelector(".fechalimite")
        flimite.innerHTML=`<p>
        <b>Energia</b> ${estrella.energia} 
        ${estrella.energia>0?'<i class="bi bi-battery-charging"></i>': '<i class="bi bi-battery-half"></i>' }`
        
        if (estrella.energia>0) {
            flimite.classList.add("positiva");
        } else {
            flimite.classList.add("negativa");
        }        
    }

}
if (document.querySelector(".puntos")){
    //puntos   
    if (estrella.puntos) {
        document.querySelector(".puntos").innerHTML=`<b>Puntos:</b> ${estrella.puntos} <i class="bi bi-trophy-fill"></i></p>`
        
    }
}
if (document.querySelector(".enlace")){
    
        //enlace 
        if (estrella.enlace) {
            document.querySelector(".fechalimite").innerHTML=` <p class="me-1"><b>Enlace: </b></p>
              <a href=${estrella.enlace}>Click Aquí</a>`
    
        }
}


    
  }

  //CREATE/EDIT SELECT
if (document.querySelector(".selectConstelacion")){
    c.forEach (c => {
        const option = document.createElement("option");
        option.value = c.id;
        option.textContent= c.nombre;
        document.querySelector(".selectConstelacion").appendChild(option);
    })  
  }

  const parametrosURL = new URLSearchParams(window.location.search);
    const idC = parametrosURL.get("idC");
    const id = parametrosURL.get("id");

    const conste = c.find(c => c.id == idC);
    const estrellas = s.filter(s => s.idConstelacion== idC);
    const estrella = s.find(s => s.id==id);

     estrellas.forEach(s => {
        itemLateral(s);
     })
    if (estrella) {
        displayStar(estrella, conste); 
    }
//BOTONES
//BOTONES
const dirigirCrear = (idC) => {

}
if (document.querySelector(".createStar")) {
    document.querySelector(".createStar").addEventListener("click", () => {
        window.location.href = "createStar.html?id=" + id+"&idC="+idC;
    });
}
const dirigirEdit = (idC) => {

}
if (document.querySelector(".edit")) {
    document.querySelector(".edit").addEventListener("click", () => {
        window.location.href = "editConstellation.html?idC=" + idC;
    });
}
});
