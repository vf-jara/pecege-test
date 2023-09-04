import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
import { Outlet } from 'react-router-dom'
export default function Home() {


  return (
    <>
    <HomeContainer>
      <Sidebar>
        sidebar
        <button>
          Home
        </button>
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
