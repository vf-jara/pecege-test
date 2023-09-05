import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../ListCard/ListCard';
import { useQuery } from '@tanstack/react-query'
import { fetchContacts } from '../../api/api';

interface Data {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export default function Contacts() {
  const { data: contacts, isLoading, isError } = useQuery(['contacts'], fetchContacts)
  const [orderBy, setOrderBy] = useState<string>('id'); //state para decidir qual tipo de ordenação será aplicada
  const [searchQuery, setSearchQuery] = useState<string>(''); // State para busca

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

  const filteredData = sortContacts(contacts)?.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar os contatos</div>;
  }

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
        "Nenhum Contato Encontrado"
      )}
    </>
  );
}
