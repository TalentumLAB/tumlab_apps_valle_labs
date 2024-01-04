import { LANGUAGE } from "../const.js";
import { en } from "./en.js";
import { es } from "./es.js";

const languages = { es, en };

export function textChangeLanguage(language) {
  const selectedLanguage = language || localStorage.getItem(LANGUAGE);
  return languages[selectedLanguage];
}
