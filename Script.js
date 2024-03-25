async function fetchdata() {
  try {
    const pokemonname = document.getElementById("pokemonname").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
    if (!response.ok) {
      throw new Error("Could not Fetch resource");
    }
    const data = await response.json();
    const pokemonsprite = data.sprites.front_default;
    const imgElemetnt = document.getElementById("pokemonsprite");

    console.log(data);
    imgElemetnt.src = pokemonsprite;
    imgElemetnt.style.display = "block";
  } catch (err) {
    console.log(err);
  }
}
