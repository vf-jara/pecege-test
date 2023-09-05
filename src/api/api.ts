import { useQuery} from "@tanstack/react-query";

type Contact = {
    id: number,
    name: string,
    phone: string,
    email: string
}

const API_BASE_URL:string = 'https://jsonplaceholder.typicode.com/users';

export const fetchContacts = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar contatos');
    }
    const data: Contact[] = await response.json();
  
    const filteredData: Contact[] = data.map((item: Contact) => ({
      id: item.id,
      name: item.name,
      phone: item.phone,
      email: item.email,
    }));
  
    return filteredData;
};

export function useFetchContacts() {
    return useQuery(['contacts'], fetchContacts);
}

export const removeContactFromData = (contactId: number, contactsData: Contact[]) => {
    // Filtrar a lista de contatos para remover o contato com o ID especificado
    const updatedContactsData = contactsData.filter((contact) => contact.id !== contactId);
    return updatedContactsData;
};

export const addContact = (contactsData: Contact[], newContact: Contact) => {
  
    const nextId = getNextId(contactsData);
  
    newContact.id = nextId;
  
    const updatedContactsData = [...contactsData, newContact];
  
    return updatedContactsData;
};

export const editContact = (contactsData: Contact[], updatedContact: Contact) => {
    const contactIndex = contactsData.findIndex((contact) => contact.id === updatedContact.id);
  
    if (contactIndex === -1) {
      return null;
    }
  
    const updatedContactsData = [...contactsData];
    updatedContactsData[contactIndex] = updatedContact;
    
    return updatedContactsData;
};

const getNextId = (contacts: Contact[]) => {
    const maxId = contacts.reduce((max, contact) => (contact.id > max ? contact.id : max), 0);
    return maxId + 1;
};