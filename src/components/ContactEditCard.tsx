import { useState } from "react";
import { Contact } from "../types";

export default function ContactEditCard({
  contact,
  onSave,
  onCancel,
  onDelete,
}: any) {
  const [name, setName] = useState(contact.name);
  const [city, setCity] = useState(contact.city);

  return (
    <div className="bg-white shadow-md p-6 rounded-xl w-full h-full">
      <div className="mb-4">
        <label className="label-text">Name:</label>
        <input
          className="input input-bordered w-full transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="label-text">City:</label>
        <input
          className="input input-bordered w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="btn btn-error" onClick={() => onDelete(contact.id)}>
          Delete
        </button>

        <button className="btn" onClick={onCancel}>
          Cancel
        </button>

        <button
          className="btn btn-primary"
          onClick={() => onSave({ ...contact, name, city })}
        >
          Save
        </button>
      </div>
    </div>
  );
}
