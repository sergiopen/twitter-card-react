import React from "react";

export default function TwitterCard({user, deleteUser}) {

  return (
    <article className="card">
      <div className="card-info">
        <img
          className="card-img"
          src="https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg"
          alt=""
        />
        <div className="card-text">
          <strong>{user.name}</strong>
          <p>{user.user}</p>
        </div>
      </div>
      <aside>
        <button onClick={() => deleteUser(user.id)} className="card-btn">Seguir</button>
      </aside>
    </article>
  );
}
