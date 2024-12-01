import Header from "./components/Header";
import CardPizza from "./components/CardPizza";
import { pizzas } from "../data/pizzas";

function Home() {
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
