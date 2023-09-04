import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
import { Link, Outlet } from 'react-router-dom'
export default function Home() {

  //Estrutura básica da Home, na Sidebar ficam os botões para adição de novos contatos, de retorno para a Home e com espaço para botões de funções adicionais. No Outlet é que o conteúdo é exibido, como a lista de contatos e seus detalhes
  return (
    <>
    <HomeContainer>
      <Sidebar>
        sidebar
        <Link to={"/"}>
          Home
        </Link>
        <Link to={"/addContact"}>
          Adicionar Contato
        </Link>
      </Sidebar>
      <ContentsContainer>
        <Outlet/>
      </ContentsContainer>
    </HomeContainer>
    </>
  )
}
