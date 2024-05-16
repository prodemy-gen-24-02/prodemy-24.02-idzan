// Import library readline untuk menerima input dari terminal
const readline = require("readline");

let produk = {
  name: "Laptop",
  harga: 3000000,
  warna: "Hitam",
};

console.log("Objek sebelum perubahan:");
console.log(produk);

// Buat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk mengubah nilai objek berdasarkan input
function updateObject(key, value) {
  if (key in produk) {
    produk[key] = value; // Ubah nilai objek sesuai dengan input
    console.log(`Nilai '${key}' berhasil diubah menjadi '${value}'`);
  } else {
    console.log(`Key '${key}' tidak ditemukan dalam objek.`);
  }
}

// Munculin pertanyaan
rl.question("Masukkan key (name, harga, warna): ", (key) => {
  rl.question(`Masukkan nilai baru untuk '${key}': `, (value) => {
    updateObject(key, value); // Panggil fungsi untuk mengubah objek
    console.log("Objek setelah perubahan:");
    console.log(produk); // Cetak objek setelah diubah
    rl.close(); // Tutup interface readline setelah selesai
  });
});
