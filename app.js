//Arreglo de las aplicaciones
const addApps = [
  {
    key: 1,
    thumbnail: "/img/wiki/wiki_thumbnail.png",
    is_show: true,
    title: "/img/wiki/wiki_title.png",
    cover: "/img/wiki/wiki_cover.png",
    description:
      "Wikipedia es una página web para realizar consultas online de contenido abierto, una web que almacena, recopila y transmite información de manera totalmente estructurada.",
    url: "https://www.google.com",
  },
  {
    key: 2,
    thumbnail: "/img/tumlab/tumlab_thumbnail.png",
    is_show: true,
    title: "/img/tumlab/tumlab_title.png",
    cover: "/img/tumlab/tumlab_cover.png",
    description:
      "TUMLAB LMS es una plataforma de aprendizaje diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado único, robusto y seguro para crear ambientes de aprendizaje personalizados. Una interfaz simple, recursos bien documentados, junto con mejoras continuas, hacen a Moodle fácil de aprender y usar.",
    url: "https://www.google.com",
  },
  {
    key: 3,
    thumbnail: "/img/simuladores/simuladores_thumbnail.png",
    is_show: true,
    title: "/img/simuladores/simuladores_title.png",
    cover: "/img/simuladores/simuladores_cover.png",
    description:
      "Simulaciones interactivas en Física, Química, Ciencias basada en el proyecto de simulaciones interactivas de PhET de la Universidad de Colorado en Boulder. Estos recursos nacen de la investigación educativa extensiva e involucran a los estudiantes mediante un ambiente intuitivo y similar a un juego, en donde aprenden explorando y descubren.",
    url: "https://www.google.com",
  },
  {
    key: 4,
    thumbnail: "/img/moodle/moodle_thumbnail.png",
    is_show: false,
    title: "",
    cover: "",
    description:
      "",
    url: "https://www.google.com",
  },
  {
    key: 5,
    thumbnail: "/img/colcha/colcha_thumbnail.png",
    is_show: false,
    title: "",
    cover: "",
    description:
      "",
    url: "https://www.google.com",
  },
  {
    key: 6,
    thumbnail: "/img/valle/valle_thumbnail.png",
    is_show: false,
    title: "",
    cover: "",
    description:
      "",
    url: "https://www.google.com",
  },
];

let keySelected = "";

//Muestra las aplicaciones activas en la pagina de inicio.
const showApps = () => {
  addApps.map((app) => {
    if (app.is_show) {
      const appContainer = document.getElementById("row_cards");
      appContainer.innerHTML += `
      <div class="col-2 cards" key=${app.key} onclick=saveKeyApp(this)>
      <img src=${app.thumbnail} class="img-thumbnail" alt="..." />
      </div>
      `;
    }
  });
};

//Guardar el key de la aplicación seleccionada
const saveKeyApp = (data) => {
  localStorage.setItem("keySelected", data.getAttribute("key"));
  if (!window.location.href.includes("apps.html")) {
    window.location.href = "apps.html";
  }
  showAppDetails();
};

//Mostrar detalles de la aplicación
const showAppDetails = (data) => {
  const key = localStorage.getItem("keySelected");
  const appContainer = document.getElementById("row_info");
  console.log(key);

  addApps.map((app) => {
    if (app.key == key) {
      appContainer.innerHTML = `
      <div class="col-6 animate__animated animate__fadeIn animate__slower col-left">
        <img src="${app.title}" class="mb-4 img_title" alt="" />
        <h5 class="description mb-5">
         ${app.description}
        </h5>
        <a class="btn_go" href="${app.url}">Iniciar</a>
      </div>
      <div class="col-5 img_col animate__animated animate__fadeIn animate__slower">
        <img src=${app.cover} alt="" />
      </div>`;
    }
  });
};
