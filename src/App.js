import { Container } from "./style";
import Search from "./components/Search";
import Digimons from "./components/Digimons";

function App() {
  return (
    <Container>
      <Search />
      <Digimons />
    </Container>
  );
}

export default App;
