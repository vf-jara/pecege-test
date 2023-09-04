import { CardContainer } from "./ListCard.style"

type CardProps = {
    id: number,
    name: string,
    phone: string,
    email: string
}

export default function ListCard({id, name, phone, email} : CardProps) {
  return (
    <CardContainer>
        {name}
    </CardContainer>
  )
}
