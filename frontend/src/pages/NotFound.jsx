import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <div class="text-center p-10 bg-white">
          <div class="text-6xl text-gray-800 mb-4">🚫</div>

          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            ¡Vaya! Página no encontrada.
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            La página que estás buscando no existe o ha sido movida.
          </p>

          <a
            href="/"
            class="inline-block bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 transition duration-300"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
