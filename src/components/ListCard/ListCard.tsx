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
        {contact.name}
    </CardContainer>
  )
}
