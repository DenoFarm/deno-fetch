import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.3-alpha2/deno-dom-wasm.ts";

async function scrape(url) {
  const response = await fetch(url);
  const responseText = await response.text();
  return responseText;
}

// taken from https://www.somacon.com/p355.php
function trimString(inputString) { // remove spaces from the beginning and the end
	return inputString.replace(/^\s+|\s+$/g,"");
}

let responseText = await scrape("https://www.freecodecamp.org/news/")
let document = new DOMParser().parseFromString(
  responseText,
  "text/html"
);

let postTitles = document.querySelectorAll("h2.post-card-title");
let postTitlesText = [];

for(let i = 0; i < postTitles.length; i++) {
  /*
    Titles contain redundant spaces e.g
        How to learn Python    
    First, let's cut that spaces
  */
  const postTitle = trimString(postTitles[i].textContent);
  postTitlesText.push(postTitle);
}

console.log(postTitlesText);