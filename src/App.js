import "./styles.css";
import UserCard from "./componentes/UserCard.js";
import { useEffect, useState } from "react";
import NewUserForm from "./componentes/NewUsuario";

export default function App() {
  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8080/users");
      const json = await res.json();
      setUsers(json._embedded.users);
    } catch (err) {
      console.log("ERROR:", err.message);
    }
  };

  // Ejecuta esta funcion cuando se dibuja el componente la primera vez
  // MOUNT
  useEffect(() => {
    if (!users) {
      getData();
    }
  }, []);

  // Ejecuta esta funcion cuando el valor users cambie
  useEffect(() => {
    if (users) {
      setId(users.length + 1);
    }
  }, [users]);

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const sendDataToApi = (newUser) => {
    // mostramos los datos del usuario en consola
    console.log(newUser);
    // pendiente aca hacer el POST a la API con los datos
    // despues que se confirma el POST
    // actualizamos la UI despues del POST
    getData();
  };

  const addNewUser = (userData) => {
    setId(id + 1);
    const newUser = {
      id: id,
      ...userData
    };
    sendDataToApi(newUser);
    // setUsers([newUser, ...users]);
  };

  const renderUsers = () => {
    if (users === null) return null;
    return users.map((user) => {
      return <UserCard key={user.id} user={user} onDelete={removeUser} />;
    });
  };

  return (
    <div className="App">
      <h1 id="header">Listado de usuarios</h1>
      <NewUserForm onNewUser={addNewUser} />
      <div className="list">{renderUsers()}</div>
    </div>
  );
}
