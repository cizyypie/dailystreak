function ambilPokemon(nama, callback, callbackError) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nama}`)
    .then(res => {
      if (!res.ok) throw new Error("Gagal ambil data");
      return res.json();
    })
    .then(data => callback(data))
    .catch(err => callbackError(err));
}

// Pemakaian
ambilPokemon(
  "pikachu",
  (data) => console.log("Berhasil:", data.name),
  (error) => console.error("Gagal:", error)
);
