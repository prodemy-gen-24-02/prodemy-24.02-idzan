"use strict";

// Fungsi untuk mengubah gambar utama
function changeMainImage(imageSrc) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = imageSrc;
}

// Menambahkan event listener pada setiap gambar kecil
const smallImages = document.querySelectorAll(".gambar-kecil");

const firstSmallImage = smallImages[0];

firstSmallImage.classList.add(
  "border-cyan-500",
  "border-4",
  "shadow-sm",
  "shadow-cyan-600"
);

for (const img of smallImages) {
  img.addEventListener("click", function () {
    const imageSrc = this.getAttribute("src");

    changeMainImage(imageSrc);

    // Menghapus border biru dari semua gambar kecil
    for (const img of smallImages) {
      img.classList.remove(
        "border-cyan-500",
        "border-4",
        "shadow-sm",
        "shadow-cyan-600"
      );
    }

    // Menambahkan border biru hanya pada gambar kecil yang dipilih
    this.classList.add(
      "border-cyan-500",
      "border-4",
      "shadow-sm",
      "shadow-cyan-600"
    );
  });
}

// Tombol tambah kurang quantity
const kurangBtn = document.getElementById("min");
const tambahBtn = document.getElementById("plus");
const quantity = document.getElementById("quantity-mobile");
// const quantity = document.querySelector(".num");

// Event listener untuk tombol kurang
kurangBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantity.value);
  // console.log(currentValue + 1);

  if (currentValue > 1) {
    quantity.value = currentValue - 1;
  }
});

// Event listener untuk tombol tambah
tambahBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantity.value);
  // console.log(currentValue + 1);

  if (currentValue < 99) {
    quantity.value = currentValue + 1;
  }
});
