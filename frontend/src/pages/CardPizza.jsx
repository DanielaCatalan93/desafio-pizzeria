import { formateador } from "../utils/formateador";
import { useCart } from "../context/CartContext";

function CardPizza({ pizza }) {
  const { addToCart } = useCart(); // Obtener la función para agregar al carrito

  const handleAddToCart = () => {
    addToCart(pizza); // Llamar a la función para agregar la pizza al carrito
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-300 border-2 m-2 p-2">
      <img className="w-full" src={pizza.img} alt="pizza" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{pizza.name}</div>
        <hr />
        <p className="text-center">Ingredientes:</p>
        <ul className="text-gray-700 text-center text-sm">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
      </div>
      <hr />
      <p className="text-center text-2xl font-semibold">
        Precio ${formateador(pizza.price)}
      </p>
      <div className=" flex justify-around px-6 pt-4 pb-2">
        <button className="bg-white text-black py-2 px-4 rounded border-black border-2">
          Ver más 👀
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-black text-white py-2 px-4 rounded"
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
