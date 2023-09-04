import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
import { Link, Outlet } from 'react-router-dom'
export default function Home() {


  return (
    <>
    <HomeContainer>
      <Sidebar>
        sidebar
        <Link to={"/"}>
          Home
        </Link>
        <button>
          Adicionar Contato
        </button>
      </Sidebar>
      <ContentsContainer>
        <Outlet/>
      </ContentsContainer>
    </HomeContainer>
    </>
  )
}
