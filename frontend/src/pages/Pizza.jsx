import React from "react";
import { useEffect, useState } from "react";
import { formateador } from "../utils/formateador";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  }, []);
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-300 border-2 m-2 p-2">
        <img className="w-full" src={pizza.img} alt="pizza" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center">{pizza.name}</div>
          <hr />
          <p className="text-center">Ingredientes:</p>
          <ul className="text-gray-700 text-center text-sm">
            <li>🍕 {pizza.ingredients.join(", ")}</li>
          </ul>
          <p className="text-center">Descripción:</p>
          <p className="text-center text-sm text-gray-700">{pizza.desc}</p>
        </div>
        <hr />
        <p className="text-center text-2xl font-semibold">
          Precio ${formateador(pizza.price)}
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
    </div>
  );
};

export default Pizza;
