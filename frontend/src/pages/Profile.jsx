import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-96 text-center">
        <div className="mb-6">
          <img
            src="https://i.pinimg.com/736x/ab/89/26/ab8926f20361018386916b0c87367a9d.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-teal-500"
          />
        </div>
        <h2 className="text-3xl font-semibold text-black mb-2">
          ¡Bienvenido/a!
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Correo electrónico: dcdaniela93@gmail.com
        </p>

        <button className="bg-black text-white py-2 px-6 rounded-xl text-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
