
## 🧩 JavaScript Loop & `length` Notes

### 🧠 1️⃣ `length` dan Index di Array

* **Array selalu mulai dari index 0**
* **`arr.length`** = jumlah elemen, **bukan index terakhir**
* **Index terakhir = `arr.length - 1`**

#### ✅ Loop aman pakai:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

> Gunakan `<`, bukan `<=`, biar gak keluar batas array.

#### ⚠️ Jangan:

```js
for (let i = 0; i <= arr.length; i++) // ❌ salah
```

#### ✨ Alternatif:

```js
for (let i = 0; i <= arr.length - 1; i++) // ✅ aman tapi lebih panjang
```
| kondisi              | aman / tidak                   | kenapa                                           |
| -------------------- | ------------------------------ | ------------------------------------------------ |
| `i < arr.length`     | ✅ aman                         | loop berhenti pas i=3 (nggak nyentuh index ke-3) |
| `i <= arr.length`    | ❌ bahaya                       | akan coba akses index 3 (nggak ada datanya)      |
| `i < arr.length - 1` | ⚠️ salah satu item ketinggalan | berhenti di index terakhir-1                     |

---

## 🔁 2️⃣ Jenis-Jenis Loop

| Jenis Loop    | Akses apa      | Cocok untuk                             | Bisa `break`? | Contoh                                 |
| ------------- | -------------- | --------------------------------------- | ------------- | -------------------------------------- |
| **for**       | index (manual) | kontrol penuh (butuh index, skip, dsb.) | ✅             | `for (let i = 0; i < arr.length; i++)` |
| **for...of**  | value langsung | array, string, iterable                 | ✅             | `for (const val of arr)`               |
| **for...in**  | key / index    | object, looping property                | ✅             | `for (const key in obj)`               |
| **forEach()** | value & index  | array biasa, loop sederhana             | ❌             | `arr.forEach((val, i) => {...})`       |

---

### 📘 Contoh Lengkap

#### `for`

```js
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
// 0 10
// 1 20
// 2 30
```

#### `for...of`

```js
for (const val of arr) {
  console.log(val);
}
// 10, 20, 30
```

#### `for...in`

```js
const user = { name: "Alya", age: 21 };
for (const key in user) {
  console.log(key, user[key]);
}
// name Alya
// age 21
```

#### `.forEach()`

```js
arr.forEach((val, i) => {
  console.log(i, val);
});
// 0 10
// 1 20
// 2 30
```

---

### 💬 Tips cepat:

* Kalau cuma mau **baca isi array → `for...of`**
* Kalau mau **akses index dan value → `.forEach()` atau `for`**
* Kalau mau **loop property object → `for...in`**
* Kalau mau **bisa break/continue → `for` atau `for...of` aja**

---
