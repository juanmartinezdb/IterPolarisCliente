/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //se usa junto con la clase "dark" en la tag HTML del inicio de documento,
  //con esto y un input que nos permita hacer de interruptor podemos cambiarlo, o tambien se aplicara segun
  //esté configurada en el navegador. 
  content: ["./src/**/*.html", 
    "./src/**/*.js",    
    "./css/**/*.css",],    
  theme: {
    extend: {
      colors: {
        "azul-claro": '#243cff',
        "azul-oscuro": '#0d1b3e'
      },
      spacing: {
        "42" :'170px', //se pueden agregar personalizados siempre entre '' o "" w-42  h-42 etc...
      },
      width: {
        "41" : '172px' // solo aplicaria a el ancho. w-42
      },
      screens: {
        "tablet" : '900px' // se aplicamos el screens aquí, extiende y no borra los otros screens.
      }

    },
    // screens: { // si creamos un screens AQUI para tener medidas personalizadas, tenemos que volver a meter las anteriores
    //   "tablet" : '900px',
    // }
  },
  plugins: [],
}

