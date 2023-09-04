import { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContactsContext } from "../../context/ContactsContext";

export default function Details() {
  const { id } = useParams();
  const { data, deleteContact } = useContactsContext();
  const navigate = useNavigate()
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);


  // Find the contact with the matching id
  const contact = data?.find((contact) => contact.id.toString() === id);

  const handleEditClick = () => {
    navigate(`/editContact/${contact?.id}`)
  }
  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };
  const handleDeleteConfirm = () => {
    // Chame a função para deletar o contato
    if(id!==undefined){
        deleteContact(parseInt(id,10));
    }

    // Redirecione de volta à lista de contatos após a exclusão
    navigate('/');
  };

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
          <button onClick={handleDeleteClick}>Excluir</button>  
          <Link to="/">Voltar para a lista de contatos</Link>
          {showConfirmation && (
            <div>
              <p>Tem certeza de que deseja excluir este contato?</p>
              <button onClick={handleDeleteConfirm}>Sim</button>
              <button onClick={() => setShowConfirmation(false)}>Não</button>
            </div>
          )}
        </div>
      ) : (
        <div>Contact not found</div>
      )}
    </>
  );
}

