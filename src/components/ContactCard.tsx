import { Contact } from "../types";

export default function ContactCard({ contact, onEdit }: any) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl w-full h-full">
      <h2 className="font-bold text-xl">{contact.name}</h2>
      <p className="mt-2">{contact.city}</p>

      <button
        className="btn btn-outline mt-6"
        onClick={() => onEdit(contact.id)}
      >
        Edit
      </button>
    </div>
  );
}
