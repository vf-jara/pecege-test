type CardProps = {
    name: string,
    phone: string,
    email: string
}

export default function ListCard({name, phone, email} : CardProps) {
  return (
    <div>
        {name}
        {phone}
        {email}
    </div>
  )
}
