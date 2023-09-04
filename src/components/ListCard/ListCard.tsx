type CardProps = {
    id: number,
    name: string,
    phone: string,
    email: string
}

export default function ListCard({id, name, phone, email} : CardProps) {
  return (
    <div>
        {id}
        {name}
        {phone}
        {email}
    </div>
  )
}
