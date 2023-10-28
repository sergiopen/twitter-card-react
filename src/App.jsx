import { useState } from "react";
import CardContent from "./components/CardContent"
import FormUser from "./components/FormUser"

export function App() {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "Misco Ions",
      user: "@MiscoJones",
    },
    {
      id: 2,
      name: "Tupu",
      user: "@tupu",
    },
  ]);

  const createUser = (user) =>{
    if(users.length > 3) return alert("No puedes agregar más usuarios");
    if(user.name == "" || user.userz == "") return alert("Debes escribir un nombre y un usuario")
    const newArr = [...users, {
      id: Math.random(),
      name: user.name,
      user: "@" + user.userz
    }]
    setusers(newArr);
  }

  const deleteUser = (userId) =>{
    const newArr = users.filter(user => userId !== user.id);
    console.log(newArr)
    setusers(newArr);
}

  return (
    <div className="app">
      <FormUser createUser={createUser}/>
      <CardContent users={users} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
