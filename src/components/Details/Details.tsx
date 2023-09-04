import { Link, useNavigate, useParams } from "react-router-dom";
import { useContactsContext } from "../../context/ContactsContext";

export default function Details() {
  const { id } = useParams();
  const { data } = useContactsContext();
  const navigate = useNavigate()

  // Find the contact with the matching id
  const contact = data?.find((contact) => contact.id.toString() === id);

  const handleEditClick = () => {
    navigate(`/editContact/${contact?.id}`)
  }

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
          <button onClick={handleEditClick}>Editar</button>
          <Link to="/">Voltar para a lista de contatos</Link>
        </div>
      ) : (
        <div>Contact not found</div>
      )}
    </>
  );
}

