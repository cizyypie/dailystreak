// 1. Kita buat "janji" (Promise)
const janjiBikinEsKrim = new Promise((resolve, reject) => {
  
  // Pura-pura butuh waktu 2 detik (2000 milidetik)
  setTimeout(() => {
    
    // Ganti ini jadi false untuk coba kalau es krimnya "habis"
    const esKrimAda = true; 
    
    if (esKrimAda) {
      // JANJI DITEPATI: Kasih hasil es krimnya
      resolve("Ini es krim cokelatnya!"); 
    } else {
      // JANJI DIINGKARI: Kasih alasan kenapa gagal
      reject("Maaf, es krim cokelatnya habis.");
    }
    
  }, 2000); // Waktu tunggu 2 detik
});

// 2. Bilang ke komputer mau ngapain
console.log("Aku pesan es krim..."); // Ini langsung muncul

// 3. Bilang ke komputer apa yang harus dilakukan SETELAH janjinya selesai
janjiBikinEsKrim
  .then((hasilEsKrim) => {
    // Bagian .then() ini jalan JIKA janjinya DITEPATI (resolve)
    console.log("Hore! " + hasilEsKrim);
  })
  .catch((alasanGagal) => {
    // Bagian .catch() ini jalan JIKA janjinya DIINGKARI (reject)
    console.log("Yah... " + alasanGagal);
  });

// Ini akan langsung muncul, nggak nunggu 2 detik!
// Ini bukti "Asinkron", kita bisa lanjut main HP dulu.
console.log("Sambil nunggu es krim, aku main HP dulu ah...");

// bagian asinkronisnya disini adalah pada saat komputer tidak menunggu eskrimnya jadi
//tapi melakukan hal 
//prosesnya gini:
//1. pesan eskrim, trs penjualnya bilang 'bentar ya' (ini promisenya)
//2. sambil nunggu komputer bisa lakuin hal lain (asinkron)
//3. hasil eskrim jadi/tidak (reject/resolve)
