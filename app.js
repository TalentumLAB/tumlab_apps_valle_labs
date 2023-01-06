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
    url: "http://tumlab.local:8087/phet_es_2022-12/A/index.html",
  },
  {
    key: 4,
    thumbnail: "./img/superset/superset_thumbnail.png",
    is_show: true,
    title: "./img/superset/superset_title.png",
    cover: "./img/superset/superset_cover.png",
    description:
      "Superset es rápido, liviano, intuitivo y está cargado de opciones que facilitan a los usuarios de todos los conjuntos de habilidades explorar y visualizar sus datos, desde simples gráficos de líneas hasta gráficos geoespaciales altamente detallados.",
    url: "http://tumlab.local:8088",
  },
  {
    key: 5,
    thumbnail: "./img/scratch/scratch_thumbnail.png",
    is_show: true,
    title: "./img/scratch/scratch_title.png",
    cover: "./img/scratch/scratch_cover.png",
    description:
      "Scratch es la comunidad de programación para niños y niñas más grande del mundo, y un lenguaje de programación con una interfaz sencilla que permite a los jóvenes crear historias digitales, juegos y animaciones. Scratch está diseñado, desarrollado y moderado por la Fundación Scratch, una organización sin ánimo de lucro. Scratch promueve el pensamiento computacional y las habilidades en resolución de problemas; enseñanza y aprendizaje creativos, auto expresión y colaboración; e igualdad en informática.",
    url: "http://192.168.4.1:8086",
  },
  {
    key: 6,
    thumbnail: "./img/sistema_de_informacion/sistema_de_informacion.svg",
    is_show: true,
    title: "./img/sistema_de_informacion/sistema_de_informacion_title.svg",
    cover: "./img/sistema_de_informacion/sistema_de_informacion_cover.png",
    description:
      "El sistema de información es una de herramienta para reportes de la plataforma de contenido pedagogico que permite visualizar indicadores, desplegar gráficas y generar reportes sobre la información del estado y avance de los usuarios en las actividades elaboradas en los diferentes cursos de la plataforma.",
    url: "http://tumlab.local:3000",
  },
  {
    key: 7,
    thumbnail: "./img/openstreetmap/card_openstreetmap.png",
    is_show: true,
    title: "./img/openstreetmap/title_openstreetmap.svg",
    cover: "./img/openstreetmap/cover_openstreetmap.svg",
    description:
      "Plataforma para visualizacion de mapas con diversas funcionalidades como: busqueda de lugares, navegacion interactiva con el mapamundi, entre otras. Adicionalmente permite ver información sobre las vías de las ciudades más importantes.",
    url: "http://tumlab.local:8081",
  },
  {
    key: 8,
    thumbnail: "./img/mediacms/card_mediacms.png",
    is_show: true,
    title: "./img/mediacms/title_mediacms.svg",
    cover: "./img/mediacms/cover_mediacms.svg",
    description:
      "Description mediacms",
    url: "http://tumlab.local:8082",
  },
  {
    key: 9,
    thumbnail: "./img/residuos/AGAU_CARD.png",
    is_show: true,
    title: "./img/residuos/AGAU_TITLE.png",
    cover: "./img/residuos/AGAU_IMAGE.png",
    description:
      "Es un videojuego donde Agau, un robot viajero del tiempo, llega del año 2200 a enseñarnos a salvar el mundo de los residuos tecnológicos, a través de 4 estaciones con varias misiones podemos aprender qué hacer para reducir el impacto medioambiental de los residuos.",
    url: "http://tumlab.local:8083/",
  },
  {
    key: 10,
    thumbnail: "./img/simulators/SIMU_CARD.png",
    is_show: true,
    title: "./img/simulators/simu_title.png",
    cover: "./img/simulators/simu_image.png",
    description:
      "Interactive simulations in Physics, Chemistry, Science based on the PhET Interactive Simulations project at the University of Colorado at Boulder. These resources stem from extensive educational research and engage students through an intuitive, game-like environment where they learn by exploring while practicing English.",
    url: "http://tumlab.local:8087/phet_en_2023-01/A/index.html",
  }    
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
