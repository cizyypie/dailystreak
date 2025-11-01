lets trying to understanding this concept:
**1. callback**
```
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
  (error) => console.error("Gagal:", error)data
);

```
ada 3 stage function (dalam parameter) yg dipakai disini,
dari function ambilPokemon, 
1) nama, ini akan dicari datanya menggunakan fetch link
2) callback -> datanya
3) callback -> buat errornya