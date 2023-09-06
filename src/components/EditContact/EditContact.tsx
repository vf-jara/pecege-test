import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { editContact, fetchContacts } from '../../api/api';
import { ButtonsContainer, ContactData, DetailsContainer } from './EditContact.style';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button/Button';
import SaveIcon from '@mui/icons-material/Save';
import { motion } from 'framer-motion'



export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Obtém os dados dos contatos usando React Query
  const { data: contactsData } = useQuery(['contacts'], fetchContacts);

  // Encontra o contato com o ID correspondente diretamente dos dados obtidos
  const contact = contactsData?.find((contact) => contact.id.toString() === id);

  const [name, setName] = useState<string>(contact?.name || '');
  const [phone, setPhone] = useState<string>(contact?.phone || '');
  const [email, setEmail] = useState<string>(contact?.email || '');

  const handleSave = () => {
    // Verifica se todos os campos estão preenchidos antes de salvar as alterações
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Cria um objeto com as informações atualizadas do contato
    const updatedContact = {
      id: parseInt(id ?? '1', 10), // Certifica de que o ID seja um número
      name,
      phone,
      email,
    };

    // Atualiza o contato 
    const updatedContactsData = editContact(contactsData!, updatedContact)
    // Atualiza os dados na consulta usando o queryClient
    queryClient.setQueryData(['contacts'], updatedContactsData);

    // Redireciona de volta à página de detalhes após a edição
    navigate(`/details/${id}`);
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.3}}>
      <DetailsContainer>
        <div className='title'>
          <h2>Editar {contact?.name}</h2>
        </div>
        <ContactData>
        <label htmlFor='name'>Nome: </label>
          <input
            type="text"
            placeholder="O belo nome de vosso contato"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            > 
          </input>
          <label htmlFor='phone'>Telefone: </label>
          <input
            type="text"
            placeholder="(xx) xxxx-xxxx"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            > 
          </input>
          <label htmlFor='email'>
            E-mail
          </label>
          <input
            type="text"
            placeholder="Ninguém mais usa Hotmail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            >
          </input>
        </ContactData>
        <ButtonsContainer>
          <Button variant={'green'} onClick={handleSave}>
            <SaveIcon fontSize='inherit' color='inherit'/>
            Salvar
          </Button>
        </ButtonsContainer>
        <Link to={`/details/${contact?.id}`} className='return'><CloseIcon color='error' fontSize='large'/></Link>
        </DetailsContainer>
      </motion.div>
  );
}
