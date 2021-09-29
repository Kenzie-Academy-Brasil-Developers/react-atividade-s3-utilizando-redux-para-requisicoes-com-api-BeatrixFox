import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  let digiLength = digimons.length - 1;

  if (digimons.length === 0) {
    return (digiLength = "");
  }

  return (
    <div>
      <section key={digiLength}>{digimons[digiLength].name}</section>
    </div>
  );
};

export default Digimons;
