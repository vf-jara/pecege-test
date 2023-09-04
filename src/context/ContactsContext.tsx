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
            //Os contatos são buscados e salvos em um state, é nesse state que todas as manipulações como adição, edição e remoção irão acontecer, uma vez que a API de busca de dados não permite modificação dos dados no lado servidor.
        })
    },[])

    //função para adição de contatos
    const addContact = (newContact : Data) => {
        setData((prevData) => [...prevData, newContact])
    }

    //função para edição de contatos
    const updateContact = (updatedContact: Data) => {
        setData((prevData) =>
          prevData.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
          )
        );
    };

    //função para deleção de contatos
    const deleteContact = (idToDelete: number) => {
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