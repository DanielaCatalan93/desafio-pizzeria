import { formateador } from "../utils/formateador";

function Navbar() {
  const total = 25000;
  const token = true;

  return (
    <>
      <div className="flex gap-1.5 bg-current p-1">
        <p className="text-white mt-1">Pizzería Mamma Mia!</p>
        <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
          🍕 Home
        </button>
        {token ? (
          <div>
            <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
              🔓 Profile
            </button>
            <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
              🔒 Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
              🔐 Login
            </button>
            <button className="text-white border-inherit border-2 border-solid rounded-md p-1">
              🔐 Register
            </button>
          </div>
        )}
        <button className="ml-auto text-cyan-500 border-inherit border-2 border-solid rounded-md p-1">
          🛒 Total: ${formateador(total)}
        </button>
      </div>
    </>
  );
}

export default Navbar;
