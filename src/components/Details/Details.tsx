import { useParams } from "react-router-dom";
import { useContactsContext } from "../../context/ContactsContext";

export default function Details() {
  const { id } = useParams();
  const { data } = useContactsContext();

  // Find the contact with the matching id
  const contact = data?.find((contact) => contact.id.toString() === id);

  return (
    <>
      {contact ? (
        <div>
          <div>Details {contact.id}</div>
          <div>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>E-mail: {contact.email}</p>
          </div>
        </div>
      ) : (
        <div>Contact not found</div>
      )}
    </>
  );
}

