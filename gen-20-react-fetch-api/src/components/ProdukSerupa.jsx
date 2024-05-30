const ProdukSerupa = ({ produk }) => {
  return (
    <section className="my-8 mx-auto max-w-6xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center font-roboto">
        Produk Serupa
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {produk.map(({ id, images, name, rating, price }) => (
          <div key={id} className="border border-gray-300 p-4 rounded">
            <img
              className="aspect-square mb-4 w-full"
              src={images[0]}
              alt={name}
            />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <div className=" flex items-center">
              {[0, 1, 2, 3, 4].map(function (index) {
                return (
                  <span key={index} className="star text-yellow-500">
                    {index < rating ? "★" : "☆"}
                  </span>
                );
              })}
            </div>
            <p className="text-gray-700 mb-4">{price}</p>
            <a
              href={`/product/${id}`}
              className="text-blue-600 hover:underline"
            >
              Lihat Detail
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProdukSerupa;
