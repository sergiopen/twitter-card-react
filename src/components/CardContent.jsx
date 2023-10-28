import TwitterCard from "./TwitterCard";

export default function CardContent({users, deleteUser}) {
  if (users.length == 0) {
    return <h1>No hay usuarios para mostrar</h1>;
  }

  return (
    <section className="container-cards">      
      <h2 className="container-title">Tal vez te interese</h2>
      {users.map((user) => 
        <TwitterCard key={user.id} user={user} deleteUser={deleteUser}/>
      )}
      <a href="#" className="show-more">Mostrar más</a>
    </section>
  );
}
