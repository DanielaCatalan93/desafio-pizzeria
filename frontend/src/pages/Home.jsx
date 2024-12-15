import Header from "./Header";
import CardPizza from "./CardPizza";
// import { pizzas } from "../data/pizzas";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        console.log(data);
      });
  }, []);

  console.log(pizzas);
  return (
    <>
      <Header></Header>
      <div className="flex justify-center gap-2 flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
}

export default Home;
