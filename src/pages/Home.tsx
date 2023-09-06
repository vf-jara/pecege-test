import Button from '../components/Button/Button.js'
import {HomeContainer, Sidebar, ContentsContainer, NavigationContainer} from './Home.styles.js'
import { Link, Outlet, ScrollRestoration } from 'react-router-dom'
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Logo from '../assets/logo-fixed.svg'

export default function Home() {

  //Estrutura básica da Home, na Sidebar ficam os botões para adição de novos contatos, de retorno para a Home e com espaço para botões de funções adicionais. No Outlet é que o conteúdo é exibido, como a lista de contatos e seus detalhes
  return (
    <>
    <HomeContainer>
      <Sidebar>
        <img src={Logo}></img>
        <NavigationContainer>
          <Link to={"/"}>
            <Button variant='default' >
              <ContactsIcon fontSize='inherit' color="inherit"/><span>Contatos</span>
            </Button>
          </Link>
          <Link to={"/addContact"}>
            <Button variant='green' >
              <PersonAddIcon fontSize='inherit' color='inherit'/><span>Adicionar Contato</span> 
            </Button>
          </Link>
        </NavigationContainer>
      </Sidebar>
      <ContentsContainer>
        <Outlet/>
      </ContentsContainer>
    </HomeContainer>
    <ScrollRestoration />
    </>
  )
}
