import {
  infoSlider,
  headerMenulist,
  menuConfigurations,
  apps,
} from "./const.js";
import { renderSlider } from "./components/slider.js";

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

const btnRestart = document.querySelectorAll(".btn-restart");
const btnConfig = document.querySelectorAll(".btn-config");

const configListTabDesktop = document.querySelector(".config-list-tab-desktop");
const configListTabMobile = document.querySelector(".config-list-tab-mobile");
const configListContent = document.querySelector(".config-list-content");

/* Send to home */
logo.addEventListener("click", () => {
  renderContent(headerMenulist[0].name);
});

/* Close menu mobile  */
document.addEventListener("click", function (event) {
  const menu = document.querySelector("#menuToggle");
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideMenu) {
    checkbox.checked = false;
    overlay.classList.remove("open");
  }
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    overlay.classList.add("open");
  } else {
    overlay.classList.remove("open");
  }
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
btnRestart.forEach((btn) => {
  btn.addEventListener("click", () => restartSlider());
});

/* Configuration menu */
btnConfig.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleModal();
    renderConfigMenu();
  });
});

function generateList(arrayList) {
  return arrayList.map((item, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);

    if (item.icon) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(item.icon, "image/svg+xml");
      const svgElement = svgDoc.documentElement;

      li.appendChild(svgElement);
      li.insertAdjacentText("beforeend", ` ${item.name}`);
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

const headerList = generateList(headerMenulist);
const mobileMenuList = generateList(headerMenulist);
const menuConfig = generateList(menuConfigurations);

headerList.forEach((li, index) => {
  if (index === 0) li.classList.add("active");
  return menuList.append(li);
});

mobileMenuList.forEach((li, index) => {
  if (index === 0) li.classList.add("active");
  return listMobile.append(li);
});

menuConfig.forEach((li) => {
  return configListTabMobile.append(li);
});

const configListMobileItems = configListTabMobile.querySelectorAll("li");

configListMobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleModal();
    renderConfigMenu();
  });
});

const renderContent = (categoryName) => {
  const app = !categoryName
    ? apps[0]
    : apps.find((app) => app.category_name === categoryName);

  let imagesHTML = "";
  if (!app?.children) return;

  app.children.forEach((childApp, index) => {
    imagesHTML += `<img src="${
      childApp.thumbnail
    }" alt="image" class="source-item ${
      index === 0 ? "active" : ""
    }" data-index="${index}">`;
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
    <h2 class="source-title">${app.children[index].title}</h2>
    <p class="source-description">
    ${app.children[index].description}
    </p>
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
      Iniciar
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

const renderConfigMenu = () => {
  const menuConfigTab = generateList(menuConfigurations);

  let configListTab;

  if (window.innerWidth <= 864) {
    configListTab = configListTabMobile;
  } else {
    configListTab = configListTabDesktop;
  }

  configListTab.innerHTML = "";
  configListContent.innerHTML = "";

  menuConfigTab.forEach((li) => {
    return configListTab.append(li);
  });

  const listTabs = configListTab.querySelectorAll("li");

  listTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      listTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      configListContent.innerHTML = "";
      configListContent.innerHTML = menuConfigurations[index].content;
      configListContent.firstElementChild.classList.add("active");
    });
  });

  /* Select first item */
  listTabs[0].click();
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    intro.remove();
    renderSlider(infoSlider);
  }, 5500);
  setTimeout(() => {
    header.style.display = "flex";
    footer.style.display = "flex";
    renderContent(headerMenulist[0].name);
  }, 5600);
});
