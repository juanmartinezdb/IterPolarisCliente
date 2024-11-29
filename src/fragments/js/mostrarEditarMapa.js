    // MOSTRAR MAPA -----------------------(coordenada original el instituto)
    // Crear el mapa centrado en las coordenadas iniciales
    const initialCoordinates = [36.6957750088756, 355.54315547233134]; // Tus coordenadas originales
    const map = L.map('map').setView(initialCoordinates, 20);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Agregar marcador inicial
    let marker = L.marker(initialCoordinates, { draggable: true }).addTo(map)
      .bindPopup('Haz clic para moverme a otra ubicación')
      .openPopup();
    // ------------------------------------------------------------------------------


// //----------------------------------------EDITAR MAPA -------------------------------
//         // Elemento oculto para guardar las coordenadas
//         const coordinatesInput = document.createElement('input');
//         coordinatesInput.type = 'hidden';
//         coordinatesInput.name = 'coordinates'; 
//         coordinatesInput.value = JSON.stringify(initialCoordinates); // Inicializar con las coordenadas actuales
//         document.forms.constellation.appendChild(coordinatesInput);

//         // Actualizar las coordenadas al hacer clic en el mapa
//         const setLocation = (e)=>{
//             const { lat, lng } = e.latlng;
//             console.log(e.latlng);
//             // Mover el marcador a la nueva ubicación
//             marker.setLatLng([lat, lng]);

//             // Actualizar el valor del input oculto
//             coordinatesInput.value = JSON.stringify({ lat, lng });
//             console.log(document.forms.constellation.coordinates.value);
//         };
//         map.on('click', setLocation );

//         console.log(document.forms.constellation.coordinates.value);
