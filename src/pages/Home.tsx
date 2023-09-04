import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
import Button from '../components/Button/Button.tsx'
export default function Home() {
  return (
    <>
    <HomeContainer>
      <Sidebar>
        sidebar
        <Button>
          Home
        </Button>
        <Button>
          Adicionar Contato
        </Button>
      </Sidebar>
      <ContentsContainer>
        Meu outlet  
      </ContentsContainer>
    </HomeContainer>
    </>
  )
}
