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
    AddContact: (newContact: Data) => void;
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

    const AddContact = (newContact : Data) => {
        setData((prevData) => [...prevData, newContact])
    }

    return (
        <ContactsContext.Provider value={{data, AddContact}}>
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