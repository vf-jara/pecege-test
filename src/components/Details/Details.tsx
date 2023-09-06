import { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchContacts, removeContactFromData } from '../../api/api';
import Button from '../Button/Button';
import { DetailsContainer, AvatarContainer, ContactData, ButtonsContainer, Modal } from './Details.style'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

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
        <>
        <DetailsContainer>
            <AvatarContainer>
              <img src={`https://robohash.org/"${contact.name}".png?set=set2`}></img>
            </AvatarContainer>
            <ContactData>
              <h2><b>{contact.name}</b></h2>
              <p><b>Phone:</b> {contact.phone}</p>
              <p><b>E-mail:</b> {contact.email}</p>
            </ContactData>
          <ButtonsContainer>
            <Button variant={'default'} onClick={handleEditClick}>
             <EditIcon fontSize='small' color='inherit'/> 
             <span>
              Editar Contato
             </span>
            </Button>
            <Button variant={'red'} onClick={handleDeleteClick}>
              <DeleteForeverIcon fontSize='small' color='inherit'/>
              <span>
                Excluir Contato
              </span>
            </Button>
          </ButtonsContainer>
          <Link to="/" className='return'><CloseIcon color='error' fontSize='large'/></Link>
          </DetailsContainer>
          {showConfirmation && (
            <Modal onClick={(e) => {
              if(e.target === e.currentTarget){
                setShowConfirmation(false);
              }
            }}>
              <div>
                <p>Tem certeza de que deseja excluir {contact.name}?</p>
                <div>
                  <Button variant='red' onClick={handleDeleteConfirm}>Sim</Button>
                  <Button variant='default' onClick={() => setShowConfirmation(false)}>Não</Button>
                </div>
              </div>
            </Modal>
          )}
          </>
      ) : (
        <div>Nenhum Contato Encontrado</div>
      )}
    </>
  );
}