import React from "react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarInput = (e) => {
    e.preventDefault();
    if (email == "" || password == "" || confirmPassword == "") {
      alert(`Todos los campos son obligatorios.`);
    } else if (password.length < 6 && password.length < 6) {
      alert(`La contraseña debe tener al menos 6 carácteres.`);
    } else if (password !== confirmPassword) {
      alert(`Las contraseñas no coinciden.`);
    } else {
      alert(`Datos ingresados correctamente.`);
    }
  };

  return (
    <div className="text-center py-6">
      <h1 className="text-3xl pb-3">Register</h1>
      <p>Email</p>
      <input
        type="text"
        placeholder="Ingresa tu email"
        className="border-inherit border-2 rounded-md px-12"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <p>Contraseña</p>
      <input
        type="password"
        placeholder="Ingresa tu contraseña"
        className="border-inherit border-2 rounded-md px-12"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <p>Confirmar contraseña</p>
      <input
        type="password"
        placeholder="Confirma tu contraseña"
        className="border-inherit border-2 rounded-md px-12"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
      <br></br>
      <button
        type="submit"
        className="bg-cyan-600 border-inherit border-2 rounded-md px-3 py-1 mt-3 text-white"
        onClick={validarInput}
      >
        Enviar
      </button>
    </div>
  );
};

export default Register;
