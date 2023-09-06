import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../ListCard/ListCard';
import { useQuery } from '@tanstack/react-query'
import { fetchContacts } from '../../api/api';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBar, SortContainer, ContactsContainer, Navigation, ListContainer, LoadingContainer } from './Contacts.style';
import { ProgressBar } from 'react-loader-spinner';
import { motion } from "framer-motion"

const container = {
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
}

const variants = {
  visible: { opacity: 1, y:0 },
  hidden: { opacity: 0, y:15 },

}

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
    return(
      <ContactsContainer>
        <LoadingContainer>
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#f20c3a'
            barColor = '#f20c3a'
          />
          </LoadingContainer>
        </ContactsContainer>
)}

  if (isError) {
    return <div>Erro ao carregar os contatos</div>;
  }

  return (
      <ContactsContainer>
        <Navigation>
          <SearchBar>
            <SearchIcon/>
            <input
              type="text"
              placeholder="Buscar por nome"
              value={searchQuery}
              onChange={handleSearchChange}
              />
          </SearchBar>
          <SortContainer>
            <select value={orderBy} onChange={handleOrderByChange}>
              <option value="name">Ordenar por Nome</option>
              <option value="id">Ordenar por ID</option>
            </select>
          </SortContainer>
        </Navigation>
        <ListContainer>
          <motion.div variants={container} initial="hidden" animate="visible">
          {filteredData !== undefined && filteredData.length > 0 ? (
            filteredData.map((contact) => (
              <Link to={`details/${contact.id}`} key={contact.id}>
                <motion.div variants={variants} transition={{duration: 0.3}}>
                  <ListCard contact={contact} />
                </motion.div>
              </Link>
            ))
            ) : (
              "Nenhum Contato Encontrado"
              )}
              </motion.div>
        </ListContainer>
      </ContactsContainer>  
  );
}
