import { browser } from "$app/env";
import { writable } from "svelte/store";

export const user = writable("");

function browserGet(key) {
  if (browser) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  }
}
function browserSet(key, value) {
  if (browser) {
    const item = localStorage.setItem(key, value);
  }
}

export async function post(fetch, url, body) {
  let customError = false;
  try {
    let headers = {};
    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
    }
    const token = browserGet("jwt");
    if (token) {
      headers["Authorization"] = "Bearer" + token;
    }

    const res = await fetch(url, {
      method: "POST",
      body,
      headers,
    });
    if (!res.ok) {
      try {
        const data = await res.json();
        const error = data.message[0].message[0];
        customError = true;
        throw { id: error.id, message: error.message };
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
