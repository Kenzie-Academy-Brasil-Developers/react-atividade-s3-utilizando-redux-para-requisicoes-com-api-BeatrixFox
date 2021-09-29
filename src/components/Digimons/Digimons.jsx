import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  const digiLength = digimons.length - 1;

  return (
    <div>
      <section key={digiLength}>{digimons[digiLength].name}</section>
    </div>
  );
};

export default Digimons;
