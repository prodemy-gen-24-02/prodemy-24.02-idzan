import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormatRupiah } from "../utils/FormatRupiah";
import { CartContext } from "../context/CartContext";

function FeaturedProducts({ products }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="w-3/4 mx-auto mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Featured Products
        </h2>
        <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center">
          View All Products <span className="hidden ml-2 md:block ">→</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(({ id, images, name, rating, price }) => (
          <div key={id} className="cursor-pointer">
            <div className="border p-8 rounded-lg bg-slate-100 hover:scale-105 hover:drop-shadow-md hover:bg-slate-200 transition ease-in-out delay-100">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-sm aspect-square rounded-md mb-4"
              />
              <div className="justify-evenly flex flex-wrap gap-2 items-center">
                <button
                  onClick={() => handleAddToCart({ id, name, price, images })}
                  className="text-nowrap bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                  <i
                    onClick={() => handleProductClick(id)}
                    className="fa-regular fa-eye text-gray-700 hover:text-blue-500 cursor-pointer"
                  ></i>
                  <i className="fa-regular fa-heart text-gray-700 hover:text-red-600 cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="text-left mt-4">
              <h3 className="font-medium text-base">{name}</h3>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((index) => (
                  <span key={index} className="star text-yellow-500">
                    {index < rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <p className="price text-xl font-semibold text-gray-800">
                {FormatRupiah(price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
