import { textChangeLanguage } from "../locales/index.js";

const { slider } = textChangeLanguage();

const swiperContainer = document.querySelector(".swiper");

function destroySlider(id) {
  const node = document.querySelector(`.${id}`);
  node.classList.add("remove");
  setTimeout(() => {
    node.remove();
    document.body.style.overflow = "unset";
    document.body.style.minHeight = "100dvh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
  }, 100);
}

export const renderSlider = (arraySlides, node) => {
  document.body.style.minHeight = "auto";
  document.body.style.display = "unset";
  document.body.style.flexDirection = "unset";
  const targetNode = node || swiperContainer;

  let slides = arraySlides.map((item) => {
    let buttonsHTML = "";
    if (item.buttons.includes("omit")) {
      buttonsHTML += `
        <button type="button" class="button secondary-button btn-destroy">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
          <g opacity="0.8">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 13.5L11.375 9L5 4.5V13.5ZM6.5 7.395L8.7725 9L6.5 10.605V7.395ZM14 4.5H12.5V13.5H14V4.5Z"
              fill="#E3E3E3"
            />
          </g>
        </svg>
        <span data-section="slider" data-value="slider-btn-omit">${slider["slider-btn-omit"]}</span>
      </button>
       `;
    }

    if (item.buttons.includes("next")) {
      buttonsHTML += `
        <button type="button" class="button swiper-button-next">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g opacity="0.8">
            <path
              d="M5.69238 13.9425L6.74988 15L12.7499 9L6.74988 3L5.69238 4.0575L10.6274 9"
              fill="white"
            />
          </g>
        </svg>
        <span data-section="slider" data-value="slider-btn-next">${slider["slider-btn-next"]}</span>
      </button>
       `;
    }

    if (item.buttons.includes("play")) {
      buttonsHTML += `
        <button type="button" class="button primary-button btn-destroy">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
        <g opacity="0.8">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 4.86 5.36 1.5 9.5 1.5C13.64 1.5 17 4.86 17 9C17 13.14 13.64 16.5 9.5 16.5C5.36 16.5 2 13.14 2 9ZM12.5 9L8 5.625V12.375L12.5 9Z" fill="white"/>
        </g>
        </svg>
        <span data-section="slider" data-value="slider-btn-play">${slider["slider-btn-play"]}</span>
      </button>
       `;
    }
    return `
          <div class="swiper-slide">
            <section class="wrapper-container">
              <img src="${item.image}" class="wrapper-img" alt="img" />
              <div class="info">
              ${item.smallTitle ? `<small>${item.smallTitle}</small>` : ""}
                <h1>${item.title}</h1>
                <div class="info-content">${item.content}</div>
              </div>
              <div class="swiper-button-container">
                ${buttonsHTML}
              </div>
            </section>
          </div>
        `;
  });

  let swiperHTML = `
    <div class="swiper-container">
      <div class="swiper-wrapper">${slides.join("")}</div>
      <div class="swiper-pagination"></div> 
    </div>
    `;

  targetNode.innerHTML = swiperHTML;
  const btnDestroy = document.querySelectorAll(".btn-destroy");

  btnDestroy.forEach((btn) =>
    btn.addEventListener("click", () => destroySlider("swiper"))
  );

  new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    simulateTouch: false,
    observer: true,
    observeParents: true,
  });

  document.body.style.overflow = "hidden";
};
