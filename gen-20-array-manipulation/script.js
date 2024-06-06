let products = [
  {
    id: "1",
    name: "Vivobook 14X (M1403)",
    images: [
      "/assets/produk/produk1.png",
      "/assets/produk/produk1.1.jpg",
      "/assets/produk/produk1.2.jpeg",
      "/assets/produk/produk1.3.png",
    ],
    price: 7999000,
    rating: 4,
    description:
      "Vivobook 14X adalah laptop yang ideal untuk produktivitas dan hiburan. Dengan performa tinggi dan desain yang stylish, Vivobook 14X siap mendukung aktivitas sehari-hari Anda.",

    category: "Komputer",
  },
  {
    id: "2",
    name: "PlayStation 5 (PS 5)",
    images: [
      "/assets/produk/produk2.jpg",
      "/assets/produk/produk2.1.jpg",
      "/assets/produk/produk2.2.jpg",
      "/assets/produk/produk2.3.jpg",
    ],
    price: 8999000,
    rating: 5,
    description:
      "PS5 adalah konsol game generasi terbaru yang menawarkan pengalaman gaming terdepan. Dibuat oleh Sony, PS5 memiliki kekuatan grafis dan performa yang luar biasa, menjadikannya pilihan utama para gamer.",
    category: "Video games",
  },
  {
    id: "3",
    name: "Infinix Note 40 Pro 5G 8+256GB",
    images: [
      "/assets/produk/produk3.png",
      "/assets/produk/produk3.1.jpg",
      "/assets/produk/produk3.2.png",
      "/assets/produk/produk3.3.jpg",
    ],
    price: 3700000,
    rating: 4,
    description:
      "Infinix Note 40 Pro adalah smartphone canggih dengan kapasitas penyimpanan 8+256GB. Dengan teknologi 5G, Anda dapat menikmati kecepatan internet yang luar biasa.",
    category: "Smartphone",
  },
  {
    id: "4",
    name: "Nintendo Switch",
    images: [
      "/assets/produk/produk4.png",
      "/assets/produk/produk4.1.jpg",
      "/assets/produk/produk4.2.jpg",
      "/assets/produk/produk4.3.jpg",
    ],
    price: 5000000,
    rating: 4,
    description:
      "Nintendo Switch adalah konsol game revolusioner yang dapat digunakan baik sebagai perangkat genggam maupun terhubung ke TV. Nikmati pengalaman bermain yang seru dan fleksibel.",
    category: "Video games",
  },
  {
    id: "5",
    name: "Adjustable Dumbbell Set",
    images: [
      "/assets/produk/produk5.png",
      "/assets/produk/produk5.1.jpg",
      "/assets/produk/produk5.2.jpg",
      "/assets/produk/produk5.3.jpg",
    ],
    price: 7800000,
    rating: 4,
    description:
      "Set Dumbbell Adjustable memungkinkan Anda untuk menyesuaikan berat dengan mudah, menjadikannya pilihan yang sempurna untuk latihan kekuatan di rumah.",
    category: "Olahraga",
  },
  {
    id: "6",
    name: "Smart Watch v2",
    images: [
      "/assets/produk/produk6.png",
      "/assets/produk/produk6.1.jpg",
      "/assets/produk/produk6.2.jpg",
      "/assets/produk/produk6.3.jpg",
    ],
    price: 900000,
    rating: 3,
    description:
      "Smart Watch v2 adalah jam tangan pintar yang dilengkapi dengan berbagai fitur kesehatan dan kebugaran. Tetap terhubung dan pantau kesehatan Anda dengan mudah.",
    category: "Smartwatch",
  },
  {
    id: "7",
    name: "Xbox Series X",
    images: [
      "/assets/produk/produk7.jpg",
      "/assets/produk/produk7.1.jpg",
      "/assets/produk/produk7.2.jpg",
      "/assets/produk/produk7.3.jpg",
    ],
    price: 6700000,
    rating: 5,
    description:
      "Xbox Series X adalah konsol game generasi terbaru dari Microsoft yang menawarkan pengalaman gaming terbaik dengan grafis memukau dan performa tinggi.",
    category: "Video games",
  },
];

function addProduct(newProduct) {
  products.push(newProduct);
  console.log("Produk baru telah ditambahkan:");
  console.log(newProduct);
}

function deleteProduct(productId) {
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    console.log(`Produk dengan id ${productId} telah dihapus.`);
  } else {
    console.log(`Produk dengan id ${productId} tidak ditemukan.`);
  }
}

function editProductName(productId, newName) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    product.name = newName;
    console.log(
      `Nama produk dengan id ${productId} telah diubah menjadi ${newName}.`
    );
  } else {
    console.log(`Produk dengan id ${productId} tidak ditemukan.`);
  }
}

function displayProducts() {
  console.log("Daftar produk saat ini:");
  console.log(products);
}

function showMenu() {
  const prompt = require("prompt-sync")({ sigint: true });

  console.log("Pilih aksi yang ingin dilakukan:");
  console.log("1. Tambah produk baru");
  console.log("2. Hapus produk");
  console.log("3. Edit nama produk");
  console.log("4. Tampilkan semua produk");
  console.log("5. Keluar");

  const choice = prompt("Masukkan pilihan (1-5): ");

  switch (choice) {
    case "1":
      const newProduct = {
        id: "8",
        name: "Playstation 4",
        images: [
          "/assets/produk/produk8.png",
          "/assets/produk/produk8.1.jpg",
          "/assets/produk/produk8.2.jpg",
          "/assets/produk/produk8.3.jpg",
        ],
        price: 4000000,

        description:
          "PlayStation 4 (PS4) adalah konsol game canggih dari Sony dengan grafis menakjubkan dan performa tinggi",
        category: "Video games",
      };
      addProduct(newProduct);
      console.log();
      break;

    case "2":
      const deleteId = prompt("Masukkan ID produk yang akan dihapus: ");
      deleteProduct(deleteId);
      console.log();
      break;

    case "3":
      const editId = prompt("Masukkan ID produk yang akan diedit: ");
      const newName = prompt("Masukkan nama baru produk: ");
      editProductName(editId, newName);
      console.log();
      break;

    case "4":
      displayProducts();
      console.log();
      break;

    case "5":
      console.log("Keluar dari program.");
      return;

    default:
      console.log("Pilihan tidak valid, silakan coba lagi.");
      console.log();
  }

  showMenu();
}

showMenu();
