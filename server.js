import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.3-alpha2/deno-dom-wasm.ts";

async function scrape(url) {
  const response = await fetch(url);
  const responseText = await response.text();
  return responseText;
}

let responseText = await scrape("https://deno.land/")
let document = new DOMParser().parseFromString(
  responseText,
  "text/html"
);

let a = document.querySelectorAll("a");
console.log(a[2].textContent);