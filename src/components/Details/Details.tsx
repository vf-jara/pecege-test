import { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchContacts, removeContactFromData } from '../../api/api';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const queryClient = useQueryClient();

  // Obtém os dados dos contatos usando React Query
  const { data: contactsData } = useQuery(['contacts'], fetchContacts);

  // Encontra o contato com o ID correspondente diretamente dos dados obtidos
  const contact = contactsData?.find((item) => item.id === (id? parseInt(id,10) : 0));

  const handleEditClick = () => {
    navigate(`/editContact/${contact?.id}`)
  }

  // Abre a modal para deletar o contato
  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    if (id !== undefined) {
      // Remove o contato da lista de contatos em memória
      const updatedContactsData = removeContactFromData(contact?.id || 0, contactsData!);

      // Atualiza os dados na consulta
      queryClient.setQueryData(['contacts'], updatedContactsData);

      // Redireciona de volta à lista de contatos após a exclusão
      navigate('/');
    }
  };

 
  return (
    <>
      {contact ? (
        <div>
          <div>Details {contact.id}</div>
          <div>
            <img src={`https://robohash.org/"${contact.name}".png?set=set2`} height={80}></img>
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
        <div>Nenhum Contato Encontrado</div>
      )}
    </>
  );
}