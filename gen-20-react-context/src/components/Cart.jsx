import { useContext } from "react";
import { FormatRupiah } from "../utils/FormatRupiah";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  let subTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subTotal += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <h2
          className={`text-2xl font-semibold mb-4 ${
            cartItems.length === 0 ? "text-center" : "text-left"
          } `}
        >
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada yang mau dibeli</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500">
                        {FormatRupiah(item.price)}
                      </p>
                      <div className="flex items-center mt-2">
                        <label htmlFor={`quantity_${item.id}`} className="mr-2">
                          Quantity:
                        </label>
                        <input
                          id={`quantity_${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 border rounded p-1 text-center"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold">Sub Total:</span>
                <span className="text-lg">{FormatRupiah(subTotal)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold">Delivery Charge:</span>
                <span className="text-lg">Rp 20.000,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-semibold">Total:</span>
                <span className="text-2xl">
                  {FormatRupiah(subTotal + 20000)}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600">
                Continue to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
