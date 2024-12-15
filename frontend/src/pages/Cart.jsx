import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formateador } from "../utils/formateador";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const restar = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const incrementar = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const calcularTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-semibold mb-8">
        Detalles del pedido
      </h1>
      <div className="w-full max-w-3xl">
        {cart.map((item) => (
          <div
            className="flex justify-between items-center p-4 border-b"
            key={item.id}
          >
            <img src={item.img} alt={item.name} className="w-24 h-24" />
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </h2>
              <p className="text-sm text-gray-600">
                ${formateador(item.price)}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => restar(item.id)}
                className="border border-red-500 rounded px-3 py-1 text-red-500"
              >
                -
              </button>
              <p className="mt-2 p-1">{item.count}</p>
              <button
                onClick={() => incrementar(item.id)}
                className="border border-blue-500 rounded px-3 py-1 text-blue-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <p className="text-2xl font-bold mt-2">
          Total: ${formateador(calcularTotal())}
        </p>
        <button className="bg-slate-800 text-white px-3 p-1 rounded mt-4">
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Cart;
