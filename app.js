//Arreglo de las aplicaciones
const addApps = [
  {
    key: 1,
    thumbnail: "./img/wiki/wiki_thumbnail.png",
    is_show: true,
    title: "./img/wiki/wiki_title.png",
    cover: "./img/wiki/wiki_cover.png",
    description:
      "Wikipedia es una página web para realizar consultas online de contenido abierto, una web que almacena, recopila y transmite información de manera totalmente estructurada.",
    url: "https://www.google.com",
  },
  {
    key: 2,
    thumbnail: "./img/tumlab/tumlab_thumbnail.png",
    is_show: true,
    title: "./img/tumlab/tumlab_title.png",
    cover: "./img/tumlab/tumlab_cover.png",
    description:
      "TUMLAB LMS es una plataforma de aprendizaje diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado único, robusto y seguro para crear ambientes de aprendizaje personalizados. Una interfaz simple, recursos bien documentados, junto con mejoras continuas, hacen a Moodle fácil de aprender y usar.",
    url: "https://www.google.com",
  },
  {
    key: 3,
    thumbnail: "./img/simuladores/simuladores_thumbnail.png",
    is_show: true,
    title: "./img/simuladores/simuladores_title.png",
    cover: "./img/simuladores/simuladores_cover.png",
    description:
      "Simulaciones interactivas en Física, Química, Ciencias basada en el proyecto de simulaciones interactivas de PhET de la Universidad de Colorado en Boulder. Estos recursos nacen de la investigación educativa extensiva e involucran a los estudiantes mediante un ambiente intuitivo y similar a un juego, en donde aprenden explorando y descubren.",
    url: "https://www.google.com",
  },
  {
    key: 4,
    thumbnail: "./img/moodle/moodle_thumbnail.png",
    is_show: false,
    title: "",
    cover: "",
    description: "",
    url: "https://www.google.com",
  },
  {
    key: 5,
    thumbnail: "./img/colcha/colcha_thumbnail.png",
    is_show: true,
    title: "",
    cover: "",
    description: "",
    url: "https://colchadetesoros.com/",
  },
  {
    key: 6,
    thumbnail: "./img/valle/valle_thumbnail.png",
    is_show: true,
    title: "",
    cover: "",
    description: "",
    url: "https://vallemagico.co/",
  },
  {
    key: 7,
    thumbnail: "./img/superset/superset_thumbnail.png",
    is_show: true,
    title: "./img/superset/superset_title.png",
    cover: "./img/superset/superset_cover.png",
    description:
      "Superset es rápido, liviano, intuitivo y está cargado de opciones que facilitan a los usuarios de todos los conjuntos de habilidades explorar y visualizar sus datos, desde simples gráficos de líneas hasta gráficos geoespaciales altamente detallados.",
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
      <div class="col cards" key=${app.key} onclick=saveKeyApp(this)>
      <img src=${app.thumbnail} class="img-thumbnail" alt="..." />
      </div>
      `;
    }
  });
};

//Guardar el key de la aplicación seleccionada
const saveKeyApp = (data) => {
  localStorage.setItem("keySelected", data.getAttribute("key"));
  const container_info = document.getElementById("container_info");
  const container_home = document.getElementById("container_home");
  const title_explore = document.getElementById("title_explore");
  const vector_left = document.getElementById("vector_left");
  const vector_right = document.getElementById("vector_right");
  const rectangle = document.getElementById("rectangle_bg");
  const home_section = document.getElementById("home_section");
  const container_cards = document.getElementById("container_cards");
  const arrow = document.getElementById("arrow");

  arrow.classList.add("arrow_info");
  document.body.classList.add("body_info");
  home_section.classList.add("home_section_info");
  container_cards.classList.add("container_cards_info");

  container_info.style.display = "block";
  container_home.style.display = "none";
  title_explore.style.display = "none";
  vector_right.style.display = "none";
  vector_left.style.display = "none";
  rectangle.style.display = "none";

  showAppDetails();
};

//Mostrar detalles de la aplicación
const showAppDetails = () => {
  const key = localStorage.getItem("keySelected");

  const appContainer = document.getElementById("row_info");

  addApps.map((app) => {
    if (app.key == key) {
      appContainer.innerHTML = `
      <div class="col-7 animate__animated animate__fadeIn animate__slower col-left mt-4">
        <div> 
        <img src="${app.title}" class="img_title" alt="" />
        </div>
        <div> 
        <h5 class="description text-break text-wrap">
         ${app.description}
        </h5>
        </div>
        <div> 
        <a class="btn_go" href="${app.url}" target="_blank">Iniciar</a>
        </div>
      </div>
      <div class="col-5 img_col animate__animated animate__fadeIn animate__slower" >
        <img src=${app.cover} alt="" />
      </div>`;
    }
  });
};
