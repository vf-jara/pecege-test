import React, { createContext, useState, useEffect, useContext } from "react";

type ChildrenProviderProps ={
    children: React.ReactNode;
}

type Data = {
    id: number,
    name: string,
    phone: string,
    email: string
}

type ContextType ={
    data: Data[] | undefined,
    addContact: (newContact: Data) => void;
    updateContact: (updatedContact: Data) => void;
    deleteContact: (idToDelete: number) => void;
}  

export const ContactsContext = createContext<ContextType | undefined>(undefined)

export const ContactsProvider = ({children}: ChildrenProviderProps) => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data) =>{
            const filteredData: Data[] = data.map((item : Data) => ({
                id: item.id,
                name: item.name,
                phone: item.phone,
                email: item.email,
              }));
            setData(filteredData)
        })
    },[])

    const addContact = (newContact : Data) => {
        setData((prevData) => [...prevData, newContact])
    }

    const updateContact = (updatedContact: Data) => {
        setData((prevData) =>
          prevData.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
          )
        );
    };

    const deleteContact = (idToDelete: number) => {
        // Filtra os contatos, removendo o contato com o ID a ser excluído
        const updatedData = data?.filter((contact) => contact.id !== idToDelete);
    
        setData(updatedData || []);
    };

    return (
        <ContactsContext.Provider value={{data, addContact, updateContact, deleteContact}}>
            {children}
        </ContactsContext.Provider>
)}

// eslint-disable-next-line react-refresh/only-export-components
export function useContactsContext(){
    const context = useContext(ContactsContext)
    if(context === undefined){
        throw new Error( "error loading contacts");
    }else{
        return context;
    }
}