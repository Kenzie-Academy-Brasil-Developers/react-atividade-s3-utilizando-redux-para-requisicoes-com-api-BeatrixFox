import { useSelector } from "react-redux";
import { Container, DigiList } from "./style";

const DigimonList = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <Container>
      {digimons.map((digimon, index) => {
        return (
          <DigiList key={index}>
            <h5>{digimon.name}</h5>
            <img src={digimon.img} alt={digimon.name} />
            <p>Level : {digimon.level}</p>
          </DigiList>
        );
      })}
    </Container>
  );
};

export default DigimonList;
