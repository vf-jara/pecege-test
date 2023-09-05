import { CardContainer } from "./ListCard.style"

type Data ={
  id: number,
  name: string,
  phone: string,
  email: string
}

type CardProps = {
    contact: Data
}

export default function ListCard({contact} : CardProps) {
  return (
    <CardContainer>
        <div className="image">
          <img src={`https://robohash.org/"${contact.name}".png?set=set2`} alt="" />
        </div>
        <div className="name">
         {contact.name}
        </div>
    </CardContainer>
  )
}
