import { formateador } from "../../utils/formateador";

function CardPizza(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-300 border-2 m-2 p-2">
      <img className="w-full" src={props.img} alt="pizza" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{props.name}</div>
        <hr />
        <p className="text-center">Ingredientes:</p>
        <p className="text-gray-700 text-center text-sm">
          🍕 {props.ingredients.join(", ")}
        </p>
      </div>
      <hr />
      <p className="text-center text-2xl font-semibold">
        Precio ${formateador(props.price)}
      </p>
      <div className=" flex justify-around px-6 pt-4 pb-2">
        <button className="bg-white text-black py-2 px-4 rounded border-black border-2">
          Ver más 👀
        </button>
        <button className="bg-black text-white py-2 px-4 rounded">
          Añadir 🛒
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
