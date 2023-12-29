export const infoSlider = [
  {
    smallTitile: "Welcome to",
    title: "Tumlab",
    content: `<p>What is Tumlab? It is a multifunctional technological device with the ability to
    provide a wireless network without internet. This allows supporting multiple
    users simultaneously for the deployment of applications and multimedia
    content. Additionally, it is a self-contained unit as it operates with its own
    external battery available to power it when needed.</p>`,
    image: "assets/img/bg-poster.png",
    buttons: ["omit", "next"],
  },

  {
    title: "Functions and Capabilities",
    content: `
      <ol>
        <li>
          <strong>Boundless connectivity:</strong> Tumlab is independent, it doesn't need the internet
          to shine! Additionally, its battery bank ensures that it&#39;s always on and ready to
          use, wherever you are.
        </li>
        <li>
          <strong>Efficient experience:</strong> Our applications are intelligently designed. This
          means even the simplest devices can enjoy advanced features. Tumlab
          optimizes resources so that your applications run smoothly, regardless of the
          device you use.
        </li>
        <li>
          <strong>Automatic updates:</strong> Tumlab takes care of you. When it finds the internet, it
          ensures you&#39;re always up to date. It automatically updates your applications,
          backs them up, and stores them in the cloud so you can enjoy the latest
          without worries.
        </li>
    </ol>
      `,
    image: "assets/img/bg-poster-2.png",
    buttons: ["play"],
  },
];

export const menuConfigurations = [
  {
    id: "specifications",
    name: "Specifications",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00002 2H14C14.7334 2 15.3334 2.6 15.3334 3.33333L15.3267 11.3333C15.3267 12.0667 14.7334 12.6667 14 12.6667H10.6667V14H5.33335V12.6667H2.00002C1.26669 12.6667 0.666687 12.0667 0.666687 11.3333V3.33333C0.666687 2.6 1.26669 2 2.00002 2ZM2.00002 11.3333H14V3.33333H2.00002V11.3333Z" fill="#6B7280"/>
  </svg>`,
    content: `
  <div class="config-list-item">
  <h2>Device Specifications</h2>

  <h5>Operating system</h5>
  <ul class="config-mini-list">
    <li>
      Version:<strong> Ubuntu Server v20.04</strong> or later
    </li>
  </ul>
  <h5>Interface version:</h5>
  <ul class="config-mini-list">
    <li>Version: 2.0.0</li>
  </ul>
  <h5>Hardware</h5>
  <ul class="config-mini-list">
    <li>Intel® Celeron® or 8th Generation Intel CoreTM i3/i5 Processor
    </li>
    <li>8GB RAM (non-upgradable)</li>
    <li>1TB M.2 SSD</li>
    <li>HDMI (for 8145UE models) / DP (for others)</li>
    <li>2x USB 3.2 Gen 2</li>
    <li>2x Ethernet (1x Ethernet for Celeron)</li>
    <li>Combined headphone/microphone jack (3.5mm)</li>
  </ul>
  <h5>Battery:</h5>
  <ul class="config-mini-list">
    <li>Type: Rechargeable lithium external battery</li>
    <li>
    Duration: Up to 4 or 6 hours of operation depending on usage
    </li>
  </ul>

  <p>
  Note: These specifications are subject to changes in other Tumlab devices for
  product improvements and updates.
  </p>
</div>
  `,
  },
  {
    id: "license",
    name: "Software License",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99996 8.66667C7.4444 8.66667 6.97218 8.47222 6.58329 8.08333C6.1944 7.69445 5.99996 7.22222 5.99996 6.66667C5.99996 6.11111 6.1944 5.63889 6.58329 5.25C6.97218 4.86111 7.4444 4.66667 7.99996 4.66667C8.55551 4.66667 9.02774 4.86111 9.41663 5.25C9.80551 5.63889 9.99996 6.11111 9.99996 6.66667C9.99996 7.22222 9.80551 7.69445 9.41663 8.08333C9.02774 8.47222 8.55551 8.66667 7.99996 8.66667ZM3.99996 15.3333V10.1833C3.57774 9.71667 3.24996 9.18333 3.01663 8.58333C2.78329 7.98333 2.66663 7.34445 2.66663 6.66667C2.66663 5.17778 3.18329 3.91667 4.21663 2.88333C5.24996 1.85 6.51107 1.33333 7.99996 1.33333C9.48885 1.33333 10.75 1.85 11.7833 2.88333C12.8166 3.91667 13.3333 5.17778 13.3333 6.66667C13.3333 7.34445 13.2166 7.98333 12.9833 8.58333C12.75 9.18333 12.4222 9.71667 12 10.1833V15.3333L7.99996 14L3.99996 15.3333ZM7.99996 10.6667C9.11107 10.6667 10.0555 10.2778 10.8333 9.5C11.6111 8.72222 12 7.77778 12 6.66667C12 5.55556 11.6111 4.61111 10.8333 3.83333C10.0555 3.05556 9.11107 2.66667 7.99996 2.66667C6.88885 2.66667 5.9444 3.05556 5.16663 3.83333C4.38885 4.61111 3.99996 5.55556 3.99996 6.66667C3.99996 7.77778 4.38885 8.72222 5.16663 9.5C5.9444 10.2778 6.88885 10.6667 7.99996 10.6667ZM5.33329 13.35L7.99996 12.6667L10.6666 13.35V11.2833C10.2777 11.5056 9.85829 11.6806 9.40829 11.8083C8.95829 11.9361 8.48885 12 7.99996 12C7.51107 12 7.04163 11.9361 6.59163 11.8083C6.14163 11.6806 5.72218 11.5056 5.33329 11.2833V13.35Z" fill="#6B7280"/>
    </svg>`,
    content: `
    <div class="config-list-item">
    <h2>Software License</h2>
    <p>Below, you will find the serial number for the license:</p>

    <div class="license-key">
      <span
        >"sync_server_license":
        "TLab-SyncServer1_0-CAJ-062023-HZERT18-01"</span
      >
      <p>Activation date: <strong>Jan 18, 2023</strong></p>
    </div>
  </div>
    `,
  },
  /* {
    id: "language",
    name: "Preferencias de idioma",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58002 10.0467L6.88669 8.37333L6.90669 8.35333C8.06669 7.06 8.89335 5.57333 9.38002 4H11.3334V2.66667H6.66669V1.33333H5.33335V2.66667H0.666687V3.99333H8.11335C7.66669 5.28 6.96002 6.5 6.00002 7.56667C5.38002 6.88 4.86669 6.12667 4.46002 5.33333H3.12669C3.61335 6.42 4.28002 7.44667 5.11335 8.37333L1.72002 11.72L2.66669 12.6667L6.00002 9.33333L8.07335 11.4067L8.58002 10.0467ZM12.3334 6.66667H11L8.00002 14.6667H9.33335L10.08 12.6667H13.2467L14 14.6667H15.3334L12.3334 6.66667ZM11.6667 8.44667L10.5867 11.3333H12.7467L11.6667 8.44667Z" fill="#6B7280"/>
  </svg>`,
    content: `<div class="config-list-item">
  <h2>Preferencias de idioma</h2>
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
  }, */
  {
    id: "help",
    name: "Help and Support",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 8C1.33331 4.32 4.31998 1.33334 7.99998 1.33334C11.68 1.33334 14.6666 4.32 14.6666 8C14.6666 11.68 11.68 14.6667 7.99998 14.6667C4.31998 14.6667 1.33331 11.68 1.33331 8ZM8.66665 10.6667V12H7.33331V10.6667H8.66665ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 8C2.66665 5.06 5.05998 2.66667 7.99998 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 7.99998 13.3333ZM5.33331 6.66667C5.33331 5.19334 6.52665 4 7.99998 4C9.47331 4 10.6666 5.19334 10.6666 6.66667C10.6666 7.52195 10.14 7.98222 9.62715 8.43036C9.14066 8.85551 8.66665 9.26975 8.66665 10H7.33331C7.33331 8.78582 7.96139 8.3044 8.51361 7.88112C8.9468 7.54907 9.33331 7.25281 9.33331 6.66667C9.33331 5.93334 8.73331 5.33334 7.99998 5.33334C7.26665 5.33334 6.66665 5.93334 6.66665 6.66667H5.33331Z" fill="#6B7280"/>
  </svg>`,
    content: `
    <div class="config-list-item">
          <h2>Help and Support</h2>
              <p>
              If you have any difficulties or need assistance, our technical support team is
              here to help. Please reach out to us at the following email address:
              </p>
              <h4>support@tumlab.com</h4>
    </div>
  `,
  },
];

export const headerMenulist = [
  { name: "Talentum Resources", is_enable: true },
  { name: "Digital Tools", is_enable: true },
  { name: "Simulators", is_enable: true },
  { name: "Data Infrastructure", is_enable: true },
  { name: "Open Educational Resources", is_enable: true },
];

export const apps = [
  {
    category_name: "Talentum Resources",
    children: [
      {
        order: 1,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/tumlab_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-tumlab.mp4",
        title: "Tumlab: Information System",
        description:
          "In the Tumlab Information System, simplicity combines with robustness to offer you an educational experience without limits. Here, you'll find intuitive tools, unparalleled security, and continuous updates. With Tumlab, your educational journey is about to reach new heights. Explore, learn, and grow with confidence!",
        url: "http://tumlab.local:3000",
      },
      {
        order: 2,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/lms_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-lms.mp4",
        title: "Tumlab: LMS (Learning Management System)",
        description:
          "It is a platform designed to provide educators, administrators, and students with a robust and secure integrated system for creating personalized learning environments. Its easily accessible interface, documented resources, and updates make the Tumlab LMS an ideal tool to enhance all types of educational processes.",
        url: "http://tumlab.local:5000",
      },
      {
        order: 3,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/patia_thumbnail.png",
        video: "./assets/recursos-talentum/videos/recursos-talentum-patia.mp4",
        title: "STEAM Classrooms: Patía",
        description:
          "Discover a world where science, technology, engineering, arts, and mathematics merge in an exciting educational environment: STEAM Classrooms. This innovative approach integrates technical knowledge with creative expression, cultivating critical thinking and problem-solving.",
        url: "http://tumlab.local:5000",
      },
      {
        order: 4,
        is_show: true,
        thumbnail: "./assets/recursos-talentum/steam-valle_thumbnail.png",
        video:
          "./assets/recursos-talentum/videos/recursos-talentum-steam-valle.mp4",
        title: "STEAM Classrooms: Valle",
        description:
          "Discover a world where science, technology, engineering, arts, and mathematics merge in an exciting educational environment: STEAM Classrooms. This innovative approach integrates technical knowledge with creative expression, cultivating critical thinking and problem-solving.",
        url: "http://tumlab.local:5000",
      },
    ],
  },

  {
    category_name: "Digital Tools",
    children: [
      {
        order: 1,
        is_show: true,
        thumbnail: "./assets/herramientas-digitales/universum_thumbnail.png",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-universum.mp4",
        title: "Universum",
        description:
          "Universum is an interactive 3D system consisting of a virtual space where, through an avatar, it&#39;s possible to explore different digital environments. These environments complement the educational experience and enable self-management of knowledge. The use of emerging technologies and pedagogies is employed to benefit the educational community.",
        url: "http://tumlab.local:5000",
      },
      {
        order: 2,
        is_show: true,
        thumbnail: "./assets/herramientas-digitales/agau_thumbnail.png",
        video:
          "./assets/herramientas-digitales/videos/herramientas-digitales-agau.mp4",
        title: "AGAU: The Time Guardian",
        description:
          "Learn the essential fundamentals of managing technological waste to safeguard and improve the environment and people's health.",
        url: "http://tumlab.local:8083/",
      },
    ],
  },
  {
    category_name: "Simulators",
    children: [
      {
        order: 2,
        is_show: false,
        thumbnail: "./assets/simuladores/simulators-spanish_thumbnail.png",
        video: "./assets/simuladores/videos/simulators-spanish.mov",
        title: "Simuladores: Español",
        description:
          "Realiza simulaciones interactivas de Física, Química y Ciencias basada en el proyecto PhET de la Universidad de Colorado, en Boulder. Estos recursos están respaldados por una investigación educativa extensiva e involucran a los estudiantes a través de un entorno intuitivo y lúdico, en el que aprenden explorando y descubriendo.",
        url: "http://tumlab.local:8087/phet_es_2022-12/A/index.html",
      },
      {
        order: 1,
        is_show: true,
        thumbnail: "./assets/simuladores/simulators-english_thumbnail.png",
        video: "./assets/simuladores/videos/simulators-english.mov",
        title: "Simulators",
        description:
          "Conduct interactive simulations in physics, chemistry, and sciences based on the PhET project from the University of Colorado, Boulder. These resources are supported by extensive educational research and engage students through an intuitive and playful environment, where they learn by exploring and discovering.",
        url: "http://tumlab.local:8087/phet_en_2023-01/A/index.html",
      },
    ],
  },
  {
    category_name: "Data Infrastructure",
    children: [
      {
        order: 1,
        is_show: true,
        thumbnail: "./assets/infraestructura-datos/superset_thumbnail.png",
        video:
          "./assets/infraestructura-datos/videos/infraestructura-datos-apache-superset.mp4",
        title: "Apache Superset",
        description:
          "Superset is fast, lightweight, intuitive, and offers a wide range of options that allow users of all levels to explore and visualize their data. From simple line charts to highly detailed geospatial graphs, Superset provides you with the tools you need.",
        url: "http://tumlab.local:8088",
      },
    ],
  },

  {
    category_name: "Open Educational Resources",
    children: [
      {
        order: 1,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/wikipedia_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-wikipedia.mp4",
        title: "Wikipedia: Free encyclopedia",
        description:
          "Wikipedia is a free, multilingual, collaboratively edited encyclopedia with over 6.7 million reference articles in English and other languages. It is managed by the Wikimedia Foundation, a non-profit organization funded through donations.",
        url: "http://tumlab.local:8087/wikipedia_es_all_nopic_2022-10/A/Wikipedia:Offline",
      },

      {
        order: 2,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/mediacms_thumbnail.png",
        bg: "./assets/recursos-educativos/mediacms_bg.png",
        title: "Media CMS",
        description:
          "A content management system that allows viewing and sharing media. It is developed to meet the needs of the most modern web platforms.",
        url: "http://tumlab.local:8082",
      },
      {
        order: 3,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/open-street-map_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-open-street-map.mp4",
        title: "OpenStreetMap",
        description:
          "OpenStreetMap is a collaborative project to create editable and free maps, generated from geographic information captured with mobile GPS devices, orthophotos, and other free sources.",
        url: "http://tumlab.local:8081",
      },
      {
        order: 4,
        is_show: true,
        thumbnail: "./assets/recursos-educativos/scratch_thumbnail.png",
        video:
          "./assets/recursos-educativos/videos/recursos-educativos-scratch.mp4",
        title: "Scratch",
        description:
          "The largest programming community for children developed by the Scratch Foundation. Its simple language allows them to create digital stories, games, and animations, while fostering computational thinking, creativity, problem-solving, and equality. Discover Scratch and inspire your children to explore the digital world!",
        url: "http://192.168.4.1:8086",
      },
    ],
  },
];
