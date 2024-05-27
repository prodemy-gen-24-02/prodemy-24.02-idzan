function Hero() {
  return (
    <section
      id="home"
      className="mt-20 md:mt-16 md:bg-hero-image bg-transparent bg-cover bg-center flex items-center md:ml-16 lg:ml-24 w-auto h-screen"
    >
      <div className="text-left p-4 w-full">
        <h1 className="text-center md:text-left text-4xl font-bold mb-4">
          Belanja kapan saja <br />
          di mana saja
        </h1>
        <div className="flex justify-center md:justify-start mb-4">
          {/* Image buat di tampilan mobile */}
          <img
            className="md:hidden mx-auto items-center"
            src="https://i.pinimg.com/474x/b9/38/57/b938577d9ef94d58e990daaf520f576a.jpg"
            alt=""
          />
        </div>
        <p className="text-lg mb-4 text-center md:text-left">
          Temukan produk impian anda di website ini
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">
            Belanja Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
