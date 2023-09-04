import { useState } from 'react';
import { useContactsContext } from '../../context/ContactsContext';
import { useNavigate } from 'react-router-dom';

export default function AddContact() {
  const { data, AddContact } = useContactsContext();
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const saveNewContact = () => {
    // Verifique se todos os campos estão preenchidos antes de adicionar o contato
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newContact = {
      id: getNextId(),
      name,
      phone,
      email,
    };

    // Chame a função para adicionar o novo contato
    AddContact(newContact);

    // Limpe os campos de entrada após adicionar o contato
    setName('');
    setPhone('');
    setEmail('');

    navigate(`/details/${newContact.id}`)
  };

  // Implemente a função getNextId para gerar um novo ID com base nos contatos existentes
  const getNextId = (): number  => {
    const maxId = data?.reduce((max, contact) => (contact.id > max ? contact.id : max), -1);
    return (maxId ?? -1)+ 1;
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
