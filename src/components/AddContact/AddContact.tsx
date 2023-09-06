import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { addContact, fetchContacts } from '../../api/api';
import { ButtonsContainer, ContactData, DetailsContainer } from './AddContact.styles';
import Button from '../Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { motion } from 'framer-motion'


export default function AddContact() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const { data: contactsData } = useQuery(['contacts'], fetchContacts);

  //Função para salvar o novo contato
  const saveNewContact = () => {

    const newContact = {
      id : -1,
      name,
      phone,
      email,
    };

    // Atualiza os dados dos contatos com o novo contato
    const updatedContactsData = addContact(contactsData!, newContact)
    queryClient.setQueryData(['contacts'], updatedContactsData);

    // Limpa os campos de entrada após adicionar o contato
    setName('');
    setPhone('');
    setEmail('');

    navigate(`/details/${newContact.id}`);
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.3}}>
      <DetailsContainer>
        <div className='title'>
          <h2>Adicionar Novo Contato</h2>
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
          <Button variant={'green'} onClick={saveNewContact}>
            <SaveIcon fontSize='inherit' color='inherit'/>
            Salvar
          </Button>
        </ButtonsContainer>
        <Link to="/" className='return'><CloseIcon color='error' fontSize='large'/></Link>
      </DetailsContainer>
    </motion.div>
  );
}
