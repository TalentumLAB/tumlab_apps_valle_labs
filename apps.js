//Aquí se editan o agregan las aplicaciones
const agregarAplicaciones = [
  {
    title: "Simuladores",
    url: "https://www.google.com",
    isActive: true, // Se manda "true" si se quiere mostrar, sino se manda "false"
    image: "/images/tumlab_simuladores.png", //Se envía la ruta de la imagen
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

//Acciones
const onClickApp = (data) => {
  const key = data.getAttribute("key");
  document.getElementById("logo").style.display = "none";
  document.body.style.background =
    "linear-gradient(0.84deg, #393939 0.89%, rgba(249, 243, 243, 0) 47.35%)";
  console.log("click", key);
  switch (key) {
    case "Wikipedia":
      document.getElementById("content").innerHTML = `
      <div class="container_content animate__animated animate__fadeIn animate__slow">
      <div class="container_left"> 
       <img src="/images/Wikipedia-Logo.png" alt="Wikipedia" />
      <p>Wikipedia es una página web para realizar consultas online de contenido abierto, una web que almacena, recopila y transmite información de manera totalmente estructurada. Cualquier persona registrada puede participar en esta particular enciclopedia y publicar información o artículos que puedan ayudar a otras personas a encontrar los datos o información que necesitan</h1>
      </div>
      <div class="container_right">
      <p>Hola</p>
      </div>
      </div>
      `;
      break;
    case "Simuladores":
      document.getElementById("content").innerHTML = `
      <h1>Simuladores</h1>
      `;
      break;
    case "Tumlab LMS":
      document.getElementById("content").innerHTML = `
      <h1>Tumlab LMS</h1>
      `;
    default:
      break;
  }
};
