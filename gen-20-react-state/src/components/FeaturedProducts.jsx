function FeaturedProducts({ products }) {
  return (
    <section className="w-3/4 mx-auto mb-8">
      {/* Produk header */}
      <div className=" flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Featured Products
        </h2>
        <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center">
          View All Products <span className="hidden ml-2 md:block ">→</span>
        </button>
      </div>
      {/* Produk container dalam bentuk grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(({ id, image, alt, name, rating, price }) => (
          // Contaier per produk
          <div key={id}>
            {/* Kotak Produk */}
            <div className="border p-8 rounded-lg bg-slate-100 hover:scale-105 hover:drop-shadow-md hover:bg-slate-200 transition ease-in-out delay-100">
              <img
                src={image}
                alt={alt}
                className="w-full h-sm aspect-square rounded-md mb-4"
              />
              {/* Tombol produk */}
              <div className="justify-evenly flex flex-wrap gap-2 items-center">
                <button className="  text-nowrap bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                  <i className="fa-regular fa-eye text-gray-700 hover:text-blue-500 cursor-pointer"></i>
                  <i className="fa-regular fa-heart text-gray-700 hover:text-red-600 cursor-pointer"></i>
                </div>
              </div>
            </div>
            {/* Produk Info */}
            <div className="text-left mt-4">
              <h3 className="font-medium text-base">{name}</h3>
              <div className=" flex items-center">
                {[0, 1, 2, 3, 4].map(function (index) {
                  return (
                    <span key={index} className="star text-yellow-500">
                      {index < rating ? "★" : "☆"}
                    </span>
                  );
                })}
              </div>
              <p className="price text-xl font-semibold text-gray-800">
                {price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
