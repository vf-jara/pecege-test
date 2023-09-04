import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useContactsContext } from '../../context/ContactsContext';
import ListCard from '../ListCard/ListCard';

interface Data{
  id: number,
  name: string,
  phone: string,
  email: string
}

export default function Contacts() {
  const { data } = useContactsContext();
  const [orderBy, setOrderBy] = useState<string>('id');
  const [sortedData, setSortedData] = useState<Data[] | undefined>(data);

  useEffect(() => {
    // Ordenar os dados sempre que o valor de 'orderBy' ou 'data' mudar
    if (data) {
      setSortedData(sortContacts(data));
    }
  }, [data, orderBy]);


  const handleOrderByChange=(event: React.ChangeEvent<HTMLSelectElement>)=>{
    setOrderBy(event.target.value)
  }

  const sortContacts = (data: Data[] | undefined) =>{
    if(!data) return undefined;
    if(orderBy==='name'){
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if(orderBy==='id'){
      return [...data].sort((a, b) => a.id - b.id);
    }
  }

  return (
    <>
      <select value={orderBy} onChange={handleOrderByChange}>
        <option value="name">Ordenar por Nome</option>
        <option value="id">Ordenar por ID</option>
      </select>
      {
      sortedData !== undefined && sortedData.length>0?
      sortedData?.map((contact) => (
        <Link to={`details/${contact.id}`}>
          <ListCard id={contact.id} name={contact.name} phone={contact.phone} email={contact.email}/>
        </Link>
      ))
      :
      "Loading"
      }
    </>
  );
}