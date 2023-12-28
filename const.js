export const infoSlider = [
  {
    smallTitile: "Bienvenido al",
    title: "Tumlab",
    content: `<p>¿Qué es el Tumlab? Es un dispositivo tecnológico multifuncional con la capacidad de brindar una red inalámbrica sin necesidad de internet. Esto permite soportar a múltiples usuarios de manera simultánea para el despliegue de aplicaciones y contenido multimedia. Además, es un equipo autónomo pues funciona con su propia batería externa disponible para alimentarlo cuando sea necesario</p>`,
    image: "assets/img/bg-poster.png",
    buttons: ["omit", "next"],
  },

  {
    title: "Funciones y capacidades",
    content: `
      <ol>
        <li>
          <strong>Conectividad sin límites:</strong> El Tumlab es independiente,
          ¡no necesita internet para brillar! Además, su banco de baterías asegura
          que esté siempre encendido y listo para usar, donde sea que estés.
        </li>
        <li>
          <strong>Experiencia eficiente:</strong> Nuestras aplicaciones están
          diseñadas con inteligencia. Esto significa que incluso los dispositivos
          más simples pueden disfrutar de funciones avanzadas. Tumlab optimiza los
          recursos para que tus aplicaciones funcionen sin problemas, sin importar
          el dispositivo que uses.
        </li>
        <li>
          <strong>Actualizaciones automáticas:</strong> Tumlab cuida de ti. Cuando
          encuentra internet, se asegura de que estés siempre al día. Actualiza
          tus aplicaciones automáticamente, las respalda y las guarda en la nube
          para que puedas disfrutar de lo último sin preocupaciones...
        </li>
    </ol>
      `,
    image: "assets/img/bg-poster-2.png",
    buttons: ["play"],
  },
];

export const headerMenulist = [
  { name: "Recursos Talentum" },
  { name: "Herramientas digitales" },
  { name: "Simuladores" },
  { name: "Infraestructura de datos" },
  { name: "Recursos educativos abiertos" },
];

export const menuConfigurations = [
  {
    id: "specifications",
    name: "Especificaciones",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00002 2H14C14.7334 2 15.3334 2.6 15.3334 3.33333L15.3267 11.3333C15.3267 12.0667 14.7334 12.6667 14 12.6667H10.6667V14H5.33335V12.6667H2.00002C1.26669 12.6667 0.666687 12.0667 0.666687 11.3333V3.33333C0.666687 2.6 1.26669 2 2.00002 2ZM2.00002 11.3333H14V3.33333H2.00002V11.3333Z" fill="#6B7280"/>
  </svg>`,
    content: `
  <div class="config-list-item">
  <h2>Especificaciones del dispositivo</h2>

  <h5>Sistema operativo</h5>
  <ul class="config-mini-list">
    <li>
      Versión:<strong> Ubuntu Server v20.04</strong> o posteriores
    </li>
  </ul>
  <h5>Versión de la interfaz:</h5>
  <ul class="config-mini-list">
    <li>Versión: 2.0.0</li>
  </ul>
  <h5>Hardware</h5>
  <ul class="config-mini-list">
    <li>Intel® Celeron® or 8th Generation Intel CoreTM i3 / i5 Processor
    </li>
    <li>Memoria Ram de 8GB, no actualizable</li>
    <li>M.2 SSD de 1TB</li>
    <li>HDMI (para modelos 8145UE) / DP (para otros)</li>
    <li>2x USB 3.2 Gen 2</li>
    <li>2x Ethernet (1x Ethernet para Celeron)</li>
    <li>Conector combinado de auriculares/micrófono (3,5 mm)</li>
  </ul>
  <h5>Batería:</h5>
  <ul class="config-mini-list">
    <li>Tipo: Batería externa recargable de litio</li>
    <li>
      Duración: Hasta 4 o 6 horas de funcionamiento dependiendo del
      uso
    </li>
  </ul>

  <p>
    Nota: Estas especificaciones están sujetas a cambios en otros
    dispositivos del tumlab para mejoras y actualizaciones del
    producto.
  </p>
</div>
  `,
  },
  {
    id: "license",
    name: "Licencia de software",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99996 8.66667C7.4444 8.66667 6.97218 8.47222 6.58329 8.08333C6.1944 7.69445 5.99996 7.22222 5.99996 6.66667C5.99996 6.11111 6.1944 5.63889 6.58329 5.25C6.97218 4.86111 7.4444 4.66667 7.99996 4.66667C8.55551 4.66667 9.02774 4.86111 9.41663 5.25C9.80551 5.63889 9.99996 6.11111 9.99996 6.66667C9.99996 7.22222 9.80551 7.69445 9.41663 8.08333C9.02774 8.47222 8.55551 8.66667 7.99996 8.66667ZM3.99996 15.3333V10.1833C3.57774 9.71667 3.24996 9.18333 3.01663 8.58333C2.78329 7.98333 2.66663 7.34445 2.66663 6.66667C2.66663 5.17778 3.18329 3.91667 4.21663 2.88333C5.24996 1.85 6.51107 1.33333 7.99996 1.33333C9.48885 1.33333 10.75 1.85 11.7833 2.88333C12.8166 3.91667 13.3333 5.17778 13.3333 6.66667C13.3333 7.34445 13.2166 7.98333 12.9833 8.58333C12.75 9.18333 12.4222 9.71667 12 10.1833V15.3333L7.99996 14L3.99996 15.3333ZM7.99996 10.6667C9.11107 10.6667 10.0555 10.2778 10.8333 9.5C11.6111 8.72222 12 7.77778 12 6.66667C12 5.55556 11.6111 4.61111 10.8333 3.83333C10.0555 3.05556 9.11107 2.66667 7.99996 2.66667C6.88885 2.66667 5.9444 3.05556 5.16663 3.83333C4.38885 4.61111 3.99996 5.55556 3.99996 6.66667C3.99996 7.77778 4.38885 8.72222 5.16663 9.5C5.9444 10.2778 6.88885 10.6667 7.99996 10.6667ZM5.33329 13.35L7.99996 12.6667L10.6666 13.35V11.2833C10.2777 11.5056 9.85829 11.6806 9.40829 11.8083C8.95829 11.9361 8.48885 12 7.99996 12C7.51107 12 7.04163 11.9361 6.59163 11.8083C6.14163 11.6806 5.72218 11.5056 5.33329 11.2833V13.35Z" fill="#6B7280"/>
    </svg>`,
    content: `
    <div class="config-list-item">
    <h2>Licencia de software</h2>
    <p>A continuación encontraras el numero serial de la licencia:</p>

    <div class="license-key">
      <span
        >"sync_server_license":
        "TLab-SyncServer1_0-CAJ-062023-HZERT18-01"</span
      >
      <p>Fecha de activación:<strong> 18 Ene. 2023</strong></p>
    </div>
  </div>
    `,
  },
  {
    id: "language",
    name: "Preferencias de idioma",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58002 10.0467L6.88669 8.37333L6.90669 8.35333C8.06669 7.06 8.89335 5.57333 9.38002 4H11.3334V2.66667H6.66669V1.33333H5.33335V2.66667H0.666687V3.99333H8.11335C7.66669 5.28 6.96002 6.5 6.00002 7.56667C5.38002 6.88 4.86669 6.12667 4.46002 5.33333H3.12669C3.61335 6.42 4.28002 7.44667 5.11335 8.37333L1.72002 11.72L2.66669 12.6667L6.00002 9.33333L8.07335 11.4067L8.58002 10.0467ZM12.3334 6.66667H11L8.00002 14.6667H9.33335L10.08 12.6667H13.2467L14 14.6667H15.3334L12.3334 6.66667ZM11.6667 8.44667L10.5867 11.3333H12.7467L11.6667 8.44667Z" fill="#6B7280"/>
  </svg>`,
    content: `<div class="config-list-item">
  <h2>Prerencias de idioma</h2>
  <p>
    Nota: Tienes la opción de ajustar el idioma de tu dispositivo
    según tus preferencias. Actualmente, solo ofrecemos los
    siguientes paquetes de idiomas para tu selección. Estamos
    trabajando constantemente para agregar más opciones en el
    futuro.
  </p>

  <div class="container-languages">
    <div class="lang-item">
      <small>Paquete de idioma</small>
      <input
        type="radio"
        name="lang"
        value="en"
        id="english"
        checked
      />
      <label for="english"> English (US) </label>
    </div>

    <div class="lang-item">
      <small>Paquete de idioma</small>
      <input type="radio" name="lang" value="es" id="spanish" />
      <label for="spanish"> Español (COL) </label>
    </div>
  </div>
</div>`,
  },
  {
    id: "help",
    name: "Ayuda y soporte",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 8C1.33331 4.32 4.31998 1.33334 7.99998 1.33334C11.68 1.33334 14.6666 4.32 14.6666 8C14.6666 11.68 11.68 14.6667 7.99998 14.6667C4.31998 14.6667 1.33331 11.68 1.33331 8ZM8.66665 10.6667V12H7.33331V10.6667H8.66665ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 8C2.66665 5.06 5.05998 2.66667 7.99998 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 7.99998 13.3333ZM5.33331 6.66667C5.33331 5.19334 6.52665 4 7.99998 4C9.47331 4 10.6666 5.19334 10.6666 6.66667C10.6666 7.52195 10.14 7.98222 9.62715 8.43036C9.14066 8.85551 8.66665 9.26975 8.66665 10H7.33331C7.33331 8.78582 7.96139 8.3044 8.51361 7.88112C8.9468 7.54907 9.33331 7.25281 9.33331 6.66667C9.33331 5.93334 8.73331 5.33334 7.99998 5.33334C7.26665 5.33334 6.66665 5.93334 6.66665 6.66667H5.33331Z" fill="#6B7280"/>
  </svg>`,
    content: `
    <div class="config-list-item">
          <h2>Ayuda y soporte</h2>
              <p>
                Si encuentras alguna dificultad o necesitas asistencia, nuestro
                equipo de soporte técnico está aquí para ayudarte. Escríbenos al
                siguiente correo:
              </p>
              <h4>support@tumlab.com</h4>
    </div>
  `,
  },
];

export const apps = [
  {
    category_name: "Recursos Talentum",
    children: [
      {
        thumbnail: "./assets/recursos-talentum/tumlab_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-tumlab.mp4",
        title: "Tumlab: Sistema de información",
        description:
          "En el Sistema de Información Tumlab la simplicidad se combina con la robustez para ofrecerte una experiencia educativa sin límites. Aquí encontrarás herramientas intuitivas, seguridad incomparable y continuas actualizaciones. Con Tumlab, tu viaje educativo está a punto de alcanzar nuevas alturas. ¡Explora, aprende y crece con confianza!",
        url: "http://tumlab.local:3000",
      },
      {
        thumbnail: "./assets/recursos-talentum/lms_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-lms.mp4",
        title: "Tumlab: LMS",
        description:
          "Es una plataforma diseñada para proporcionarle a educadores, administradores y estudiantes un sistema integrado robusto y seguro para crear ambientes de aprendizaje personalizados. Su interfaz de fácil acceso, recursos documentados y actualizaciones hacen del Tumlab LMS un dispositivo ideal para potenciar todo tipo de procesos educativos.",
        url: "http://tumlab.local:5000",
      },
      {
        thumbnail: "./assets/recursos-talentum/patia_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-patia.mp4",
        title: "Aulas STEAM: Patía",
        description:
          "Descubre un mundo en el que la ciencia, la tecnología, la ingeniería, las artes y las matemáticas se fusionan en un emocionante entorno educativo: las aulas STEAM. Este innovador enfoque integra conocimientos técnicos con expresión creativa, cultivando el pensamiento crítico, y la resolución de problemas.",
        url: "http://tumlab.local:5000",
      },
      {
        thumbnail: "./assets/recursos-talentum/steam-valle_thumbnail.png",
        video:
          "./assets/recursos-talentum/videos/recursos-talentum-steam-valle.mp4",
        title: "Aulas STEAM: Valle",
        description:
          "Descubre un mundo en el que la ciencia, la tecnología, la ingeniería, las artes y las matemáticas se fusionan en un emocionante entorno educativo: las aulas STEAM. Este innovador enfoque integra conocimientos técnicos con expresión creativa, cultivando el pensamiento crítico, y la resolución de problemas.",
        url: "http://tumlab.local:5000",
      },
    ],
  },

  {
    category_name: "Herramientas digitales",
    children: [
      {
        thumbnail: "./assets/herramientas-digitales/universum_thumbnail.png",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-universum.mp4",
        title: "Universum",
        description:
          "Universum es un sistema interactivo en 3D, se compone de un espacio virtual en el cual por medio de un avatar es posible recorrer diferentes entornos digitales, los cuales complementan la experiencia educativa y permiten la autogestión del conocimiento. Para esto se hace uso de las tecnologías y pedagogías emergentes con el fin de beneficiar a la comunidad educativa. ",
        url: "http://tumlab.local:5000",
      },
      {
        thumbnail: "./assets/herramientas-digitales/agau_thumbnail.png",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-agau.mp4",
        title: "AGAU: El protector  del tiempo",
        description:
          "Aprende los fundamentos esenciales de gestión de residuos tecnológicos para salvaguardar y mejorar el medio ambiente y la salud de las personas.",
        url: "http://tumlab.local:8083/",
      },
    ],
  },
  {
    category_name: "Simuladores",
    children: [
      {
        thumbnail: "./assets/simuladores/simulators-spanish_thumbnail.png",
        video: "./assets/simuladores/videos/simulators-spanish.mov",
        title: "Simuladores: Español",
        description:
          "Realiza simulaciones interactivas de Física, Química y Ciencias basada en el proyecto PhET de la Universidad de Colorado, en Boulder. Estos recursos están respaldados por una investigación educativa extensiva e involucran a los estudiantes a través de un entorno intuitivo y lúdico, en el que aprenden explorando y descubriendo.",
        url: "http://tumlab.local:8087/phet_es_2022-12/A/index.html",
      },
      {
        thumbnail: "./assets/simuladores/simulators-english_thumbnail.png",
        video: "./assets/simuladores/videos/simulators-english.mov",
        title: "Simulators: English",
        description:
          "Interactive simulations in Physics, Chemistry, and Science based on the PhET interactive simulations project from the University of Colorado, in Boulder. These resources stem from extensive educational research and engage students through an intuitive, game-like environment, where they learn by exploring and discovering.",
        url: "http://tumlab.local:8087/phet_en_2023-01/A/index.html",
      },
    ],
  },
  {
    category_name: "Infraestructura de datos",
    children: [
      {
        thumbnail: "./assets/infraestructura-datos/superset_thumbnail.png",
        video:
          "./assets/infraestructura-datos/videos/infraestructura-datos-apache-superset.mp4",
        title: "Apache Superset",
        description:
          "Superset es rápido, ligero intuitivo y ofrece una amplia gama de opciones que permiten a los usuarios de todos los niveles explorar y visualizar sus datos, Desde simples gráficos de líneas hasta gráficos geoespaciales altamente detallados., Superset te proporciona las herramientas que necesitas.",
        url: "http://tumlab.local:8088",
      },
    ],
  },

  {
    category_name: "Recursos educativos abiertos",
    children: [
      {
        thumbnail: "./assets/recursos-educativos/wikipedia_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-wikipedia.mp4",
        title: "Wikipedia: Enciclopedia libre",
        description:
          "Wikipedia es una enciclopedia libre, políglota y editada de manera colaborativa., con más de 6.7 millones de artículos de consulta en inglés y otros idiomas. Es gestionada por la Fundación Wikimedia, una organización sin ánimo de lucro que se financia a través de donaciones.",
        url: "http://tumlab.local:8087/wikipedia_es_all_nopic_2022-10/A/Wikipedia:Offline",
      },

      {
        thumbnail: "./assets/recursos-educativos/mediacms_thumbnail.png",
        bg: "./assets/recursos-educativos/mediacms_bg.png",
        title: "MediaCMS",
        description:
          "Un sistema de gestión de contenidos que permite ver y compartir medios, desarrollado para satisfacer las necesidades de las plataformas web modernas.",
        url: "http://tumlab.local:8082",
      },
      {
        thumbnail: "./assets/recursos-educativos/open-street-map_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-open-street-map.mp4",
        title: "OpenStreetMap",
        description:
          "OpenStreetMap es un proyecto colaborativo para crear mapas editables y libres. En lugar del mapa en sí, los datos generados por el proyecto se consideran su salida principal. Los mapas se crean utilizando información geográfica capturada con dispositivos GPS móviles, ortofotografías y otras fuentes libres.",
        url: "http://tumlab.local:8081",
      },
      {
        thumbnail: "./assets/recursos-educativos/scratch_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-scratch.mp4",
        title: "Scratch",
        description:
          "Descubre Scratch: la mayor comunidad de programación para niños y niñas, desarrollado por la Fundación Scratch.  Este lenguaje sencillo les permite crear historias digitales, juegos y animaciones, además de fomentar el pensamiento computacional, la creatividad, la resolución de problemas y la igualdad en informática. ¡Inspira a tus hijos a explorar el mundo digital de forma creativa y colaborativa con Scratch!",
        url: "http://192.168.4.1:8086",
      },
    ],
  },
];
