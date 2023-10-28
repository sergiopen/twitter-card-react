import React, { useState } from "react";

export default function FormUser({createUser}) {
    const [name, setname] = useState("");
    const [userz, setuserz] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        createUser({
            name,
            userz
        });
    }

  return (
    <form>
      <h2>Introduce un usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => {
            setuserz(e.target.value);
        }}
      />
      <button onClick={handleSubmit} className="form-btn">
        Enviar
      </button>
    </form>
  );
}
