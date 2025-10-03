import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserDetailsPage() {
  const { id } = useParams();
  const user = useSelector((s) =>
    s.users.items.find((u) => String(u.id) === String(id))
  );

  if (!user)
    return (
      <p>
        User not found. <Link to="/">Back</Link>
      </p>
    );

  return (
    <div className="page-container">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      <h3>Address</h3>
      <p>
        {user.address?.street}, {user.address?.city}
      </p>

      <h3>Company</h3>
      <p>{user.company?.name}</p>

      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
}
