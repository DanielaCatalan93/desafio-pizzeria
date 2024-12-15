function Header() {
  return (
    <div className="relative">
      <div className="flex justify-center flex-col items-center bg-[url('Pizza.jpg')] bg-cover bg-center h-48 brightness-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            ¡Pizzería Mamma Mía!
          </h1>
          <p className="text-white font-bold">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
          <hr className="border-t-1 border-gray-500 w-full my-5" />
        </div>
      </div>
    </div>
  );
}

export default Header;
