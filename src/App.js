import { Routes, Route, Link } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="logo">
          User Management
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}
