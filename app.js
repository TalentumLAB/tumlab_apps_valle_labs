import {
  infoSlider,
  headerMenulist,
  menuConfigurations,
  apps,
  LANGUAGE,
  DEFAULT_LANGUAGE,
  ACTIVATION_DATE,
  getLicense,
  getSpecifications,
} from "./const.js";
import { renderSlider } from "./components/slider.js";
import { textChangeLanguage } from "./locales/index.js";

const { slider, modal, configurations } = textChangeLanguage();

const SHOW_INTRO = true;

const intro = document.querySelector(".intro");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".logo");
const mainContainer = document.querySelector(".main-container");

const menuList = document.querySelector(".menu-list");
const listMobile = document.querySelector(".list-mobile");

const checkbox = document.querySelector("#menuToggle input[type='checkbox']");
const overlay = document.querySelector(".overlay");
const modalConfig = document.querySelector(".modal-config");

const restartButtons = document.querySelectorAll(".btn-restart");
const btnConfig = document.querySelectorAll(".btn-config");

const configListTabDesktop = document.querySelector(".config-list-tab-desktop");
const configListTabMobile = document.querySelector(".config-list-tab-mobile");
const configListContent = document.querySelector(".config-list-content");

const modalTitle = document.querySelector(".modal-title");
const btnConfigurationMobile = document.querySelector(
  ".btn-configurations-mobile .btn-icon-mobile [data-section='configurations'][data-value='title']"
);

let textsToChange = "";

modalTitle.innerHTML = modal.title;
btnConfigurationMobile.innerHTML = modal.title;

function changeLanguage(language) {
  const texts = textChangeLanguage(language);

  for (const textChange of textsToChange) {
    const section = textChange.dataset.section;
    const value = textChange.dataset.value;

    textChange.innerHTML = texts[section][value];
  }

  location.reload();
}

const visibleCategory = headerMenulist.filter(
  (header) => header.is_enable !== false
);

/* Send to home */
logo.addEventListener("click", navigateToHome);

function navigateToHome() {
  modalConfig.open = false;

  renderContent(visibleCategory[0].name);

  const firstItem = menuList.querySelector("li:first-child");

  const items = menuList.querySelectorAll("li");
  items.forEach((item) => item.classList.remove("active"));

  firstItem.classList.add("active");
}

/* Close menu mobile  */
document.addEventListener("click", closeMenuMobile);

function closeMenuMobile(event) {
  const menu = document.querySelector("#menuToggle");
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideMenu) {
    checkbox.checked = false;
    overlay.classList.remove("open");
  }
}

checkbox.addEventListener("change", function () {
  overlay.classList.toggle("open");
});

function toggleCheckbox() {
  checkbox.checked = !checkbox.checked;
}

function toggleModal() {
  modalConfig.open = !modalConfig.open;
}

function toggleOverlay() {
  if (overlay.classList.contains("open")) {
    overlay.classList.remove("open");
  } else {
    overlay.classList.add("open");
  }
}

function restartSlider() {
  toggleOverlay();
  const existingNodes = document.querySelectorAll(".swiper");
  existingNodes.forEach((node) => node.remove());

  const newSlider = document.createElement("div");
  newSlider.classList.add("swiper");
  document.body.prepend(newSlider);

  const isTablet = window.innerWidth <= 864;
  if (isTablet) toggleCheckbox();

  if (newSlider) {
    renderSlider(infoSlider, newSlider);
  }
}

/* Restart slider */
restartButtons.forEach((btn) => {
  btn.addEventListener("click", () => restartSlider());
});

/* Configuration menu */
btnConfig.forEach((btn) => {
  btn.addEventListener("click", () => openConfigurationMenu());
});

function openConfigurationMenu() {
  toggleModal();
  const configItems = configListContent.querySelectorAll(".config-list-item");
  configItems.forEach(
    (item, index) => index !== 0 && item.classList.add("hide")
  );

  const activeItem = configListContent.querySelector(`[data-index="0"]`);
  if (activeItem) {
    activeItem.classList.remove("hide");
  }
}

function generateList({ arrayList, section = "", value = "" }) {
  return arrayList.map((item) => {
    const li = document.createElement("li");

    if (section !== "" && !item.icon) {
      li.setAttribute("data-section", section);
    }

    if (value !== "" && !item.icon) {
      li.setAttribute(
        "data-value",
        `${section}-${value}-${item.id ?? item.name}`
      );
    }

    if (item.icon) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(item.icon, "image/svg+xml");
      const svgElement = svgDoc.documentElement;

      const span = document.createElement("span");
      span.classList.add("list-item");

      if (section) span.dataset.section = section;

      if (value)
        span.dataset.value = `${section}-${value}-${item.id ?? item.name}`;

      span.insertAdjacentHTML("afterbegin", item.name);

      li.style.display = "flex";
      li.style.gap = "2px";
      li.prepend(svgElement);
      li.appendChild(span);
    } else {
      li.innerText = item.name;
    }

    li.addEventListener("click", function () {
      const items = document.querySelectorAll("li");
      items.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");

      renderContent(item.name);

      const isTablet = window.innerWidth <= 864;
      if (isTablet) toggleCheckbox();

      toggleOverlay();
    });

    return li;
  });
}

const headerList = generateList({
  arrayList: visibleCategory,
  section: "header",
  value: "category",
});
const mobileMenuList = generateList({
  arrayList: visibleCategory,
  section: "header",
  value: "category",
});
const menuConfig = generateList({
  arrayList: menuConfigurations,
  section: "configurations",
  value: "list",
});

headerList.forEach((li, index) => {
  if (index === 0) li.classList.add("active");

  li.addEventListener("click", () => {
    modalConfig.open = false;
  });

  return menuList.append(li);
});

mobileMenuList.forEach((li, index) => {
  if (index === 0) li.classList.add("active");
  li.addEventListener("click", () => {
    modalConfig.open = false;
  });
  return listMobile.append(li);
});

menuConfig.forEach((li, index) => {
  if (index === 0) li.classList.add("active");
  return configListTabMobile.append(li);
});

const configListMobileItems = configListTabMobile.querySelectorAll("li");

configListMobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleModal();
  });
});
const renderContent = (categoryName) => {
  const app = !categoryName
    ? apps[0]
    : apps.find((app) => app.category_name === categoryName);

  if (app?.children) {
    app.children.sort((a, b) => a.order - b.order);
  }

  let imagesHTML = "";
  if (!app?.children) return;

  app.children.forEach((childApp, index) => {
    if (childApp.is_show) {
      imagesHTML += `<img src="${
        childApp.thumbnail
      }" alt="image" class="source-item ${
        index === 0 ? "active" : ""
      }" data-index="${index}">`;
    }
  });

  let index = 0;

  const html = `
    <div class="container-video">
    <img src=${
      app.children[index].bg
    } class="bg-image" alt="Image description" style="display:none;">
    <video
      class="main-video"
      src=${app.children[index].video}
      autoplay
      loop
      muted
      style=${app.children[index].video ? "" : "display:none;"}
    ></video>
  </div>
  <section class="main-content">
    <div class="source">
      <h2 data-section="sectionApps" data-value=${`app-${app.children[index].id}-title`} class="source-title">${
    app.children[index].title
  }</h2>
  <p data-section="sectionApps" data-value=${`app-${app.children[index].id}-description`} class="source-description">
  ${app.children[index].description}
  </p>
  <a style=${app.children[index].ldescription ? "display:block;" : "display:none;"} data-section="sectionApps" data-value=${`app-${app.children[index].id}-license-description`} 
  href="${app.children[index].ldescription}" target="_blank" class="source-link">${app.children[index].ltitle}</a>
  <br>
      <a href=${
        app.children[index].url
      } target="_blank" rel="noopener noreferrer" title="play" class="link-btn primary-button btn-play">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <g opacity="0.8">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 9.5L5 16.25V2.75L15.5 9.5ZM11.945 9.5L6.9125 6.26V12.74L11.945 9.5Z"
              fill="white"
            />
          </g>
        </svg>
  
        <span data-section="slider" data-value="slider-btn-play">${
          slider["slider-btn-play"]
        }</span>
      </a>
    </div>
    <h3 class="category">${categoryName}</h3>
    <div class="sources-apps">
    ${imagesHTML}
    </div>
  </section>`;

  mainContainer.innerHTML = html;

  let images = document.querySelectorAll(".source-item");
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      let selectedChild = app.children[index];

      if (!image.classList.contains("active")) {
        let video = document.querySelector(".main-video");
        video.src = selectedChild.video;
        video.style.display = selectedChild.video ? "" : "none";

        let bgImage = document.querySelector(".bg-image");
        bgImage.src = selectedChild.bg;
        bgImage.style.display = selectedChild.video ? "none" : "";
      }

      let title = document.querySelector(".source-title");
      title.textContent = selectedChild.title;

      let ldescription = document.querySelector(".source-link");
      ldescription.textContent = selectedChild.ltitle;
      ldescription.href = selectedChild.ldescription;

      let description = document.querySelector(".source-description");
      description.textContent = selectedChild.description;

      let url = document.querySelector(".link-btn");
      url.href = selectedChild.url;

      images.forEach((img) => {
        img.classList.remove("active");
      });
      image.classList.add("active");
    });
  });
};

const renderConfigMenu = async () => {
  const licenseIndex = menuConfigurations.findIndex(
    (item) => item.id === "license"
  );

  const specificationsIndex = menuConfigurations.findIndex(
    (item) => item.id === "specifications"
  );

  const specifications = await getSpecifications();

  const excludeItems = [
    "operating-system",
    "interface-version",
    "battery-type",
    "battery-duration",
  ];

  if (specificationsIndex !== -1) {
    const specificationsListItems = Object.entries(specifications)
      .filter(([key]) => !excludeItems.includes(key))
      .map(([_, text]) => {
        if (text.show) {
          return `<li>${text.value}</li>`;
        }
      })
      .join("");

    const content = `<h2 data-section="configurations" data-value="configurations-specifications-title">${
      configurations["configurations-specifications-title"]
    }</h2>

     ${
       specifications["operating-system"].show
         ? `<h5 data-section="configurations" data-value="configurations-operating-system">${configurations["configurations-operating-system"]}</h5>
    
      
       <ul class="config-mini-list">  
        <li>
            <span
              data-section="configurations"
              data-value="configurations-version"
            >
              ${configurations["configurations-version"]}
            </span>
            <strong> ${specifications["operating-system"].value}</strong>
          </li>
     </ul>`
         : ""
     }
     
     ${
       specifications["interface-version"].show
         ? `<h5 data-section="configurations" data-value="configurations-interface-version">${configurations["configurations-interface-version"]}</h5>
     <ul class="config-mini-list">
       <li><span data-section="configurations" data-value="configurations-interface-version-number">${configurations["configurations-interface-version-number"]}</span> ${specifications["interface-version"].value}</li>
     </ul>
     `
         : ""
     }
     <h5>Hardware</h5>
     <ul class="config-mini-list">
     ${specificationsListItems}
     </ul>
     
     <h5 data-section="configurations" data-value="configurations-battery">${
       configurations["configurations-battery"]
     }</h5>
  <ul class="config-mini-list">
    <li>${specifications["battery-type"].value}</li>
    <li>${specifications["battery-duration"].value}</li>
  </ul>
  <p data-section="configurations" data-value="configurations-battery-description">${
    configurations["configurations-battery-description"]
  }</p>`;

    menuConfigurations[specificationsIndex].content = `
    <div class="config-list-item">
      ${content} 
    </div>
    `;
  }

  const license = await getLicense();

  if (licenseIndex !== -1) {
    menuConfigurations[licenseIndex].content = `<div class="config-list-item">
    <h2 data-section="configurations" data-value="configurations-list-license">${configurations["configurations-list-license"]}</h2>
    <p data-section="configurations" data-value="configurations-license-description">${configurations["configurations-license-description"]}</p>

    <div class="license-key">
      <span
      class="activation"
        >${license}</span
      >
      <p><span data-section="configurations" data-value="configurations-license-activation">${configurations["configurations-license-activation"]}</span> <strong data-section="configurations" data-value="configurations-license-date">${ACTIVATION_DATE}</strong></p>
    </div>
  </div>`;
  }

  const menuConfigTab = generateList({
    arrayList: menuConfigurations,
    section: "configurations",
    value: "list",
  });

  let configListTab;

  if (window.innerWidth <= 864) {
    configListTab = configListTabMobile;
  } else {
    configListTab = configListTabDesktop;
  }

  if (window.innerWidth <= 864) {
    configListTab.innerHTML = "";
  }

  menuConfigTab.forEach((li, index) => {
    if (index === 0) li.classList.add("active");
    return configListTab.append(li);
  });

  const listTabs = configListTab.querySelectorAll("li");

  menuConfigurations.forEach((item) => {
    configListContent.insertAdjacentHTML("beforeend", item.content);
  });

  listTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      listTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      modalConfig.open = true;

      configListContent
        .querySelectorAll(".config-list-item")
        .forEach((item, index) => {
          item.dataset.index = index;
          item.classList.add("hide");
        });

      const activeItem = configListContent.querySelector(
        `[data-index="${index}"]`
      );
      if (activeItem) {
        activeItem.classList.remove("hide");
      }
    });
  });
};

function initIntroAndSlider() {
  intro.remove();
  renderSlider(infoSlider);
}

async function initHeaderAndFooter() {
  header.style.display = "flex";
  footer.style.display = "flex";
  renderContent(visibleCategory[0].name);
  await renderConfigMenu();
  setUpLanguageSelection();
}

function setUpLanguageSelection() {
  const radioButtons = document.querySelectorAll("input[name='lang']");
  textsToChange = document.querySelectorAll("[data-section]");
  const storedLanguage = localStorage.getItem(LANGUAGE);

  radioButtons.forEach((radio) => {
    if (storedLanguage && radio.value === storedLanguage) {
      radio.checked = true;
    } else if (!storedLanguage && radio.value === DEFAULT_LANGUAGE) {
      radio.checked = true;
    }

    addChangeListener(radio);
  });
}

function addChangeListener(radio) {
  radio.addEventListener("change", () => {
    changeLanguage(radio.value);
    localStorage.setItem(LANGUAGE, radio.value);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  if (SHOW_INTRO) {
    setTimeout(initIntroAndSlider, 5500);
    setTimeout(await initHeaderAndFooter, 5600);
  } else {
    intro.remove();
    await initHeaderAndFooter();
  }
});
