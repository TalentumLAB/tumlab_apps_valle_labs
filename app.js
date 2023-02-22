//Arreglo de las aplicaciones
const addApps = [
  {
    category_name: 'Plataformas LMS',
    enable: false,
    children: [
      {
        order: 1,
        thumbnail: "./img/tumlab/tumlab_thumbnail.png",
        is_show: true,
        title: "./img/tumlab/tumlab_title.png",
        cover: "./img/tumlab/tumlab_cover.png",
        description:
          "TUMLAB LMS es una plataforma de aprendizaje diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado único, robusto y seguro para crear ambientes de aprendizaje personalizados. Una interfaz simple, recursos bien documentados, junto con mejoras continuas, hacen a Moodle fácil de aprender y usar.",
        url: "http://tumlab.local:5000",
      },
      {
        order: 2,
        thumbnail: "./img/sistema_de_informacion/sistema_de_informacion.svg",
        is_show: true,
        title: "./img/sistema_de_informacion/sistema_de_informacion_title.svg",
        cover: "./img/sistema_de_informacion/sistema_de_informacion_cover.png",
        description:
          "El sistema de información es una de herramienta para reportes de la plataforma de contenido pedagogico que permite visualizar indicadores, desplegar gráficas y generar reportes sobre la información del estado y avance de los usuarios en las actividades elaboradas en los diferentes cursos de la plataforma.",
        url: "http://tumlab.local:3000",
      },
    ]
  },
  {
    category_name: 'Temas lúdicos',
    enable: true,
    children: [
      {
        order: 1,
        thumbnail: "./img/scratch/scratch_thumbnail.png",
        is_show: true,
        title: "./img/scratch/scratch_title.png",
        cover: "./img/scratch/scratch_cover.png",
        description:
          "Scratch es la comunidad de programación para niños y niñas más grande del mundo, y un lenguaje de programación con una interfaz sencilla que permite a los jóvenes crear historias digitales, juegos y animaciones. Scratch está diseñado, desarrollado y moderado por la Fundación Scratch, una organización sin ánimo de lucro. Scratch promueve el pensamiento computacional y las habilidades en resolución de problemas; enseñanza y aprendizaje creativos, auto expresión y colaboración; e igualdad en informática.",
        url: "http://192.168.4.1:8086",
      },
      {
        order: 2,
        thumbnail: "./img/residuos/AGAU_CARD.png",
        is_show: true,
        title: "./img/residuos/AGAU_TITLE.png",
        cover: "./img/residuos/AGAU_IMAGE.png",
        description:
          "Es un videojuego donde Agau, un robot viajero del tiempo, llega del año 2200 a enseñarnos a salvar el mundo de los residuos tecnológicos, a través de 4 estaciones con varias misiones podemos aprender qué hacer para reducir el impacto medioambiental de los residuos.",
        url: "http://tumlab.local:8083/",
      },
    ],
  },
  {
    category_name: 'Simuladores',
    enable: true,
    children: [
      {
        order: 1,
        thumbnail: "./img/simuladores/simuladores_thumbnail.png",
        is_show: true,
        title: "./img/simuladores/simuladores_title.png",
        cover: "./img/simuladores/simuladores_cover.png",
        description:
          "Simulaciones interactivas en Física, Química, Ciencias basada en el proyecto de simulaciones interactivas de PhET de la Universidad de Colorado en Boulder. Estos recursos nacen de la investigación educativa extensiva e involucran a los estudiantes mediante un ambiente intuitivo y similar a un juego, en donde aprenden explorando y descubren.",
        url: "http://tumlab.local:8087/phet_es_2022-12/A/index.html",
      },
      {
        order: 2,
        thumbnail: "./img/simulators/SIMU_CARD.png",
        is_show: true,
        title: "./img/simulators/simu_title.png",
        cover: "./img/simulators/simu_image.png",
        description:
          "Interactive simulations in Physics, Chemistry, Science based on the PhET Interactive Simulations project at the University of Colorado at Boulder. These resources stem from extensive educational research and engage students through an intuitive, game-like environment where they learn by exploring while practicing English.",
        url: "http://tumlab.local:8087/phet_en_2023-01/A/index.html",
      }
    ],
  },
  {
    category_name: 'Inteligencia de negocios',
    enable: true,
    children: [
      {
        order: 1,
        thumbnail: "./img/superset/superset_thumbnail.png",
        is_show: true,
        title: "./img/superset/superset_title.png",
        cover: "./img/superset/superset_cover.png",
        description:
          "Superset es rápido, liviano, intuitivo y está cargado de opciones que facilitan a los usuarios de todos los conjuntos de habilidades explorar y visualizar sus datos, desde simples gráficos de líneas hasta gráficos geoespaciales altamente detallados.",
        url: "http://tumlab.local:8088",
      },
    ],
  },
  {
    category_name: 'Contenido informativo',
    enable: true,
    children: [
      {
        order: 1,
        thumbnail: "./img/wiki/wiki_thumbnail.png",
        is_show: true,
        title: "./img/wiki/wiki_title.png",
        cover: "./img/wiki/wiki_cover.png",
        description:
          "Wikipedia es una página web para realizar consultas online de contenido abierto, una web que almacena, recopila y transmite información de manera totalmente estructurada.",
        url: "http://tumlab.local:8087/wikipedia_es_all_nopic_2022-10/A/Wikipedia:Offline",
      },
      {
        order: 2,
        thumbnail: "./img/mediacms/card_mediacms.png",
        is_show: true,
        title: "./img/mediacms/title_mediacms.svg",
        cover: "./img/mediacms/cover_mediacms.svg",
        description:
          "Sistema de gestión de contenido desarrollado para ver y compartir medios audiovisuales pedagógicos enfocados en las áreas de Álgebra, Física, Geometría y Matemáticas.",
        url: "http://tumlab.local:8082",
      },
      {
        order: 3,
        thumbnail: "./img/openstreetmap/open_street_maps.png",
        is_show: true,
        title: "./img/openstreetmap/title_openstreetmap.svg",
        cover: "./img/openstreetmap/cover_openstreetmap.svg",
        description:
          "Plataforma para visualizacion de mapas con diversas funcionalidades como: busqueda de lugares, navegacion interactiva con el mapamundi, entre otras. Adicionalmente permite ver información sobre las vías de las ciudades más importantes.",
        url: "http://tumlab.local:8081",
      },
    ],
  },
];

const swipers = {};

//Muestra las aplicaciones activas en la pagina de inicio.
const showApps = () => {
  let htmlApps = '';
  const filteredCategories = addApps.filter(c => c.enable);

  let catKey = 0;
  for (const cat of filteredCategories) {
    htmlApps += `<div class="cat-container" id="cat-container-${catKey}">
      <h3 class="category-title">${cat.category_name}</h3>
        <div class="swiper mb-3" id="swiper-${catKey}">
        <div class="swiper-button-next"></div>
        <div class="swiper-wrapper">`;

    const filteredApps = cat.children.filter((a) => a.is_show);
    const orderedApps = filteredApps.sort((a, b) => a.order > b.order ? 1 : a.order < b.order ? -1 : 0);

    let appKey = 0;
    for (const app of orderedApps) {
      htmlApps += `
      <div id="card-app-${catKey}-${appKey}" class="swiper-slide cursor-pointer d-flex card-app shadow-sm" onclick="showAppDetails('${catKey}-${appKey}')">
        <div class="bg-white w-100 p-3 rounded-4 d-inline-flex justify-content-center">
          <img src="${app.thumbnail}" class="img-fluid card-img d-inline-block" alt="${app.title}" />
        </div>
      </div>
      `;
      appKey++;
    }
    
    swipers[`${catKey}`] = null;
    htmlApps += '</div></div></div>';
    catKey++;
  }

  const appContainer = document.getElementById("row-cards");
  appContainer.innerHTML += htmlApps;

  for (const key in swipers) {
    swipers[key] = new Swiper(`#swiper-${key}`, {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1.1,
      navigation: {
        nextEl: '.swiper-button-next',
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.1
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2.1,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4.1,
        }
      }
    });
  }
};

const refresh = () => {
  const cardApps = document.getElementsByClassName('card-app');
  const categoryContainers = document.getElementsByClassName('cat-container');
  const rowsHome = document.getElementsByClassName('row-info-home');
  const rowsApp = document.getElementsByClassName('row-info-apps');

  for (let rowHome of rowsHome) {
    rowHome.classList.remove('d-none');
  }
  for (let rowApp of rowsApp) {
    rowApp.classList.add('d-none');
  }
  for (let catContent of categoryContainers) {
    catContent.classList.remove('d-none');
  }
  for (let cardApp of cardApps) {
    cardApp.classList.remove('selected');
  }

  document.body.classList.remove('bg-light');
};

//Mostrar detalles de la aplicación
const showAppDetails = (key) => {
  const [catKey, appKey] = key.split('-');
  const appContainer = document.getElementById("row-info");

  const filteredCategories = addApps.filter(c => c.enable);

  const orderedApps = filteredCategories[catKey].children.sort((a, b) => a.order > b.order ? 1 : a.order < b.order ? -1 : 0);
  const appInfo = orderedApps[appKey];

  const categoryContainers = document.getElementsByClassName('cat-container');
  const selectedCategoryContainer = document.getElementById(`cat-container-${catKey}`);

  const cardApps = document.getElementsByClassName('card-app');
  const selectedCardApp = document.getElementById(`card-app-${key}`);

  const rowsHome = document.getElementsByClassName('row-info-home');
  const rowsApp = document.getElementsByClassName('row-info-apps');

  for (let rowHome of rowsHome) {
    rowHome.classList.add('d-none');
  }
  for (let rowApp of rowsApp) {
    rowApp.classList.remove('d-none');
  }
  for (let catContent of categoryContainers) {
    catContent.classList.add('d-none');
  }
  for (let cardApp of cardApps) {
    cardApp.classList.remove('selected');
  }

  selectedCategoryContainer.classList.remove('d-none');
  selectedCardApp.classList.add('selected');

  if (appInfo) {
    appContainer.innerHTML = `
      <div class="col-12 col-sm-7 order-2 order-sm-1 col-left mt-4">
        <svg
          class="cursor-pointer"
          id="arrow"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onclick="refresh()"
        >
          <path
            d="M10.875 19.125L4.125 12.375L10.875 5.625M19.875 12.375L4.125 12.375"
            stroke="#0C5EAA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="animate__animated animate__fadeIn animate__slow mb-4"> 
          <img src="${appInfo.title}" class="img-fluid" alt="" />
        </div>

        <p class="text-black animate__animated animate__fadeIn animate__slow" style="font-size: 18px">
          ${appInfo.description}
        </p>
        
        <a class="btn btn-primary px-5 animate__animated animate__fadeIn animate__slow mt-4" href="${appInfo.url}" target="_blank">Iniciar <img class="img-fluid d-inline-block align-baseline" src="/img/arrow_btn.svg"></a>
      </div>
      <div class="col-12 col-sm-5 order-1 order-sm-2 position-relative">
        <img src=${appInfo.cover} alt="" class="img-fluid animate__animated animate__backInDown animate__fast" />
      </div>`;

    document.body.classList.add('bg-light');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  showApps();
});
