import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { addContact, fetchContacts } from '../../api/api';

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
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button onClick={saveNewContact}>Salvar</button>
    </div>
  );
}
