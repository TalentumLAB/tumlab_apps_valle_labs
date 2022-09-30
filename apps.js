//Aquí se editan o agregan las aplicaciones
const agregarAplicaciones = [
  {
    title: "Simuladores",
    url: "https://www.google.com",
    isActive: true, // Se manda "true" si se quiere mostrar, sino se manda "false"
    image: "/images/tumlab_simuladores.png", //Se envía la ruta de la imagen,
    description:
      "Simulaciones interactivas en Física, Química, Ciencias basada en el proyecto de simulaciones interactivas de PhET de la Universidad de Colorado en Boulder. Estos recursos nacen de la investigación educativa extensiva e involucran a los estudiantes mediante un ambiente intuitivo y similar a un juego, en donde aprenden explorando y descubren.",
    image_background: "/images/simuladores_bg.png",
  },
  {
    title: "Valle Mágico",
    url: "https://www.google.com",
    isActive: false,
    image: "./images/logo-vallemagico.png",
  },
  {
    title: "Wikipedia",
    url: "https://www.google.com",
    isActive: true,
    image: "/images/wikipedia_tumlab.png",
    image_title: "/images/Wikipedia-Logo.png",
    description:
      "Wikipedia es una página web para realizar consultas online de contenido abierto, una web que almacena, recopila y transmite información de manera totalmente estructurada. Cualquier persona registrada puede participar en esta particular enciclopedia y publicar información o artículos que puedan ayudar a otras personas a encontrar los datos o información que necesitan",
    image_background: "/images/wikipedia_bg.png",
  },
  {
    title: "Moodle",
    url: "https://www.google.com",
    isActive: false,
    image: "./images/moodle.png",
  },
  {
    title: "Colcha de tesoros",
    url: "https://www.google.com",
    isActive: false,
    image: "./images/logo-colchadetesoros.png",
  },
  {
    title: "Tumlab LMS",
    url: "https://www.google.com",
    isActive: true,
    image: "/images/tumlab_lms.png",
    image_title: "/images/title_tumlab.png",
    description:
      "TUMLAB LMS es una plataforma de aprendizaje diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado único, robusto y seguro para crear ambientes de aprendizaje personalizados. Una interfaz simple, recursos bien documentados, junto con mejoras contiuas, hacen a Moodle fácil de aprender y usar.",
    image_background: "/images/tumlab_bg.png",
  },
  {
    title: "Ejemplo 2",
    url: "https://www.google.com",
    isActive: false,
    image: "./images/logo.png",
  },
  {
    title: "Ejemplo 3",
    url: "https://www.google.com",
    isActive: false,
    image: "./images/logo.png",
  },
];

//Mostrar aplicaciones
const showApps = () => {
  agregarAplicaciones.map((app) => {
    if (app.isActive) {
      document.getElementById("cards_slice").innerHTML += `
      <div class="card" id="card" key="${app.title}" onClick={onClickApp(this)}>
        <div><img src="${app.image}" alt="${app.title}" /></div>
      </div>
      `;
    }
  });
};

//Muestra el contenido al presionar la aplicación
const onClickApp = (data) => {
  const key = data.getAttribute("key");
  document.getElementById("logo").style.display = "none";
  document.getElementById("h4_cards").style.display = "none";
  document.body.style.background =
    "linear-gradient(0.84deg, #393939 0.89%, rgba(249, 243, 243, 0) 47.35%)";

  agregarAplicaciones.map((app) => {
    if (app.isActive && app.title === key) {
      document.getElementById("content").innerHTML = `
        <div class="container_content animate__animated animate__fadeIn animate__slower">
        <div class="container_left">
        ${
          app.image_title
            ? `<img src=${app.image_title} alt="Wikipedia" />`
            : `<h1> ${app.title} </h1>`
        }
        <p class="p_container_left">${app.description}</p>
        <a class="btn_go" href="${app.url}" target="_blank"> Iniciar <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 3.25L13.25 7.75L8.75 12.25M2.75 7.75H13.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
        </div>
        <div class="container_right">
        <img src=${app.image_background} alt="${app.title} " />
        </div>
        </div>
        `;
    }
  });
};
