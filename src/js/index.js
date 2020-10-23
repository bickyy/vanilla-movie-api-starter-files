/* function getPkmn() {
  fetch(`https://pokeapi.co/api/v2/pokemon/mudkip`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
    })
} */
const pkmn = "mewtwo";
async function getPkmn() {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
    const data = await result.json();
    console.log(data.name);
  } catch (error) {
    console.log(error);
    alert("did you spell that correctly");
  }
}
getPkmn();
