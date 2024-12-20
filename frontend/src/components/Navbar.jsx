import { formateador } from "../utils/formateador";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  // const total = 25000;
  // const token = false;
  const { calculateTotal } = useCart(); // Obtener la función para calcular el total
  const total = calculateTotal(); // Calcular el total

  return (
    <>
      <div className="flex items-center gap-2 bg-current p-2">
        <p className="text-white mt-1">Pizzería Mamma Mia!</p>
        <Link
          to="/"
          className="text-white border-inherit border-2 border-solid rounded-md p-1"
        >
          🍕 Home
        </Link>
        {/*  token ? ( */}
        <div className="flex gap-2">
          <Link
            to="/profile"
            className="text-white border-inherit border-2 border-solid rounded-md p-1"
          >
            🔓 Profile
          </Link>
          <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
            🔒 Logout
          </button>
        </div>
        {/*) : ( */}
        <div className="flex gap-2">
          <Link
            to="/login"
            className="text-white border-inherit border-2 border-solid rounded-md p-1"
          >
            🔐 Login
          </Link>
          <Link
            to="/register"
            className="text-white border-inherit border-2 border-solid rounded-md p-1"
          >
            🔐 Register
          </Link>
        </div>
        {/* )}*/}
        <Link
          to="/cart"
          className="ml-auto text-cyan-500 border-inherit border-2 border-solid rounded-md p-1"
        >
          🛒 Total: ${formateador(total)}
        </Link>
      </div>
    </>
  );
}

export default Navbar;
