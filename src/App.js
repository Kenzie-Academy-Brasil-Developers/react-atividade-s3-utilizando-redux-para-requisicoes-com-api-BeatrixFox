import { Container } from "./style";
import Search from "./components/Search/Search";
import Digimons from "./components/Digimons/Digimons";
import DigimonList from "./components/DigimonList/DigimonList";

function App() {
  return (
    <Container>
      <Search />
      <DigimonList />
      <Digimons />
    </Container>
  );
}

export default App;
