import { useSelector } from "react-redux";

const DigimonList = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <>
              <li key={index}>
                <h5>{digimon.name}</h5>
                <img
                  src={digimon.img}
                  alt={digimon.name}
                  width="100px"
                  height="100px"
                />
                <p>Level : {digimon.level}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default DigimonList;
