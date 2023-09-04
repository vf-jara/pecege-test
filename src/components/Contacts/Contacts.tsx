import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContactsContext } from '../../context/ContactsContext';
import ListCard from '../ListCard/ListCard';

interface Data {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export default function Contacts() {
  const { data } = useContactsContext();
  const [orderBy, setOrderBy] = useState<string>('id'); //state para decidir qual tipo de ordenação será aplicada
  const [sortedData, setSortedData] = useState<Data[] | undefined>(data); //State para ordenação
  const [searchQuery, setSearchQuery] = useState<string>(''); // State para busca

  useEffect(() => {
    // Ordenar os dados sempre que o valor de 'orderBy' ou 'data' mudar
    if (data) {
      setSortedData(sortContacts(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, orderBy]);

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const sortContacts = (data: Data[] | undefined) => {
    if (!data) return undefined;
    if (orderBy === 'name') {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (orderBy === 'id') {
      return [...data].sort((a, b) => a.id - b.id);
    }
  };

  // Filtrar os dados baseado no que é digitado na barra de buscas
  const filteredData = sortedData?.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <select value={orderBy} onChange={handleOrderByChange}>
        <option value="name">Ordenar por Nome</option>
        <option value="id">Ordenar por ID</option>
      </select>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredData !== undefined && filteredData.length > 0 ? (
        filteredData.map((contact) => (
          <Link to={`details/${contact.id}`} key={contact.id}>
            <ListCard contact={contact} />
          </Link>
        ))
      ) : (
        "No matching contacts"
      )}
    </>
  );
}
