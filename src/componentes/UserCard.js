import "./UserCard.css";

export default function UserCard({ user, onDelete }) {
  const { first_name, last_name, avatar, email, gender, id } = user;
  return (
    <div className="container">
      <div className="imagen">
        <img className="img" src={avatar} alt={first_name} />
      </div>
      <div className="content">
        <div className="name">
          {first_name} {last_name}
        </div>
        <div className="email">EMAIL :{email}</div>
        <div className="gender">GENERO : {gender}</div>
        <div className="id">ID : {id}</div>
      </div>
      <div className="boton">
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
