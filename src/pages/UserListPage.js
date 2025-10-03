import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAtTop, deleteUser } from "../usersSlice";
import AddUserForm from "../components/AddUserForm";
import SearchBar from "../components/SearchBar";

export default function UserListPage() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.users.items);

  const [query, setQuery] = useState("");

  const filtered = items.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (user) => {
    dispatch(addUserAtTop({ ...user, id: Date.now() }));
  };

  return (
    <div className="page-container">
      <div className="top-row">
        <h2>Përdoruesit</h2>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Kërko emër ose email..."
        />
      </div>

      <div className="grid-and-form">
        <AddUserForm onAdd={handleAdd} />

        <div className="users-list">
          <div className="cards">
            {filtered.map((user) => (
              <div className="card" key={user.id}>
                <h3>{user.name}</h3>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                {user.phone && (
                  <p>
                    <strong>Tel:</strong> {user.phone}
                  </p>
                )}
                {user.website && (
                  <p>
                    <strong>Web:</strong>{" "}
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.website}
                    </a>
                  </p>
                )}
                {user.company?.name && (
                  <p>
                    <strong>Kompanija:</strong> {user.company.name}
                  </p>
                )}
                {user.address?.street && (
                  <p>
                    <strong>Adresa:</strong> {user.address.street},{" "}
                    {user.address.city}
                  </p>
                )}

                <div className="card-actions">
                  <button
                    className="btn danger"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Fshi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
