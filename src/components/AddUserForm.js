import { useState } from "react";

export default function AddUserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return; 
    onAdd({
      name,
      email,
      phone,
      website,
      company: { name: company },
      address: { street, city },
    });


    setName("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setCompany("");
    setStreet("");
    setCity("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Emri"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefoni"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kompanija"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rruga"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        type="text"
        placeholder="Qyteti"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn primary">
        Shto Përdorues
      </button>
    </form>
  );
}
