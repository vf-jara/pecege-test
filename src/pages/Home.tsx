import {HomeContainer, Sidebar, ContentsContainer} from './Home.styles.js'
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
        Meu outlet  
      </ContentsContainer>
    </HomeContainer>
    </>
  )
}
