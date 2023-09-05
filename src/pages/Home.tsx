import Button from '../components/Button/Button.js'
import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
import { Link, Outlet } from 'react-router-dom'
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Home() {

  //Estrutura básica da Home, na Sidebar ficam os botões para adição de novos contatos, de retorno para a Home e com espaço para botões de funções adicionais. No Outlet é que o conteúdo é exibido, como a lista de contatos e seus detalhes
  return (
    <>
    <HomeContainer>
      <Sidebar>
        sidebar
        <Link to={"/"}>
          <Button variant='default' >
            <ContactsIcon fontSize='small' color="inherit"/> Contatos
          </Button>
        </Link>
        <Link to={"/addContact"}>
          <Button variant='green' >
            <PersonAddIcon fontSize='small' color='inherit'/> Adicionar Contato
          </Button>
        </Link>

      </Sidebar>
      <ContentsContainer>
        <Outlet/>
      </ContentsContainer>
    </HomeContainer>
    </>
  )
}
