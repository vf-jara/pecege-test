import { useParams } from "react-router-dom";

export default function Details() {

    const { id } = useParams()

    return (
        <div>Details {id}</div>
    )
}
