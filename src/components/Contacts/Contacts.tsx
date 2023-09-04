import { useContactsContext } from '../../context/ContactsContext';
import ListCard from '../ListCard/ListCard';

export default function Contacts() {
  const { data } = useContactsContext();
  console.log(data)
  
  return (
    <>
      {
      data?.length>0?
      data?.map((contact) => (
        <ListCard id={contact.id} name={contact.name} phone={contact.phone} email={contact.email}/>
      ))
      :
      "Loading"
      }
    </>
  );
}