


const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url, task) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    task(data);
  }
}
function doStuff(data) {
  let output = document.querySelector("#output")
  results = data;
  const html = `<h2>${results.name}</h2>
  <img style="background:green"; src="${results.sprites.front_default}" alt="Image of ${results.name}"/>`
  output.innerHTML = html;
  console.log("first: ", results);
}
/* getPokemon(url);
console.log("second: ", results);
 */
const sortPokemon = (list) => list.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

const urlList = "https://pokeapi.co/api/v2/pokemon";
let list = document.querySelector("#outputList");

const doStuffList = (data) => {
  console.log(data)
  const output = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList)
  const PokList = pokeList.map(e => `<li>${e.name}</li>`)
  output.innerHTML += PokList;
}



getPokemon(url, doStuff)

getPokemon(urlList, doStuffList)