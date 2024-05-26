import { useState } from "react";

import produk2 from "../assets/produk/produk2.jpg";
import produk2_1 from "../assets/produk/produk2.1.jpg";
import produk2_2 from "../assets/produk/produk2.2.jpg";
import produk2_3 from "../assets/produk/produk2.3.jpg";

const ProductSection = () => {
  const [mainImage, setMainImage] = useState(produk2);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const smallImages = [produk2, produk2_1, produk2_2, produk2_3];

  const changeMainImage = (imageSrc, index) => {
    setMainImage(imageSrc);
    setSelectedImage(index);
  };

  function increment() {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    } else {
      alert("Jumlah tidak boleh lebih dari 99");
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Jumlah tidak boleh kurang dari 1");
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    if (value >= 1 && value <= 99) {
      setQuantity(value);
    } else if (value < 1) {
      setQuantity(1);
    } else if (value > 99) {
      setQuantity(99);
    }
  }

  return (
    <section className="my-8  mx-auto w-3/4 p-6 md:shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:hidden">
          <h2 className="text-base font-bold mb-4 font-[Oswald]">
            Produk Elektronik
          </h2>
          <h3 className="text-xl font-bold mb-4 font-[Oswald]">
            Playstation 5
          </h3>
          <div className="flex space-x-4">
            <div className="text-yellow-300">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <span className="text-cyan-500">
              <a href="#">71 Review</a>
            </span>
          </div>
        </div>
        <div>
          <img
            id="mainImage"
            className="w-full mb-4 aspect-square"
            src={mainImage}
            alt="Gambar ps5 utama"
          />
          <div className="grid grid-cols-4 gap-4 mt-8">
            {smallImages.map((src, index) => (
              <img
                key={index}
                className={`aspect-square gambar-kecil ${
                  selectedImage === index
                    ? "border-cyan-500 border-4 shadow-sm shadow-cyan-600"
                    : ""
                }`}
                src={src}
                alt={`Gambar ps5 kecil ${index + 1}`}
                onClick={() => changeMainImage(src, index)}
              />
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <h2 className="hidden md:block text-xl font-bold mb-4 font-roboto">
            Produk Elektronik
          </h2>
          <div>
            <h3 className="hidden md:block text-xl md:text-2xl font-bold mb-4 font-roboto">
              Playstation 5
            </h3>
            <h4 className="text-base md:text-lg font-bold mb-4 font-roboto">
              Detail :
            </h4>
            <p className="text-gray-700 text-sm md:text-base mb-4 font-nunito">
              PS5 adalah konsol game generasi terbaru yang menawarkan pengalaman
              gaming terdepan. Dibuat oleh Sony, PS5 memiliki kekuatan grafis
              dan performa yang luar biasa, menjadikannya pilihan utama para
              gamer. Dilengkapi dengan teknologi canggih seperti ray tracing dan
              SSD ultra cepat, PS5 menghadirkan gameplay yang halus dan
              realistis. Kontroler DualSense yang inovatif memberikan sensasi
              gaming yang lebih mendalam dengan feedback haptic dan trigger
              adaptif. Jelajahi dunia gaming baru dengan PS5!
            </p>
          </div>
          <div className="space-x-4 md:my-4 hidden md:flex">
            <div className="text-yellow-300">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <span className="text-cyan-500">
              <a href="#">71 Review</a>
            </span>
          </div>
          <div className="hidden  items-center mb-4 md:block">
            <label className="mr-2 text-sm md:text-base">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-300 rounded-md w-16 md:w-24 text-center focus:outline-cyan-300"
            />
          </div>
          {/* Untuk quantity mobile */}
          <label className="mr-2 text-sm md:text-base font-bold md:hidden">
            Quantity :
          </label>
          <div className="flex justify-center items-center mt-4 mb-8 md:hidden">
            <div className="flex items-center border border-gray-300 rounded-md w-32 text-center">
              <button
                className="w-1/3 h-full focus:outline-none"
                onClick={decrement}
              >
                <i className="fas fa-minus"></i>
              </button>
              <input
                type="number"
                id="quantity-mobile"
                name="quantity"
                value={quantity}
                max="99"
                className="py-2 px-3 w-1/2 text-center bg-white focus:outline-none num"
                onChange={handleChange}
              />
              <button
                className="w-1/3 h-full focus:outline-none"
                onClick={increment}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <p className="text-gray-800 text-lg font-semibold mb-4">
            Harga: Rp. 8.999.000
          </p>
          <div className="flex flex-wrap justify-center ">
            <button className="flex-1 min-w-48 text-nowrap mt-2 mr-4  outline hover:bg-cyan-500 hover:text-white text-cyan-500 font-bold py-2 px-4 rounded shadow-md transition duration-150 ease-out hover:ease-in text-sm md:text-base">
              Tambah ke Keranjang
            </button>
            <button className="flex-1 min-w-48 text-nowrap mt-2 mr-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded shadow-md transition duration-150 ease-out hover:ease-in text-sm md:text-base">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
