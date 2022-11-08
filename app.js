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
    url: "http://tumlab.local:8087/wikipedia_es_all_nopic_2022-10/A/Wikipedia:Offline",
  },
  {
    key: 2,
    thumbnail: "./img/tumlab/tumlab_thumbnail.png",
    is_show: true,
    title: "./img/tumlab/tumlab_title.png",
    cover: "./img/tumlab/tumlab_cover.png",
    description:
      "TUMLAB LMS es una plataforma de aprendizaje diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado único, robusto y seguro para crear ambientes de aprendizaje personalizados. Una interfaz simple, recursos bien documentados, junto con mejoras continuas, hacen a Moodle fácil de aprender y usar.",
    url: "http://tumlab.local:5000",
  },
  {
    key: 3,
    thumbnail: "./img/simuladores/simuladores_thumbnail.png",
    is_show: true,
    title: "./img/simuladores/simuladores_title.png",
    cover: "./img/simuladores/simuladores_cover.png",
    description:
      "Simulaciones interactivas en Física, Química, Ciencias basada en el proyecto de simulaciones interactivas de PhET de la Universidad de Colorado en Boulder. Estos recursos nacen de la investigación educativa extensiva e involucran a los estudiantes mediante un ambiente intuitivo y similar a un juego, en donde aprenden explorando y descubren.",
    url: "http://tumlab.local:8087/phet_es-pe_2021-08/A/index.html",
  },
  {
    key: 4,
    thumbnail: "./img/moodle/moodle_thumbnail.png",
    is_show: false,
    title: "",
    cover: "",
    description: "",
    url: "http://tumlab.local",
  },
  {
    key: 5,
    thumbnail: "./img/colcha/colcha_thumbnail.png",
    is_show: false,
    title: "",
    cover: "./img/colcha/colcha_cover.png",
    description: "City Know pro 2 es la segunda versión del juego educativo City Know pro, donde los estudiantes desde transición hasta grado noveno aprenden jugando minijuegos, Inglés, Matemáticas, Lenguaje, competencia ciudadana son las distintas disciplinas que el niño aprenderá jugando, el juego esta diseñado con una accesibilidad fluida, así cualquier niño sin importar su discapacidad puede aprender jugando.",
    url: "http://tumlab.local",
  },
  {
    key: 6,
    thumbnail: "./img/valle/valle_thumbnail.png",
    is_show: false,
    title: "",
    cover: "./img/valle/valle_cover.png",
    description: "Valle Mágico es una propuesta educativa inclusiva para el desarrollo de las capacidades y talentos de los estudiantes de las 149 instituciones educativas oficiales, de los 34 municipios no certificados del departamento del Valle del Cauca. Este proyecto garantiza una atención educativa con calidad, en el marco de la educación inclusiva correspondiente al decreto 366 en el artículo 10 para las prácticas educativas inclusivas.",
    url: "http://tumlab.local",
  },
  {
    key: 7,
    thumbnail: "./img/superset/superset_thumbnail.png",
    is_show: true,
    title: "./img/superset/superset_title.png",
    cover: "./img/superset/superset_cover.png",
    description:
      "Superset es rápido, liviano, intuitivo y está cargado de opciones que facilitan a los usuarios de todos los conjuntos de habilidades explorar y visualizar sus datos, desde simples gráficos de líneas hasta gráficos geoespaciales altamente detallados.",
    url: "http://tumlab.local:8088",
  },
  {
    key: 8,
    thumbnail: "./img/scratch/scratch_thumbnail.png",
    is_show: true,
    title: "./img/scratch/scratch_title.png",
    cover: "./img/scratch/scratch_cover.png",
    description:
      "Scratch es la comunidad de programación para niños y niñas más grande del mundo, y un lenguaje de programación con una interfaz sencilla que permite a los jóvenes crear historias digitales, juegos y animaciones. Scratch está diseñado, desarrollado y moderado por la Fundación Scratch, una organización sin ánimo de lucro. Scratch promueve el pensamiento computacional y las habilidades en resolución de problemas; enseñanza y aprendizaje creativos, auto expresión y colaboración; e igualdad en informática.",
    url: "http://192.168.4.1:8086",
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
