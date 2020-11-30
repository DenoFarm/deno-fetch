import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.3-alpha2/deno-dom-wasm.ts";

async function scrape(url) {
  const response = await fetch(url);
  const responseText = await response.text();
  return responseText;
}

let responseText = await scrape("https://www.freecodecamp.org/news/")
let document = new DOMParser().parseFromString(
  responseText,
  "text/html"
);

let postTitles = document.querySelectorAll("h2.post-card-title");
console.log(a[2].textContent);