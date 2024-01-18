import { LANGUAGE, DEFAULT_LANGUAGE } from "../const.js";
import { en } from "./en.js";
import { es } from "./es.js";

const languages = { es, en };

export function textChangeLanguage(
  language = localStorage.getItem(LANGUAGE) ?? DEFAULT_LANGUAGE
) {
  return languages[language];
}
