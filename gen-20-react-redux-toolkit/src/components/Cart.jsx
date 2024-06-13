import { useSelector, useDispatch } from "react-redux";
import { FormatRupiah } from "../utils/FormatRupiah";
import { removeFromCart, updateQuantity } from "../store/reducers/cartReducer";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  let subTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subTotal += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <section className="py-8 flex flex-col min-h-screen">
      <div className="flex-grow max-w-2xl mx-auto w-full flex items-center justify-center">
        <div className="w-full">
          <h2
            className={`text-2xl font-semibold mb-4 ${
              cartItems.length === 0 ? "text-center" : "text-left"
            } `}
          >
            Shopping Cart
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="flex justify-center items-center h-48 w-48 mb-4">
                  <dotlottie-player
                    src="https://lottie.host/3e05cccc-2eb7-4b1c-b60c-e231d7606e94/CX9lzSmqE1.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
                <p className="text-center text-lg">
                  Belum ada produk yang ingin dibeli
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded mr-4"
                    />
                    <div className="flex-1 min-w-0 ml-4 text-center sm:text-left">
                      <h3 className="text-lg font-semibold truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-500">
                        {FormatRupiah(item.price)}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start mt-2">
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
                    <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
                      <button
                        onClick={() => handleRemove(item.id)}
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
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <>
              <div className="mt-8">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Sub Total:</span>
                  <span className="text-lg">{FormatRupiah(subTotal)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">
                    Delivery Charge:
                  </span>
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
                <button className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 w-full sm:w-auto">
                  Continue to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
