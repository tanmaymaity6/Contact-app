import { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactCard from "./components/ContactCard";
import ContactEditCard from "./components/ContactEditCard";
import { Contact } from "./types";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: "1", name: "John Doe", city: "New York" },
    { id: "2", name: "Dan Abramov", city: "London" },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = (c: Contact) => setContacts([...contacts, c]);

  const handleSave = (updated: Contact) => {
    setContacts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    setEditingId(null);
  };

  return (
    <div className="p-10 bg-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold">Contact Book</h1>
      <p className="text-lg mb-8">Keep track of where your friends live</p>

      <AddContactForm onAdd={handleAdd} />

      <div className="flex gap-10">
        {contacts.map((c) => {
          const isEditing = editingId === c.id;

          return (
            <div key={c.id} className="flip-card">
              <div className={`flip-inner ${isEditing ? "flip" : ""}`}>
                <div className="flip-front">
                  <ContactCard contact={c} onEdit={setEditingId} />
                </div>

                <div className="flip-back">
                  <ContactEditCard
                    contact={c}
                    onSave={handleSave}
                    onCancel={() => setEditingId(null)}
                    onDelete={handleDelete}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
