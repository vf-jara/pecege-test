import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContactsContext } from '../../context/ContactsContext';

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, updateContact } = useContactsContext();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    // Encontre o contato com o ID correspondente
    const contact = data?.find((contact) => contact.id.toString() === id);

    // Preencha os campos de entrada com os dados do contato
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
  }, [data, id]);

  const handleSave = () => {
    // Verifique se todos os campos estão preenchidos antes de salvar as alterações
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Crie um objeto com as informações atualizadas do contato
    const updatedContact = {
      id: parseInt(id ?? '0', 10), // Certifique-se de que o ID seja um número
      name,
      phone,
      email,
    };

    // Atualize o contato no contexto
    updateContact(updatedContact);

    // Redirecione de volta à página de detalhes após a edição
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
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
      <button onClick={handleSave}>Salvar Alterações</button>
    </div>
  );
}
