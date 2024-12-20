import { useCart } from "../context/CartContext";
import { formateador } from "../utils/formateador";

function Cart() {
  const { cart, removeFromCart, updateCartCount, calculateTotal } = useCart();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-semibold mb-8">
        Detalles del pedido
      </h1>
      <div className="w-full max-w-3xl">
        {cart.length === 0 ? (
          <p className="text-center text-xl">Tu carrito está vacío.</p>
        ) : (
          cart.map((item) => (
            <div
              className="flex justify-between items-center p-4 border-b"
              key={item.id}
            >
              <img src={item.img} alt={item.name} className="w-24 h-24" />
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  ${formateador(item.price)}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateCartCount(item.id, -1)} // Decrementar la cantidad
                  className="border border-red-500 rounded px-3 py-1 text-red-500"
                >
                  -
                </button>
                <p className="mt-2 p-1">{item.count}</p>
                <button
                  onClick={() => updateCartCount(item.id, 1)} // Incrementar la cantidad
                  className="border border-blue-500 rounded px-3 py-1 text-blue-500"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)} // Eliminar el producto
                  className="border border-gray-500 rounded px-3 py-1 text-gray-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
        <p className="text-2xl font-bold mt-2">
          Total: ${formateador(calculateTotal())}
        </p>
        <button className="bg-slate-800 text-white px-3 p-1 rounded mt-4">
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Cart;
