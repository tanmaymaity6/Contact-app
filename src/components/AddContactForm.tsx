import { useState } from "react";
import { Contact } from "../types";

export default function AddContactForm({
  onAdd,
}: {
  onAdd: (c: Contact) => void;
}) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !city.trim()) return;
    onAdd({ id: crypto.randomUUID(), name, city });
    setName("");
    setCity("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-10 flex gap-4 items-end w-[800px]">
      <div className="flex-1">
        <label className="label-text">Name:</label>
        <input
          className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary focus:border-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex-1">
        <label className="label-text">City:</label>
        <input
          className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary focus:border-primary"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleAdd}>
        Add contact
      </button>
    </div>
  );
}
