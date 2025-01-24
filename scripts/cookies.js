import { constants } from "./constants.js";

export async function getCookies(type, defaultValue) {
  let value = await window.cookieStore.get(type);
  return value ? value.value : defaultValue;
}


export function setCookie(type, value) {
  window.cookieStore.set({
    url: constants.homeUrl,
    name: type,
    value: value
  });
}